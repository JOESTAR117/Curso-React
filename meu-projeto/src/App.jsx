import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import List3 from "./components/Layout/Navbar/List3";

import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <List3 />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="/empresa" element={<Empresa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
