import { Routes, Route } from "react-router-dom"

import Home from "../src/pages/home/Home"
import Contact from "../src/pages/contact/Contact"
import Checkout from "../src/pages/checkout/Checkout"
import Shop from "../src/pages/shop/Shop"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  )
}

export default App