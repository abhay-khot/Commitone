import "./App.css";
import About from "./pages/About";
import Feature1 from "./pages/Courses/CourseOne";
import Feature2 from "./pages/Courses/CourseTwo";
import Feature3 from "./pages/Courses/CourseThree";
import Home from "./pages/Home";
import Login from "./pages/Account/Login";
import Logout from "./pages/Account/Logout";
import MyAccount from "./pages/Account/Myaccount";
import Profile from "./pages/Account/Profile";
import Register from "./pages/Account/Register";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Finite from "./pages/Courses/CourseOne";
import Completed from "./pages/Research/Completed";
import Ongoing from "./pages/Research/Ongoing";
import Prospective from "./pages/Research/Prospective";
import Publication from "./pages/Publications";
import ParMoon from "./pages/ParMoon";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feature1" element={<Finite />} />
          <Route path="/feature2" element={<Feature2 />} />
          <Route path="/feature3" element={<Feature3 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/prospective" element={<Prospective />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/parmoon" element={<ParMoon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
