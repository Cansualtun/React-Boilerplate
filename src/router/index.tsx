import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GeneralLayout from "../components/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
