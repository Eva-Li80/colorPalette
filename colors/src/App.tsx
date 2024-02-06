import { Routes, Route, BrowserRouter as Router} from "react-router-dom";

import "./Styles/main.scss";
import Home from "./Pages/Home";
import Admin from "./Pages/AdminPage";
import Search from "./Pages/SearchPage";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
