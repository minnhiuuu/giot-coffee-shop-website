// Impoprt các thư viện cần thiết
import { Routes, Route, Navigate } from "react-router-dom";
// Impport file js của các trang
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Membership from "../pages/Membership";
import Menu from "../pages/Menu";
import News from "../pages/News";
import Reservation from "../pages/Reservation";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/membership" element={<Membership />} />
      {/* 404 */}
      <Route path="*" element={<Navigate to="/404.html" replace />} />
    </Routes>
  );
}

export default AppRoutes;
