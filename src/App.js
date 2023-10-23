import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartToggle = useSelector((state) => state.cartReducer.toggleCart);
  return (
    <Layout>
      {cartToggle && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
