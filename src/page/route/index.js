import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeView, LoginView, StartView } from "../view";
import { getToken } from "../helper/getToken";

export default function Routers() {
  if (getToken()==null) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="/home" element={<LoginView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/home" element={<HomeView />} />
          <Route path="/login" element={<loginview />} />
        </Routes>
      </Router>
    );
  }
}
