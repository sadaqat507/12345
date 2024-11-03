import "./App.scss";
import Pages from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/css/bootstrap.min.css';

 
import { useContext } from "react";
// import ContextProvider from "./context/Appcontext";
import './config/global.js'
import { Context } from "./context/Appcontext.js";
function App() {
  const {loading}=useContext(Context)

  return (
    <>
      {loading ? (
        <div
          className="w-100 text-Center"
          style={{ height: "100vh", backgroundColor: "#F3F4F6" }}
        >
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="w-100 border">
            
            <Pages className="pages border border-success m-0 p-0 " />
        </div>
      )}
    </>
  );
}

export default App;
