import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div>
               <div className="w-50 mx-auto">
                    <Link to="/home" className="">Home</Link>
                    <Link to="/addProducts">AddProduct</Link>
                    <Link to="/showProduct">ShowProduct</Link>
                    <Link to="/Login">Login</Link>
               </div>

          </div>
     );
};

export default Header;