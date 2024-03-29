import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../Store/CartSlice";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  return (
    <div className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              dispatch(cartActions.removeFromCart(id));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(cartActions.addToCart(props.item));
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
