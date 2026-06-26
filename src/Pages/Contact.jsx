

export const Contact = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f3f3",
      }}
    >
      <div
        className="card shadow"
        style={{
          width: "450px",
          borderRadius: "12px",
          backgroundColor: "#fff",
        }}
      >
        <div className="card-body p-4">

          <h1
            className="text-center fw-bold mb-4"
            style={{ color: "#131921" }}
          >
            AK-ShopKart
          </h1>

          <h4 className="mb-3">
            Sign In
          </h4>

          <label>Email</label>
          <input type="email" className="form-control mb-3"
            placeholder="Enter Email"
          />

          <label>Password</label>
          <input type="password" className="form-control mb-3"
            placeholder="Enter Password"
          />

          <button
            className="btn w-100 fw-bold"
            style={{
              backgroundColor: "#febd69",
              color: "#111",
            }}
          >
            Sign In
          </button>

          <hr />

          <button
            className="btn btn-outline-secondary w-100">
            Create Your AK-ShopKart Account
          </button>

        </div>
      </div>
    </div>
  );
};