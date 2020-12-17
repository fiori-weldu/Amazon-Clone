import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const AddToBasket=()=>{
        // dispatch the item into the data layer
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };
  
    
    return (
        <div className="product">
        <div class="product_info">
            <p>{title}<br/><br/></p>
            <p><strong>£{price}</strong></p>
            <div className="rating">
                {Array(rating).fill().map((_)=>(
                  <p>⭐</p>
             ))}
            </div>

            <img src={image}/>
                
        </div>
        <button onClick={AddToBasket}> Add to Cart</button>
        </div>
    )
}

export default Product
