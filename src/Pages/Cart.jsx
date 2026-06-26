import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removecart,} from "../Redux/Cart/CartSlice";

export const Cart = () => {

  const cartData = useSelector(
    state => state.cart
  );

  const dispatch = useDispatch();

  console.log(cartData);

  const total = cartData.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (cartData.length === 0) {
    return (
      <h1 className="text-center mt-5">
        Cart is Empty
      </h1>
    );
  }

  return (
    <div className="container mt-5 mb-5">

      <h1 className="text-center mb-4">
        My Cart
      </h1>

      {cartData.map((item) => (
        <div
          className="card shadow mb-4 p-3"
          key={item.id}
        >
          <div className="row align-items-center">

            <div className="col-md-3 text-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="img-fluid"
                style={{
                  height: "150px",
                  objectFit: "contain"
                }}
              />
            </div>

            <div className="col-md-6">
              <h4>{item.title}</h4>

              <h5 className="text-warning">
                ₹ {item.price}
              </h5>

              <h6>
                Quantity: {item.quantity}
              </h6>
            </div>

            <div className="col-md-3">

              <button className="btn btn-success m-1" onClick={() =>
                  dispatch(increment(item.id))
                }>+
              </button>

              <button className="btn btn-danger m-1" onClick={() =>
                  dispatch(decrement(item.id))
                }>-
              </button>
              <br />
              <button className="btn btn-dark mt-2" onClick={() =>
                  dispatch(removecart(item.id))
                }
              >
                Remove
              </button>

            </div>

          </div>
        </div>
      ))}

      <h2 className="text-end text-warning">
        Total: ₹ {total}
      </h2>

    </div>
  );
};