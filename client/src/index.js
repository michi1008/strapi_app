import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { PersistGate} from "redux-persist/integration/react"
import { persistor } from "./redux/store"
import { Auth0Provider } from "@auth0/auth0-react"

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>  
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
      <App />
      </PersistGate>   
    </Provider>     
    </Auth0Provider>       
  </React.StrictMode>
)
