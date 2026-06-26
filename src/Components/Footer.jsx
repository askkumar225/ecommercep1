import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container py-5">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h2 className="text-warning fw-bold">
              AK-ShopKart
            </h2>
            <p>
              Your one-stop destination for Electronics,
              Fashion, Groceries, Beauty Products,
              Accessories, and much more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h4 className="text-warning">
              Quick Links
            </h4>

            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h4 className="text-warning">
              Contact Us
            </h4>

            <p>
              <i className="bi bi-geo-alt-fill"></i>
              {" "}India
            </p>

            <p>
              <i className="bi bi-envelope-fill"></i>
              {" "}support@akshopkart.com
            </p>

            <p>
              <i className="bi bi-telephone-fill"></i>
              {" "}+91 7671920689
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="https://www.linkedin.com/in/r-ashok-ask/">
                <i className="bi bi-linkedin"></i>
              </a>

              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">
            © 2026 AK-ShopKart | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};