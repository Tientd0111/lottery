import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('https://servel.winclub24h.com', { transports: ["websocket", "polling"] });
// const socket = io('http://localhost:4003', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))