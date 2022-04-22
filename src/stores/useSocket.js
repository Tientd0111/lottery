import create from 'zustand';
import { io } from "socket.io-client";
const socket = io('https://winclubser.herokuapp.com', { transports: ["websocket", "polling"] });
socket.connect()

export const useSocket = create(set => ({
	socket: socket
}))