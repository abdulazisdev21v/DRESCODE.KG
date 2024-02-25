import { Box } from "@mui/material";
import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Shopes from "../components/Shopes/Shopes";
import Header from "../components/Header/Header";
import MenuProduct from "../components/Recomendations/MenuProduct";
import Footer from "../Footer/Footer";

const ProductPage = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Header />
        <Shopes />
        <NavBar />

        <Box>
          <Box>
            <MenuProduct />
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default ProductPage;
