import { cartActions } from "./CartSlice";
import { uiActions } from "./Notification-slice";

export const fetchFromCart = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending...",
        title: "Getting...",
        message: "Getting Cart Data!",
      })
    );

    const fetchCartData = async () => {
      const response = await fetch(
        "https://cart-58d4f-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Error Fetching Cart Data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchCartData();
      dispatch(cartActions.replaceCart(cartData));
      console.log(cartData);
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!!",
          message: "Cart Data recieved Sucessfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart Data Failed",
        })
      );
    }
  };
};

export const sendToCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending...",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );

    const sendCartData = async () => {
      const response = await fetch(
        "https://cart-58d4f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Error sending Cart Data");
      }
    };
    try {
      await sendCartData();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!!",
          message: "Cart Data sent Sucessfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Cart Data Failed",
        })
      );
    }
  };
};
