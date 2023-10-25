import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../Store/CartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQty = useSelector((state) => state.cartReducer.cartItems);
  const totalQty = cartQty.reduce((curr, item) => {
    return curr + Number(item.quantity);
  }, 0);
  console.log(cartQty);
  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(cartActions.toggleCart());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{totalQty}</span>
    </button>
  );
};

export default CartButton;
