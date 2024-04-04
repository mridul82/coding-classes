import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Conatact from "./Pages/Conatact";

const App: React.FC = () => (
<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
      <Route path="/contact" element={<Conatact />} />
		</Routes>
	</BrowserRouter>
)

export default App;
