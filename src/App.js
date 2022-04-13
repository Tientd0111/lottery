import './App.css';
import RootRoutes from "./routes";
import {ToastContainer} from "react-toastify";
import BigSmall from "./lode/minigame/BigSmall";

function App() {

	return (
		<>
			<BigSmall/>
			<RootRoutes/>
			<ToastContainer
				autoClose={1500}
			/>
		</>
	);
}

export default App;
