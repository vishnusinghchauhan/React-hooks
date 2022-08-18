import React, { useReducer } from "react";
const initialOrderState = {
  chicken: 0,
  coke: 0,
  fries: 0,
  total: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHICKEN":
      return {
        ...state,
        chicken: state.chicken + action.value,
        total: state.total + action.value * 3,
      };
    case "COKE":
      return {
        ...state,
        coke: state.coke + action.value,
        total: state.total + action.value * 0.5,
      };
    case "FRIES":
      return {
        ...state,
        fries: state.fries + action.value,
        total: state.total + action.value,
      };
    case "RESET":
      return initialOrderState;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [orderState, dispatch] = useReducer(reducer, initialOrderState);

  const buttonHander = (type, value) => {
    dispatch({
      type: type,
      value: value,
    });
  };

  const resetOrder = () => {
    dispatch({ type: "RESET" });
  };

  const submitOrder = () => {
    alert(`You have submitted your order successfully - ${orderState.total}`);
  };

  return (
    <div>
      <div>
        <p>Chicken: 3 </p>
        <p>Coke: 0.5 </p>
        <p>Fries: 1 </p>
      </div>
      <hr />
      <div>
        <p>
          Chicken: {orderState.chicken} &nbsp;
          <button onClick={() => buttonHander("CHICKEN", 1)}>+</button>
          <button
            onClick={() => buttonHander("CHICKEN", -1)}
            disabled={orderState.chicken === 0}
          >
            -
          </button>
        </p>
        <hr />
        <p>
          Coke: {orderState.coke} &nbsp;
          <button onClick={() => buttonHander("COKE", 1)}>+</button>
          <button
            onClick={() => buttonHander("COKE", -1)}
            disabled={orderState.coke === 0}
          >
            -
          </button>
        </p>
        <hr />
        <p>
          Fired: {orderState.fries} &nbsp;
          <button onClick={() => buttonHander("FRIES", 1)}>+</button>
          <button
            onClick={() => buttonHander("FRIES", -1)}
            disabled={orderState.fries === 0}
          >
            -
          </button>
        </p>
        <hr />

        <p>Total: {orderState.total}</p>
        <p>
          <button onClick={resetOrder}>Reset</button>
          <button onClick={submitOrder}>Order</button>
        </p>
      </div>
    </div>
  );
};

export default UseReducer;
