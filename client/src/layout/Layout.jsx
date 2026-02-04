import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Banner from "../components/banner";

export default function Layout() {
  return (
    <>
      <Banner />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
