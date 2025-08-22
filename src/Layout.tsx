import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScroolToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
