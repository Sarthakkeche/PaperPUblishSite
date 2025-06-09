import { useRoutes } from "react-router-dom";
import Home from './Components/Home';
import AboutUsContent from "./Components/About";
import ContactUsContent  from "./Components/ContactUs";
import Nav from "./Components/Nav";
const RoutesConfig = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path:"about", element:<AboutUsContent/>},
    { path:"contact",element:<ContactUsContent/>},
    
    

  ]);
};

export default RoutesConfig;

