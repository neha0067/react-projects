import "./App.css";
import React, { useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer";
import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const AppContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state.loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <AppContext.Provider value={{...state}}>
          <main>
            <Navbar />
            {/* <CartContainer /> */}
          </main>
        </AppContext.Provider>
      )}
    </div>
  );
}

export default App;
