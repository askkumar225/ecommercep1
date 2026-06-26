

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addcart } from "../../Redux/Cart/CartSlice";

export const SingleProduct = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const [product, setProduct] = useState({});

    useEffect(() => {

        async function getSingleProduct() {

            const { data } = await axios.get(
                `https://dummyjson.com/products/${id}`
            );

            setProduct(data);
        }

        getSingleProduct();

    }, [id]);

    return (
        <div className="container  mt-5">

            <div
                className="card shadow p-4 mx-auto"
                style={{ maxWidth: "900px" }}
            >
                <div className="row align-items-center">

                    {/* Left Side Image */}
                    <div className="col-md-5 text-center">

                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="img-fluid"
                            style={{
                                height: "250px",
                                objectFit: "contain"
                            }}
                        />

                    </div>

                    {/* Right Side Content */}

                    <div className="col-md-7">
                        <h1 className="fw-bold">
                            {product.title}
                        </h1>

                        <h2 className="text-warning mt-3">
                            ₹ {product.price}
                        </h2>

                        <p className="mt-3">
                            {product.description}
                        </p>

                        <h5 className="mb-4">
                            Rating: ⭐ {product.rating}
                        </h5>

                        <button className="btn btn-warning px-4"
                            onClick={() => dispatch(addcart(product))}
                        >
                            Add To Cart
                        </button>
                        <button
                            className="btn btn-success m-2"
                            onClick={() =>
                                dispatch(increment(item.id))
                            }
                        >
                            +
                        </button>
                        <button className="btn btn-danger m-2"
                            onClick={() =>
                                dispatch(decrement(item.id))
                            }
                        >
                            -
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};