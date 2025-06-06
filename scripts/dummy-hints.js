// tiny Node script for testing hint stream
const WebSocket = require("ws");

const ws = new WebSocket(process.env.NEXT_PUBLIC_LK_URL, {
  headers: { Authorization: process.env.NEXT_PUBLIC_FACILITATOR_TOKEN },
});

ws.on("open", () => {
  console.log("Connected to LiveKit - sending dummy hints every 5s");
  let i = 1;
  setInterval(() => {
    const msg = `Hint ${i++}: breathe and stay curious.`;
    ws.send(msg); // LiveKit server will broadcast to same room
    console.log("Sent:", msg);
  }, 5000);
});

ws.on("error", (error) => {
  console.error("WebSocket error:", error);
});

ws.on("close", () => {
  console.log("WebSocket connection closed");
}); 