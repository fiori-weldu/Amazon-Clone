import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const totalBasket=(basket)=>basket?.reduce((accumulator, item) => accumulator + item.price,0)
    return (
        <div >
             <CurrencyFormat
        renderText={(value) => (
          <div >
            <p>
        Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={totalBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
