import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function (request: any, response: any) {
  console.log(new Date() + ' Received request for ' + request.url);
  response.end('Server is running');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');

  ws.on('message', (message: string) => {
    // Broadcast received message to all clients
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
    console.log('Received message from client:' + message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, function () {
  console.log(new Date() + ' Server is listening on port 4000');
});
