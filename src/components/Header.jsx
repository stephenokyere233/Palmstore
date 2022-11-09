import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
// import About from './pages/About'
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link} from "react-router-dom";
// import { auth } from "./Firebase";

const Header = () => {
  // const [user,loading]=userAuthState(auth)
  const [total,setTotal]=useState('$0.00')
  const [numberOfItems,setNumberOfItems]=useState(0)
  return <header className="header">
    <div className="logo">
      PalmStore
    </div>
    <nav>
      {/* <Router> */}
        <ul>
        <Link className="list" to={'/'}>Home</Link>
        <Link className="list" to={'/product'}>all</Link>
        <Link className="list" to={'/men'}>Men</Link>
        <Link className="list" to={'/women'}>Women</Link>
        <Link className="list" to={'/account'}>account</Link>
                 <div className="cart">
        <span>
        {total}

        </span>
        <span>
          {numberOfItems}
          </span>

    </div>
        </ul>
    
      {/* </Router> */}
        {/* all products</p>
        about</p>
        contact</p>
        account</p> */}

    </nav>
   
    
    </header>;
};

export default Header;
