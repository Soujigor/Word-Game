import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./Context";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
