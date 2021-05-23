import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.headers["x-icode"] = "D9B68CB75EAA3681";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
