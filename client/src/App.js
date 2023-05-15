import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SingleProductPage from "./pages/SingleProductPage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CartPage from "./pages/CartPage"
import Success from "./components/Success"
import Sidebar from "./components/Sidebar"

const Layout = () => {
  return (
    <div>
    <Navbar/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

const router = createBrowserRouter([  
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/products",
          element:<ProductsPage/>
        },
        {
          path:"/products/:id",
          element:<SingleProductPage/>
        },
        {
          path:"/cart",
          element: <CartPage/>
        },
        {
          path:"/?success=true",
          element: <Success/>
        },

      ]
    }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

