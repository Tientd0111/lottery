import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('https://42b4-2402-800-61ae-c31a-9949-fdf8-c6ba-1f96.ap.ngrok.io', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))