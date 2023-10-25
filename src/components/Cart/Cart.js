import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  console.log(cartItems);
  const cartList = cartItems.map((item) => {
    return (
      <li key={item.id}>
        <CartItem
          item={{
            title: item.name,
            quantity: item.quantity,
            total: Number(item.price) * Number(item.quantity),
            price: item.price,
            id: item.id,
          }}
        />
      </li>
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 && <ul>{cartList}</ul>}
    </Card>
  );
};

export default Cart;
