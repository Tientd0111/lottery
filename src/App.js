import './App.css';
import RootRoutes from "./routes";
import {ToastContainer} from "react-toastify";

function App() {

	return (
		<>
			<RootRoutes/>
			<ToastContainer
				autoClose={1500}
			/>
		</>
	);
}

export default App;
