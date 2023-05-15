import React from "react"
import styled from "styled-components"
import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../redux/cartReducer"
import LogoutIcon from "@mui/icons-material/Logout"

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0()
    const products = useSelector((state) => state.cart.products)
    const dispatch = useDispatch()

    const handleLogout = () => {
      products.forEach((product) => dispatch(removeItem(product.id)));
      logout()
    }

  return (
    isAuthenticated && (
      <Wrapper >
         <button className="auth-btn" onClick={handleLogout}>Sign Out <LogoutIcon/></button>
      </Wrapper>
   
    )  
  )
}
const Wrapper = styled.section`
margin-right: 1rem;

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 0.9rem;
    cursor: pointer;
    svg {
      margin-left: 5px;
      font-size: 1rem;
    }
  } 
  
  @media screen and (min-width: 800px){
    .auth-btn {
      font-size: 1.5rem;
      svg {
        margin-left: 5px;
        font-size: 1.5rem;
      }
    }    
  }
`
export default LogoutButton