import HorizntalCardComponent from "../components/HorizntalCardComponent";
import { useCart } from "../context/CartProvider";

const CartPage = () => {
  const { cart , total } = useCart();
  console.log(cart);

  return (
    <>
      {!cart.length ? (
        <h1 className="text-danger text-center">
          There is no item in the cart!
        </h1>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {cart.map((item) => (
                <HorizntalCardComponent
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  item={item}
                />
              ))}
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Buy</div>
                <div className="card-body">
                  <h5 className="card-title">Total Price: {total} $ </h5>
                  <p className="card-text">
                   Discount:
                  </p>
                  <hr/>
                  <p className="card-text">
                   Final Price:
                  </p>
                  <button className="btn btn-purple w-100">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
