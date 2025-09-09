# 💬 Real-Time Chat Application

A modern, real-time chat application built with Node.js, Express.js, and Socket.IO.

## ✨ Features

- **Real-time messaging** - Messages appear instantly for all connected users
- **User identification** - Each user has a unique username
- **Typing indicators** - See when someone is typing
- **User join/leave notifications** - Get notified when users enter or leave
- **Online user counter** - See how many users are currently online
- **Timestamps** - Every message shows when it was sent
- **Responsive design** - Works great on desktop and mobile
- **Modern UI** - Clean, gradient-based design with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd chat_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and go to:
```
http://localhost:3000
```

## 🛠️ Development

For development with auto-restart on file changes:

```bash
npm run dev
```

## 📁 Project Structure

```
chat_app/
├── public/
│   ├── index.html      # Frontend HTML
│   └── style.css       # Styles and responsive design
├── server.js           # Express server with Socket.IO
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🔧 Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)

### Server Configuration

The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## 🌟 Technical Features

### Backend (server.js)
- Express.js web server
- Socket.IO for real-time communication
- User session management
- Message broadcasting
- Typing indicator system
- Connection/disconnection handling

### Frontend (public/)
- Vanilla JavaScript (no frameworks)
- Socket.IO client
- Responsive CSS design
- Real-time UI updates
- Message sanitization
- Smooth animations

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

ISC License

## 🚀 Future Enhancements

- [ ] Message history persistence
- [ ] Private messaging
- [ ] File sharing
- [ ] Emoji support
- [ ] User avatars
- [ ] Message reactions
- [ ] Chat rooms/channels
- [ ] User authentication
- [ ] Message encryption

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port using `PORT=8080 npm start`
2. **Messages not appearing**: Check browser console for errors
3. **Can't connect**: Ensure the server is running and accessible

### Getting Help

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Check the server console for Node.js errors
3. Ensure all dependencies are installed (`npm install`)
4. Try restarting the server

---

Built with ❤️ using Node.js, Express.js, and Socket.IO
