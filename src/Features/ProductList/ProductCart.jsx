import { Link } from "react-router-dom";

export const ProductCart = ({ id, image, item, price, category,}) => {
  return (
    <div
      className="card shadow-lg border-0 h-100"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        transition: "0.3s",
      }}
    >
      {/* Image Section */}
      <div
        className="bg-light d-flex justify-content-center align-items-center"
        style={{
          height: "250px",
        }}
      >
        <img
          src={image}
          alt={item}
          style={{
            maxHeight: "180px",
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="card-body text-center d-flex flex-column"
      >
        <p
          className="text-secondary mb-2"
          style={{
            textTransform: "capitalize",
            fontSize: "15px",
          }}
        >
          {category}
        </p>

        <h5
          className="fw-bold"
          style={{
            minHeight: "55px",
          }}
        >
          {item}
        </h5>

        <h3
          className="text-warning fw-bold my-3"
        >
          ₹ {price}
        </h3>

        <Link
          to={`/products/${id}`}
          className="btn btn-warning fw-bold mt-auto"
          style={{
            borderRadius: "30px",
            padding: "12px",
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};