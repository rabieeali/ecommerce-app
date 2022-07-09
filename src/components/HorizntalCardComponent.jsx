
import { useCartContextActions } from "../context/CartProvider";
import { ADD_TO_CART, DELETE_FROM_CART } from "../context/actionTypes";

const HorizntalCardComponent = ({ image, name, price, quantity, item }) => {
  const dispatch = useCartContextActions();
  const incHandler = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const decHandler = () => {
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };

  return (
    <div className="card p-3 mb-3">
      <div className="row g-0">
        <div className="col-md-4 horizontal-card">
          <img
            className="img-fluid w-100 shadow border-radius-2 h-100"
            src={image}
            alt={name}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price * quantity}$</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row g-2 my-auto">
            <button
              onClick={() => incHandler(item)}
              className="btn-sm btn-success fw-bold"
            >
              +
            </button>
            <button
              onClick={() => decHandler(item)}
              className="btn-sm btn-danger fw-bold"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizntalCardComponent;
