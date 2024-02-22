import React from "react";
import Admin from "../components/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import EditShop from "../components/EditShop/EditShop";
import Register from "../components/autentication/Register";
import Signin from "../components/autentication/Signin";

const MainRoutes = () => {
  const MENU = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <ProductPage />, id: 3 },
    { link: "/edit/:id", element: <EditShop />, id: 4 },
    { link: "/register", element: <Register />, id: 5 },
    { link: "sign_in", element: <Signin />, id: 6 },
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
