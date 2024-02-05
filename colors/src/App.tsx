import { Routes, Route, BrowserRouter as Router} from "react-router-dom";

import "./Styles/main.scss";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Search from "./Pages/SearchPage";
import AddColorPage from "./Pages/AddColorPage";
import UpdateColorPage from "./Pages/UpdateColorPage";
import DeleteColorPage from "./Pages/DeleteColorPage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add-color" element={<AddColorPage/>} />
        <Route path="/update-color" element={<UpdateColorPage/>} />
        <Route path="/delete-color" element={<DeleteColorPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
