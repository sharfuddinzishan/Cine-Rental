import { useContext } from "react";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header></Header>
      <main>
        <div className="container grid gap-[3.5rem] lg:grid-cols-[218px_1fr]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
    </div>
  );
};

export default Page;
