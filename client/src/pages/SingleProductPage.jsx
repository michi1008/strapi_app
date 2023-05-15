import React, {useState} from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartReducer"
import AddBoxIcon from "@mui/icons-material/AddBox"
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox"

const SingleProduct = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
 
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  const [size, setSize] = useState("")
  const [price, setPrice] = useState(data?.attributes?.price?.small)

  const dispatch = useDispatch()

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          {data && (
            <img
              className="single-product-img"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                data?.attributes?.img?.data?.attributes?.url
              }
              alt={data?.attributes?.title}
            />
          )}
          <div className="content">
            {data && (
                <>
                <h2>{data?.attributes?.title}</h2>
                <div className="price-section">
                  <h4 className="sizeP">Small</h4>
                  <p className="price">
                    13" x 19" (33.02 x 48.26cm): <span>${data?.attributes?.price?.small}</span>
                  </p>
                  <h4 className="sizeP">Medium</h4>
                  <p className="price">
                    18" x 24" (45.72 x 60.96cm): <span>${data?.attributes?.price?.medium}</span>
                  </p>
                  <h4 className="sizeP">Large</h4>
                  <p className="price">
                    24" x 36" (60.96 x 91.44cm): <span>${data?.attributes?.price?.large}</span>
                  </p>
                </div>
                  <div className="sizes">
                    <div>
                      <button data-size="small" className={`${size === "small"? "size-btn active":"size-btn"}`} onClick={()=>(setSize("small"), setPrice(data?.attributes?.price?.small))}>Small</button>
                    </div>
                    <div>
                      <button data-size="medium" className={`${size === "medium"? "size-btn active":"size-btn"}`} onClick={()=>(setSize("medium"), setPrice(data?.attributes?.price?.medium))}>Medium</button>
                    </div>
                    <div>
                      <button data-size="large" className={`${size === "large"? "size-btn active":"size-btn"}`} onClick={()=>(setSize("large"), setPrice(data?.attributes?.price?.large))}>Large</button>
                    </div>
                  </div> </>)}
              <div className="amount-btns">
                <button type="button" className="amount-btn"
                  onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
                <IndeterminateCheckBoxIcon/>
                </button>
                <h3>{quantity}</h3>
                <button type="button" className="amount-btn" 
                onClick={() => setQuantity((prev) => prev + 1)}>
                  <AddBoxIcon /></button>
              </div>
            <div>
          <Link to="/cart" className="btn" onClick={()=> dispatch(addToCart( {id:data.id,
                            img:data.attributes.img.data.attributes.url,
                            title:data.attributes.title,
                            price, size, quantity, }))}>Add To Cart</Link></div>
            </div>
    </div>
    </div>
    </Wrapper>
    )}
  
 
 
 
const Wrapper = styled.section`

  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-1);
    font-size : 1.2rem;
  }
  .sizeP {
    font-weight: 700;
    color: var(--clr-red-dark)
  }

  .single-product-img {
  width:100%;
  display:block;
  object-fit:cover;
  border-radius:var(--radius)  
  }
  .sizes {
    display: flex;
    align-items: space-between;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .size-btn {
    display: inline-block;
    width: 5rem;
    height: 2rem;
    border-radius: 10%;
    background: var(--clr-red-dark);
    color: var(--clr-white);
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
    opacity: 1;
  }
 
  .btn {
    margin-top: 1rem;
    width: 12.5rem;
    text-align: center;
  }
  .amount-btns{
    display: grid;
    width: 8rem;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  h3 {
    margin-bottom: 0;
  }

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProduct
