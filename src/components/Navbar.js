import React,{useState} from 'react'

import {Link,useNavigate} from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal.js';
import Cart from "../screens/Cart";
import {useCart} from "./RedContext.js";

const Navbar = () => {
  const[cartView,setcartView] = useState(false);
  let data = useCart();

  const navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");    


  }
  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">MFoody</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active fs-5 text-info" aria-current="page" to="/">Home</Link>
        </li>

        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
          <Link className="nav-link active fs-5 text-info" aria-current="page" to="/myOrder">My Orders</Link>
        </li>:""}       
      </ul>

      {(!localStorage.getItem("authToken"))?

      <div className='d-flex'>
        <Link className="btn bg-primary text-white mx-1" to="/login">Login</Link>
                
        <Link className="btn bg-primary text-white mx-1" to="/CreateUser">Signup</Link>
      </div>
      :
      <div>
      <div className="btn bg-primary text-white mx-2" onClick={()=>{setcartView(true)}}>My Cart {" "}
      <Badge pill bg="danger">{data.length}</Badge>
      
      </div>
      {cartView? <Modal onClose={()=>setcartView(false)}><Cart></Cart></Modal> : null}     
      
      <div className="btn bg-danger text-black mx-2" onClick={handleLogout}>Logout</div>
      </div>}
            



      
      
        


      
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar;