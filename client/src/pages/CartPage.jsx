import { useSelector } from "react-redux";
import  Cart from "../components/Cart"
import { Link } from "react-router-dom"
import styled from "styled-components"

const CartPage = () => {

  const products = useSelector((state) => state.cart.products) 

  if(products.length <1){
    return <Wrapper className="page-100">
      <div className="empty">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn">fill it</Link>
      </div>
    </Wrapper>
  }
  return (
    <main>
      <Wrapper className="page">
        <Cart />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`
export default CartPage