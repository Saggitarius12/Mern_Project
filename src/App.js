import './App.css';
import Home from "./screens/Home.js"
import Signup from "./screens/Signup.js"
import Login from "./screens/Login.js"
import RedContext from "./components/RedContext.js"
import MyOrders from "./screens/MyOrders.js"



import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (

    <RedContext>
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/CreateUser" element = {<Signup/>}/>
        <Route exact path="/myOrder" element={<MyOrders/>}/>
        </Routes>
    </div>
    </Router> 
    </RedContext>   
  );
}

export default App;
