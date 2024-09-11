import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import MovieList from "./../cine/MovieList";
import { ThemeContex } from "../contex";
import { useContext } from "react";


export default function Page() {
  const { darkMode } = useContext(ThemeContex);
  return (
    <div className={`h-full w-full  ${darkMode ? "dark" : ""}`}>
      <div className="mx-10">
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
