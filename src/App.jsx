import { useState } from "react";
import "./App.css";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header></Header>
        <main>
          <div className="container grid gap-[3.5rem] lg:grid-cols-[218px_1fr]">
            <Sidebar></Sidebar>
            <MovieList></MovieList>
          </div>
        </main>
      </MovieContext.Provider>
    </>
  );
}

export default App;
