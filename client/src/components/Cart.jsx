import React from "react"
import styled from "styled-components"
import { removeItem, resetCart } from "../redux/cartReducer"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { makeRequest } from "../makeRequest"
import {loadStripe} from "@stripe/stripe-js"
import DeleteIcon from "@mui/icons-material/Delete"
import { useAuth0 } from "@auth0/auth0-react"
import LoginIcon from '@mui/icons-material/Login'

const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch()

  const { user, loginWithRedirect } = useAuth0()


  const totalPrice = () => {
    let total = 0
    products.forEach((item) => {
      total += item.quantity * item.price;
    })
    return total.toFixed(2)
  }

  const stripePromise = loadStripe(
    "pk_test_51I8btMGaJApZHHGT8XIO4FcLZLotrfvDkGUPbKmhMeynCmTPgKpDgAcMVRrnSOozjvfh9gUfjBXiz14vnU68PRqG00O9zGJ4qP"
  )

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      })
      dispatch(resetCart()) 
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err)
    }
  }

 
  return (
    <Wrapper>     
    <div className="section section-center">
      <h3>Products in your cart</h3>
      {products?.map((item) => (
        <div key={item.id}>
        <div className="title">
          <h4 className="name">{item.title}</h4>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt={item.title} /> 
        </div>
        <div className="item">
          <div className="item-content">
          <div className="price"><h4>Price: ${item.price}</h4></div>
          <div className="size"><h4>Size: {item.size}</h4></div>
          <div className="quantity"><h4>Qty: {item.quantity}</h4></div>
          <div className="subtotal"><h4>Subtotal: ${item.price * item.quantity}</h4></div> 
          </div> 
          <div className="item-clear">
            <button type="button" className="link-btn clear-btn" onClick={()=>dispatch(removeItem(item.id))}><DeleteIcon/></button>
          </div>              
        </div>
        </div>     
      ))}
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>        
      </div>   
      <div className="total">
        <div className="total-display"><h3>Total: ${totalPrice()}</h3></div>
        {user? (
           <button className="checkout-btn" onClick={handlePayment}>PROCEED TO CHECKOUT</button> 
        ) : ( <button type="button" className="auth-btn" onClick={loginWithRedirect}>
        Login <LoginIcon />
      </button>
    )}
       
      </div> 
      <div className="reset-container">
      <button className="reset" onClick={() => dispatch(resetCart())}>Empty cart</button>   
      </div> 
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;
  
  .section {
    width: 40%;
  }

  h3 {
    text-align: center;
  }

  .title {
    margin: 2rem 0;
    color: var(--clr-primary-1)
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .item-clear {
    align-self: start;
  }

  .link-container {
    display: flex;
    justify-content: end;
    margin-top: 2rem;
  }

  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-black);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }

  .clear-btn {
    background: var(--clr-black);
  }

  .total {
    display: felx;
    align-items: center;
    justify-content: space-between;
    margin: 3rem 0;
  }

  .checkout-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-red-dark);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  
  .reset {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-2);
    width: 10rem;
    height: 3rem;
    border-radius: var(--radius);
    font-size: 1rem;
    cursor: pointer;
  }

  .reset-container {
    display: flex;
    align-items: center;
    justify-content: center;

  }
  `

export default Cart