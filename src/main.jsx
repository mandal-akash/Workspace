import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     children: [
       
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Auth0Provider
     domain="dev-1b0vz1ggqg6bvjnv.us.auth0.com"
     clientId="hUfXrUidaAsxHhwxV1lRciJABZl7ewKT"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}> */}
      <Provider store={store}>
        <App/>
        </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
