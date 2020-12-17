import React from 'react'
import './Home.css'
import Product from "./Product"

function Home() {
    return (
        <div className="home">
        
            <img className="banner" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3196_HOL20_Acquisition/Amazon_GW_DesktopTallHero_ENG_RB-3196_HOL20_v2_Acquisition_1500x600._CB415330765_.jpg" />
           
            <div className="home__product">
           <Product className="each__product"
            id="1"
            title="iRobot Roomba 675 Robot Vacuum-Wi-Fi Connectivity, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors, Self-Charging"
            price= {179.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/816uZdNKYhL._AC_SR263,395_FMwebp_QL65_.jpg "/>
    
             <Product
            id="1"
            title="Super Smash Bros. Ultimate - Nintendo Switch,Smash Bros,kids will love it"
            price= {479.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81aJ-R4E6gL._SY445_.jpg"/>
        </div>
        <div className="home__product">
           <Product className="each__product"
            id="1"
            title="Ryze Tech Tello - Mini Drone Quadcopter UAV for Kids Beginners 5MP Camera HD720 Video 13min Flight Time Education Scratch Programming Toy Selfies,"
            price= {169.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/41jlV+fYPIL.jpg"/>
             <Product
            id="1"
            title="Flame Painted Copper Earrings - Green Tones"
            price= {51.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51hZNzU6zPL._AC_US200_.jpg"/>
             <Product
            id="1"
            title="Roll over image to zoom in
            Personalized Cutting Board, USA Handmade Cutting Board - Personalized Gifts - Wedding Gifts for the Couple, Engagement Gifts"
            price= {179.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51FW0ycQd6L._AC_US200_.jpg"/>
        </div>
        <div className="home__product">
           <Product className="each__product"
            id="1"
            title="Travelambo Womens Walllet RFID Blocking Bifold Multi Card Case Wallet with Zipper Pocket Multi Card Case Wallet with Zipper Pocket"
            price= {34.00}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41vQMfaetDL._AC_UY445_.jpg"/>
        </div>
        </div>
        
    )
}

export default Home
