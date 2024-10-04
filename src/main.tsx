import ReactDOM from "react-dom/client";
import AppRoutes from "./router";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
