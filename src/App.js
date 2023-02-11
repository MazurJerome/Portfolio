import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/404";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Projects from "./pages/Projects";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact="true" path="/" element={<Home />} />
				<Route path="*" element={<Error />} />
				<Route exact="true" path="/Contact" element={<Contact />} />
				<Route exact="true" path="/CV" element={<CV />} />
				<Route exact="true" path="/Projects" element={<Projects />} />
			</Routes>
		</div>
	);
}

export default App;
