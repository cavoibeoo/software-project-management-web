import { Server } from "ws";

export default function handler(req, res) {
	if (!res.socket.server.wss) {
		console.log("* First use, starting WebSocket server");

		const wss = new Server({ server: res.socket.server });

		wss.on("connection", (ws) => {
			ws.on("message", (message) => {
				console.log("received: %s", message);
				ws.send(`Hello, you sent -> ${message}`);
			});

			ws.send("Hi there, I am a WebSocket server");
		});

		res.socket.server.wss = wss;
	}
	res.end();
}
