import { useState } from "react";
import { MovieContex, ThemeContex } from "./contex";
import Page from "./components/Page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContex.Provider value={{ darkMode, setDarkMode }}>
      <MovieContex.Provider value={{ cartData, setCartData }}>
        <Page />
        <ToastContainer />
      </MovieContex.Provider>
    </ThemeContex.Provider>
  );
}

export default App;
