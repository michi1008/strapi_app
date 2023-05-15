import { useEffect } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { resetCart } from "../redux/cartReducer"

const CheckoutSuccess = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetCart())
  }, [dispatch])

  return (
    <Container>
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 10mins.</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>kena.lange@gmail.com</strong>
      </p>
    </Container>
  )
}

const Container = styled.div`
  min-height: 80vh;
  max-width: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`

export default CheckoutSuccess