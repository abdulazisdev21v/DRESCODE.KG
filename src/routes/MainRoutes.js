import React from "react";
import Admin from "../components/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import EditShop from "../components/EditShop/EditShop";
import Register from "../components/authentication/Register";
import { Login } from "@mui/icons-material";
import Basket from "../components/basket/Basket";
import Section from "../components/Navbar/Section";

const MainRoutes = () => {
  const MENU = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <ProductPage />, id: 2 },
    { link: "/edit/:id", element: <EditShop />, id: 3 },
    { link: "/register", element: <Register />, id: 4 },
    { link: "/login", element: <Login />, id: 5 },
    { link: "/basket/:id", element: <Basket />, id: 6 },
    { link: "/section", element: <Section />, id: 7 },
  ];
  return (
    <Routes>
      {MENU.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
