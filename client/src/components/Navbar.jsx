import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import img from "../assets/logo.png"
import { toggleSidebar } from "../redux/sidebarReducer"
import MenuSharpIcon from "@mui/icons-material/MenuSharp"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import Spinner from "../components/Spinner"
import Error from "../components/Error"

const Navbar = () => {

  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  
  const [cartCount, setCartCount] = useState(0)
  const products = useSelector((state) => state.cart.products)
  const { isLoading, error } = useAuth0()

  useEffect(() => {
    setCartCount(products.length)
  }, [products])

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <Error />
  }


  return (
    <Wrapper className="navbarContainer">
        <div className="left">
          <Link to="/" className="logo"><img src={img} alt="" /></Link>
          <button type="button" className="nav-toggle" onClick={toggle}>
            <MenuSharpIcon />
          </button>
          <div className="navbarLinks">
          <div className="item"><Link to="/about">About</Link></div>
          <div className="item"><Link to="/products">Products</Link></div>
          <div className="item"><Link to="/contact">Contact</Link></div>
          </div>         
        </div>
        <div className="center">
          <h4>Ken Lange's Digital Art</h4>
        </div>
        <div className="right">
          <div className="login">
            {!error && !isLoading && (
              <>
                <LoginButton />
                <LogoutButton />
              </>
            )}
          </div>
          <div className="icon">
            <Link to="/cart" className="cartIcon" >
              <ShoppingCartIcon/>
              <span>{products.length}</span>
              </Link>
            </div>
          </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
height: 5rem;
display: flex;
align-items: center;
justify-content: space-between;

h4 {
  font-size: 0.8rem;
}

.left {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}

img {
  width: 80px;
  margin-left: 1rem;
} 

.item {
  color: var(--clr-primary-1);
  font-size: 1.2rem;
  gap: 0.6rem;
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
}

.icon {
  gap: 1rem;
  color: var(--clr-black);
  cursor: pointer;
}

.cartIcon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

span {
  font-size: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--clr-red-dark);
  color: var(--clr-white);
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-toggle {
  background: transparent;
  border: transparent;
  color: var(--clr-primary-2);
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
}
.navbarLinks {
  display: none;
}

@media screen and (min-width: 800px){
  background-color: var(--clr-primary-3);
  top: 0;
  z-index: 100;
  height: 7rem;
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  align-self: flex-start;
  
  h4 {
    font-size: 1.5rem;
  }
  .navbarContainer{
    margin: 0 auto;
    width: 90vw;
    max-width: var(--max-width);
    }
  .nav-toggle {
    display: none;
  }

  .navbarLinks {
    display: flex;
    justify-content: start;
    li {
      margin: 0 0.5rem;
    }
    a {
      color: var(--clr-primary-1);
      font-size: 1.2rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 0.5rem;
      &:hover {
        border-bottom: 2px solid var(--clr-green);
      }
    } 



`
export default Navbar