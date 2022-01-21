import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Reducer/store";

Modal.setAppElement("#root");

ReactDOM.hydrate(
  // <React.StrictMode>
  <Provider
    // store={store(
    //   rootReducer,
    //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__()
    // )}
    store={store}
  >
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
