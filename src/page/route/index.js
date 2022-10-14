import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeView, LoginView,StartView } from "../view";


export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartView/>} />
        <Route path="/home" element={<HomeView/>} />
        <Route path="/login" element={<LoginView/>} />
      </Routes>
    </Router>
  );
}