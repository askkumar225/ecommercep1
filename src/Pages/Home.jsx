import baby from "../assets/baby.png";

export const Home = () => {
  return (
    <div className="container hero-section"
      style={{ minHeight: "90vh", display: "flex", alignItems: "center", background: "white", paddingTop: "90px" }}>

      <div className="row align-items-center">

        <div className="col-md-6">

          <h5 className="text-warning"
            style={{ fontSize: "35px", fontWeight: "300" }}>
            WELCOME TO AK-SHOPKART
          </h5>

          <h1 className="display-4 fw-bold"
            style={{
              fontSize: "70px",
              lineHeight: "80px"
            }}>
            Best Products,
            <br />
            Best Prices
          </h1>

          <p className="mt-3"
            style={{
              fontSize: "23px",
              lineHeight: "40px"
            }}>
            Discover top quality products at affordable prices.
            Shop your favorites and get them delivered to your doorstep.
          </p>

          <button className="btn btn-warning text-white"
            style={{
              padding: "12px 20px",
              fontSize: "15px",
              borderRadius: "10px"
            }}>
            Shop Now
          </button>

        </div>

        <div className="col-md-6 text-center">

          <img
            src={baby}
            alt="shopping"
            className="img-fluid"
            style={{ maxHeight: "500px" }}
          />

        </div>

      </div>

    </div>
  );
};