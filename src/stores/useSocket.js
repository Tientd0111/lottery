import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('https://67ba-2402-800-61ae-c31a-509d-5795-e1f7-ecf7.ap.ngrok.io', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))