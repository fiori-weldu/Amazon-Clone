import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removefromBascket=()=>{
        dispatch({
            id:id,
            type:"Remove_from_Bascket"
        })
    }
    return (
        <div className="CheckoutProduct">
            <div><img src={image}/></div>
            <div class="product_info">
            <h4>{title}<br/><br/></h4>
            <p><strong>£{price}</strong></p>
            <div className="rating">
                {Array(rating).fill().map((_)=>(
                  <p>⭐</p>
             ))}
            </div>
            <button onClick={removefromBascket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
