import { io, Socket } from 'socket.io-client';

// Create a Socket.IO client instance to connect to your backend
const socket: Socket = io('http://localhost:3000', {
  transports: ['websocket'], // Ensuring WebSocket transport
  reconnection: true, // Automatic reconnection
  reconnectionAttempts: 3, // Number of reconnection attempts
});

export default socket;
