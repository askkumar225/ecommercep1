


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductsList = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  useEffect(() => {

    async function getProducts() {

      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=200"
      );

      setProducts(data.products);
      setLoading(false);
    }

    getProducts();

  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort]);

  const filteredProducts = products.filter((item) => {

    const searchMatch =
      item.title.toLowerCase().includes(
        search.toLowerCase()
      );

    const categoryMatch =
      category === "" ||
      item.category === category;

    return searchMatch && categoryMatch;

  });

  const sortedProducts = [...filteredProducts];

  if (sort === "low") {
    sortedProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    sortedProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  const lastProduct =
    currentPage * productsPerPage;

  const firstProduct =
    lastProduct - productsPerPage;

  const currentProducts =
    sortedProducts.slice(
      firstProduct,
      lastProduct
    );

  const totalPages = Math.ceil(
    sortedProducts.length /
    productsPerPage
  );

  if (loading) {
    return (
      <h1 className="text-center mt-5">
        Loading...
      </h1>
    );
  }

  return (
    <div className="container mt-5">

      <div className="row mb-4">

        <div className="col-md-4 mb-2">
          <input type="text" className="form-control" placeholder="Search Product..."
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <div className="col-md-4 mb-2">
          <select className="form-select" onChange={(e) =>
            setCategory(e.target.value)
          }
          >
            <option value="">All Categories</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances"> Fragrances</option>
            <option value="furniture"> Furniture</option>
            <option value="groceries"> Groceries</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="mens-shirts"> Men's Shirts</option>
            <option value="mens-shoes">Men's Shoes </option>
            <option value="mens-watches">Men's Watches </option>
            <option value="womens-dresses">Women's Dresses </option>
            <option value="womens-shoes"> Women's Shoes</option>
            <option value="womens-bags"> Women's Bags</option>
            <option value="womens-jewellery">Women's Jewellery</option>
            <option value="womens-watches"> Women's Watches</option>
            <option value="skincare">Skincare</option>
            <option value="home-decoration">Home Decoration</option>
            <option value="tops">Tops</option>
            <option value="sunglasses">Sunglasses</option>
            <option value="automotive"> Automotive </option>
            <option value="motorcycle"> Motorcycle</option>
            <option value="lighting"> Lighting</option>
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select className="form-select" onChange={(e) =>
            setSort(e.target.value)
          }
          >
            <option value="">Sort Price</option>
            <option value="low"> Low To High</option>
            <option value="high"> High To Low</option>
          </select>
        </div>
      </div>

      <h4 className="mb-4">
        Products Found: {sortedProducts.length}
      </h4>
      <div className="row">

        {currentProducts.map((item) => (

          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
            key={item.id}
          >
            <div
              className="card shadow h-100 text-center"
              style={{
                borderRadius: "15px"
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="card-img-top p-3"
                style={{
                  height: "220px",
                  objectFit: "contain"
                }}
              />

              <div className="card-body">
                <h5 className="fw-bold"
                  style={{
                    minHeight: "60px"
                  }}
                >
                  {item.title}
                </h5>

                <h4 className="text-warning">
                  ₹ {item.price}
                </h4>

                <p className="text-secondary">
                  {item.category}
                </p>

                <Link
                  to={`/products/${item.id}`}
                  className="btn btn-warning w-100"
                >
                  View Details
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="text-center mt-4 mb-5">

        <button className="btn btn-warning me-3"
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="fw-bold">
          Page {currentPage}
        </span>

        <button className="btn btn-warning ms-3"
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>

    </div>
  );
};