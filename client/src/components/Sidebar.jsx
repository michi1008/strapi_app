import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import img from "../assets/logo.png"
import { openSidebar, closeSidebar, toggleSidebar } from "../redux/sidebarReducer"
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp"

const Sidebar = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isOpen, openSidebar, closeSidebar } = useSelector((state) => state.sidebar)

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>        
    <div className={`${isOpen ? "sidebar show-sidebar": "sidebar"}`}>
        <div className="sidebarHeader"> 
          <img src={img} alt="logo" />    
          <div className="title">
          Ken's digital art
          <div className="underline"></div>       
          </div>
          <button type="button" className="close-btn" onClick={toggle}>
          < HighlightOffSharpIcon fontSize="large" />
          </button>
        </div>
        
        <div>
          <ul className="sidebarLinks">
            <li><Link to="/" onClick={toggle}>Home</Link></li>
            <li><Link to="/about" onClick={toggle} >About</Link><div id="underline"></div></li>
            <li><Link to="/products" onClick={toggle}>Products</Link></li>           
          </ul>  
        </div> 
    </div> 
    </Wrapper>   
  )
}

const Wrapper = styled.section`
text-align: center;
background: var(--clr-primary-3);

.sidebarHeader {
display: flex;
justify-content: space-between;
  img {
      width: 4rem;
      margin-left: 1rem;
      margin-top: 1rem; 
  }
}

.close-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-dark);
  transition: var(--transition);
  cursor: pointer;
  margin-top: 0.2rem;
}

.close-btn:hover {
  color: var(--clr-red);
}
  
.sidebarLinks {
  margin: 2rem;
  font-size: 2rem;
}

.sidebarLinks a:hover {
  color: var(--clr-brown);
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-white);
  transition: var(--transition);
  transform: translate(-100%);
  z-index: -1;
}

.show-sidebar {
  transform: translate(0);
  z-index: 999;
}

.title {
  margin-left: 0.4rem;
  margin-top: 1rem;
  color: var(--clr-dark);
  text-align: center;
  font-size: 2rem;
}

.navUser {
  color: var(--clr-red);
  font-size: 2rem;
}

@media screen and (min-width: 800px){
  .sidebar {
      display: none;
  } 
}
`
export default Sidebar