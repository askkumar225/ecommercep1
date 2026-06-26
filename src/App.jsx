

// import { Routes, Route } from "react-router-dom";

// import { Header } from "./Components/Header";
// import { Footer } from "./Components/Footer";

// import { Home } from "./Pages/Home";
// import { About } from "./Pages/About";
// import { Products } from "./Pages/Products";
// import { Contact } from "./Pages/Contact";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Products } from "./Pages/Products";
import { Contact } from "./Pages/Contact";
import { Cart } from "./Pages/Cart";

import { SingleProduct } from "./Features/ProductList/SingleProduct";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<SingleProduct />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;