import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('http://192.168.1.7:4001', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))