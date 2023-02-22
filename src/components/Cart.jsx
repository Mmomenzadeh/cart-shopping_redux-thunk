import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrement,
  increment,
  removeFromCart,
} from "../redux/Cart/actionCreator";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const orderState = useSelector((state) => state.cartShopping.cart);
  const dispatch = useDispatch();

  const handleChangeQTY = (op, productId) => {
    switch (op) {
      case "+":
        dispatch(increment(productId));
        toast("Successfully added  ");
        break;

      case "-":
        dispatch(decrement(productId));
        toast("Successfully remove");
        break;

      default:
        break;
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    toast("Successfully Deleted");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast("Successfully Cleared");
  };

  return (
    <>
      {orderState.length == 0 ? (
        <div class="col-md-12 text-center">
          <div>
            <i class="bi bi-basket-fill" style={{ fontSize: "100px" }}></i>
          </div>
          <h3 class="text-bold">Cart is empty</h3>
          <Link class="btn btn-outline-dark mt-3" to="/products">
            Products
          </Link>
        </div>
      ) : (
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12 pl-3 pt-3">
              <table className="table table-hover border bg-white">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th style={{ width: "10%" }}>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orderState &&
                    orderState.map((product) => (
                      <tr key={product.id}>
                        <td className="align-middle">
                          <div className="row">
                            <div className="col-lg-2">
                              <img
                                src={product.image}
                                alt="..."
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-lg-10">
                              <h5> {product.name} </h5>
                              <p> {product.description} </p>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">{product.price}</td>
                        <td className="align-middle">
                          <button
                            className="btn btn-sm btn-dark me-2"
                            onClick={() => handleChangeQTY("+", product.id)}
                          >
                            +
                          </button>
                          <span>{product.qty}</span>
                          <button
                            className="btn btn-sm btn-dark ms-2"
                            onClick={() => handleChangeQTY("-", product.id)}
                          >
                            -
                          </button>
                        </td>
                        <td className="align-middle">
                          {product.price * product.qty}
                        </td>
                        <td className="align-middle" style={{ width: "15%" }}>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveFromCart(product.id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <button
                        href="/"
                        className="btn btn-dark"
                        onClick={handleClearCart}
                      >
                        Clear Cart
                      </button>
                    </td>
                    <td colspan="2" className="hidden-xs"></td>
                    <td
                      className="hidden-xs text-center"
                      style={{ width: "15%" }}
                    >
                      <strong>
                        Total :
                        {orderState.reduce((Total, product) => {
                          return Total + product.price * product.qty;
                        }, 0)}{" "}
                      </strong>
                    </td>
                    <td>
                      <a href="/" className="btn btn-success btn-block">
                        Checkout
                      </a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
