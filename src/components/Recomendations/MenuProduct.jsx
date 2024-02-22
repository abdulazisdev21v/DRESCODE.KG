import React, { useEffect } from "react";
import { useShop } from "../../context/ProductContext";
import MenuCard from "./MenuCard";
import PaginateCard from "../PaginateCard/PaginateCard";
import { Box } from "@mui/material";

const MenuProduct = () => {
  const { readProduct, data, currentPage, filtered } = useShop();

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
        <PaginateCard />
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
