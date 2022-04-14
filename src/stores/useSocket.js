import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('https://3bed-2402-800-61ae-c31a-fc05-8ebf-32b4-ac0b.ap.ngrok.io', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))