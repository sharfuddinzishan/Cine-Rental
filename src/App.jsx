import "./App.css";
import MovieList from "./cine/MovieList";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container grid gap-[3.5rem] lg:grid-cols-[218px_1fr]">
          <Sidebar></Sidebar>
          <MovieList></MovieList>
        </div>
      </main>
    </>
  );
}

export default App;
