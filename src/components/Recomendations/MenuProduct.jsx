import React, { useEffect } from "react";
import { useShop } from "../../context/ProductContext";
import MenuCard from "./MenuCard";
import PaginateCard from "../PaginateCard/PaginateCard";
import { Box } from "@mui/material";
import NavbarSort from "../PaginateCard/NavbarSort";

const MenuProduct = () => {
  const { readProduct, data, currentPage } = useShop();

  useEffect(() => {
    readProduct();
  });
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <PaginateCard />
          <NavbarSort />
        </Box>
      </Box>

      <Box className="list">
        {data ? (
          currentPage().map((el) => <MenuCard el={el} />)
        ) : (
          <h1>product</h1>
        )}
      </Box>
    </Box>
  );
};

export default MenuProduct;
