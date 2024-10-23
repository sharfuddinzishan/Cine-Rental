import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page></Page>
          <ToastContainer></ToastContainer>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
