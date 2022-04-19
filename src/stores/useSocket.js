import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('https://f4dc-2001-ee0-41c1-7ab3-829-1a9a-83d8-e66c.ap.ngrok.io', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))