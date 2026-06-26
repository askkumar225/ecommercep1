

export const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#ffffff",
          padding: "60px 30px",
        }}
      >
        <div className="row align-items-center">

          <div className="col-md-6">
            <h5
              style={{
                color: "#ffb703",
                fontWeight: "bold",
              }}
            >
              ABOUT AK-SHOPKART
            </h5>

            <h1
              style={{
                color: "#212529",
                fontSize: "60px",
                fontWeight: "700",
              }}
            >
              Shop Smart,
              <br />
              Live Better
            </h1>

            <p
              style={{
                color: "#555",
                fontSize: "20px",
                lineHeight: "1.8",
              }}
            >
              AK-ShopKart is your trusted online shopping destination offering quality products a affordable prices. We bring thousands of
              products across multiple categories to your fingertips.
            </p>

            <button
              className="btn text-white mt-3"
              style={{
                backgroundColor: "#ffb703",
                border: "none",
                padding: "12px 30px",
                borderRadius: "10px",
              }}
            >
              Shop Now
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
              alt="Shopping"
              className="img-fluid"
              style={{
                maxHeight: "500px",
              }}
            />
          </div>

        </div>
      </div>

      {/* About Details */}
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#f4ecec",
          padding: "80px 50px",
        }}
      >
        <div className="row align-items-center">

          <div className="col-md-6">
            <div className="row g-4">

              <div className="col-6">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                  alt="Electronics"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>

              <div className="col-6">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                  alt="Fashion"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>

            </div>
          </div>

          <div className="col-md-6">
            <h5 className="text-warning fw-bold">
              WHY CHOOSE US
            </h5>

            <h2
              className="fw-bold mb-4"
              style={{
                color: "#212529",
              }}
            >
              Best Shopping Experience
            </h2>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              AK-ShopKart offers Electronics, Fashion, Mobile Phones, Laptops, Beauty Products,
              Home Appliances, Groceries, Sports Items, Accessories and much more.
            </p>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              We focus on quality products, secure
              payments, fast delivery, easy returns,and excellent customer support.
            </p>

            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
              }}
            >
              Our mission is to make online shopping simple, affordable, and enjoyable for
              everyone.
            </p>

            <button
              className="btn text-white"
              style={{
                backgroundColor: "#ffb703",
                border: "none",
                padding: "12px 30px",
                borderRadius: "10px",
              }}
            >
              Explore More
            </button>
          </div>

        </div>
      </div>
    </>
  );
};