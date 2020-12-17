import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
// import SearchIcon from "@material-ui/icons/Search"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';



function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <nav className="header">
            <Link to="/">
           <img className="header__logo" src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt=" "/> 
           </Link >
           <div className= "inline">   <input type="text" 
           className="header_searchInput"/>
           <SearchIcon className="SearchIcone" />
           </div>
         <div className="header__nav">
             <Link to="/login" className="header__link">
                 <div className="header__option" >
                     <span className="header__option1" >Hello Qazi</span>
                     <span className="header__option2">Sign In</span>
                 </div>
             </Link>
             <Link to="/login" className="header__link">
                 <div className="header__option" >
                     <span className="header__option1">Returns</span>
                     <span className="header__option2"> & Orders</span>
                 </div>
             </Link>
             <Link to="/login" className="header__link">
                 <div className="header__option" >
                     <span className="header__option1">Your</span>
                     <span className="header__option2">Prime</span>
                 </div>
             </Link>
             <Link to="/checkout" className="header__link">
                 <div className="checkout__bascket">
                 <ShoppingBasketIcon/>
                 <span className="counter">{basket.length}</span>
                 </div>
             </Link>
         </div>



        </nav>
    )
}

export default Header
