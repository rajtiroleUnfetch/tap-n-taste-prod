// import { Server } from 'socket.io';
// import http from 'http';

// const server = http.createServer(app); // Your Express app
// const io = new Server(server, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST'],
//   },
// });

// io.on('connection', (socket) => {
//   console.log('Admin connected:', socket.id);

//   // Emit notification to admin
//   const notifyAdmin = (order) => {
//     io.emit('newOrder', order);
//   };

//   // Listen to order events
//   socket.on('disconnect', () => {
//     console.log('Admin disconnected:', socket.id);
//   });
// });

// export { server, io, notifyAdmin };
