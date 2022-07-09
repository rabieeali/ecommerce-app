import React from "react";
import { useCartContextActions } from "../context/CartProvider";

const CardComponent = ({ data, name, price, alt, image, id }) => {
  const dispatch = useCartContextActions();

  const addProducHandler = (data) => {
    dispatch({ type: "ADD_TO_CART", payload: data });
  };

  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price} $</p>
          <button
            className="btn btn-info"
            onClick={() => addProducHandler(data)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
