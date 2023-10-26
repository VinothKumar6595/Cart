import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchFromCart, sendToCart } from "./components/Store/cart-actions";
let isInitial = true;
function App() {
  const cartToggle = useSelector((state) => state.cartReducer.toggleCart);
  const cart = useSelector((state) => state.cartReducer);
  const notification = useSelector((state) => state.Ui.notification);
  const changed = useSelector((state) => state.cartReducer.changed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFromCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (changed) {
      dispatch(sendToCart(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartToggle && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
