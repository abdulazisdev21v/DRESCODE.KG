import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Shopes from "../components/Shopes/Shopes";
import Header from "../components/Header/Header";
import MenuProduct from "../components/Recomendations/MenuProduct";
import MenuFilter from "../components/Recomendations/MenuFilter";

const ProductPage = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Header />
        <Shopes />
        <NavBar />
        <Box>
          <MenuFilter />
          <Box>
            <MenuProduct />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProductPage;
