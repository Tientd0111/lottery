import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('https://1c81-2001-ee0-41c1-7ab3-89c4-a373-4e4b-f583.ap.ngrok.io', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))