import './App.css'
import { BrowserRouter } from "react-router-dom";
import RoutesConfig from "./Route.jsx";

function App() {
 
  return (
    <>
      <BrowserRouter>
      <RoutesConfig />
    </BrowserRouter>
    </>
  )
}

export default App

