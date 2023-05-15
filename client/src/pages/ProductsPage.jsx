import React, {useState, useEffect} from "react"
import styled from "styled-components"
import Product from "../components/Product"
import Spinner from "../components/Spinner"
import useFetch from "../hooks/useFetch"
import SearchIcon from "@mui/icons-material/Search"

const ProductsPage = () => {

  const [products, setProducts] = useState([])
  const [query, setQuery] = useState("")
  const { data, loading, error } = useFetch(`/products?populate=*&_q=${query}`)

  useEffect(() => {
    setProducts(Array.isArray(data) ? data : []);
  }, [data])

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
  }

  return (
    <Wrapper className="page">
      <div className="filter">
      <div className="search">
        <form onSubmit={handleSearch}>
          <button type="submit" className="btn"><SearchIcon /></button>
          <input type="text" name="search" placeholder="Search" />          
        </form>

      </div>
      </div>
      <div className="products">   
        {error ? "Something went wrong!" : loading? <Spinner/> : products?.map((item) => (
            <Product item={item} key={item.id} />
        ))}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row:
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: var(--clr-primary-2);

  .filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .search {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: row;
    border-radius: var(--radius);
  
  }

  label {
    margin-right: 1rem;
    text-align: center;
  }

  input {
    text-align: center;
  }

  btn {
    border-radius: 0.25rem, 0, 0, 0.25rem;
  }
  .products {
    display: grid;
    gap: 2rem 1.5rem;
  }

@media (min-width: 768px) {
  .proudcts {
    grid-template_columns: 200px 1fr;
  }    
}

@media (min-width: 992px) {
    .products {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1170px) {
    .products {
        grid-template-columns: repeat(3, 1fr);
    }
}
`
export default ProductsPage
