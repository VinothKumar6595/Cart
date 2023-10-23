import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 && (
        <ul>
          <CartItem
            item={{
              title: "Test",
              quantity: cartItems.length,
              total: cartItems.length * 6,
              price: 6,
            }}
          />
        </ul>
      )}
    </Card>
  );
};

export default Cart;
