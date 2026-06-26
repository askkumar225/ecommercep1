import { Routes, Route } from "react-router-dom"

import { Home } from "../Pages/Home"
import { About } from "../Pages/About"
import { Products } from "../Pages/Products"
import { Cart } from "../Pages/Cart"
import { Contact } from "../Pages/Contact"

import { SingleProduct } from "../Features/ProductList/SingleProduct"


export const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}