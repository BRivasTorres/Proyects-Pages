import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProyectsPage from "./components/ProyectsPage"
import Proyects from "./pages/Proyects";
import About from "./pages/About";
import Credits from "./pages/Credits";

function App() {
  return (
		<div className="w-[100%] max-w-[2000px] bg-primary-color text-secondary-color font-primary-font">
			<BrowserRouter>
				<ProyectsPage />
				<Routes>
					<Route path="/" element={<Proyects />} />
					<Route path="about" element={<About />} />
					<Route path="credits" element={<Credits />} />
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App
