const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Store connected users
const users = new Map();

// Serve static files from "public" folder
app.use(express.static('public'));

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('✅ New user connected:', socket.id);

  // Handle user joining with username
  socket.on('user joined', (username) => {
    users.set(socket.id, username);
    socket.broadcast.emit('user joined', {
      username,
      message: `${username} joined the chat`,
      timestamp: new Date().toLocaleTimeString()
    });
    
    // Send current user count
    io.emit('user count', users.size);
  });

  // Handle chat messages
  socket.on('chat message', (data) => {
    const username = users.get(socket.id) || 'Anonymous';
    const messageData = {
      username,
      message: data.message,
      timestamp: new Date().toLocaleTimeString(),
      id: socket.id
    };
    io.emit('chat message', messageData);
  });

  // Handle typing indicators
  socket.on('typing', () => {
    const username = users.get(socket.id) || 'Anonymous';
    socket.broadcast.emit('typing', { username, id: socket.id });
  });

  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', { id: socket.id });
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    const username = users.get(socket.id) || 'Anonymous';
    console.log('❌ User disconnected:', username);
    
    if (users.has(socket.id)) {
      socket.broadcast.emit('user left', {
        username,
        message: `${username} left the chat`,
        timestamp: new Date().toLocaleTimeString()
      });
      users.delete(socket.id);
      
      // Send updated user count
      io.emit('user count', users.size);
    }
  });
});

// Error handling
server.on('error', (error) => {
  console.error('❌ Server error:', error);
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});