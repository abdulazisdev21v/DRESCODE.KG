import React from "react";
import Admin from "../components/Admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import EditShop from "../components/EditShop/EditShop";
import Register from "../components/authentication/Register";
import Basket from "../components/basket/Basket";
import Section from "../components/Navbar/Section";
import Login from "../components/authentication/Login";
import { ProtectedRoutes } from "../helpers/function";

const MainRoutes = () => {
  const PRIVAT = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/edit/:id", element: <EditShop />, id: 2 },
  ];
  const MENU = [
    { link: "/", element: <ProductPage />, id: 3 },
    { link: "/register", element: <Register />, id: 4 },
    { link: "/login", element: <Login />, id: 5 },
    { link: "/basket/:id", element: <Basket />, id: 6 },
    { link: "/section", element: <Section />, id: 7 },
  ];

  return (
    <Routes>
      <Route title={<ProtectedRoutes />}>
        {PRIVAT.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Route>

      {MENU.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
