import { Box, Typography } from "@mui/material";
import React from "react";

const ShopList = () => {
  return (
    <Box sx={{ padding: "30px 0" }}>
      <Box>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ border: "1px solid gray", width: "350px" }}></Box>
          <Typography
            sx={{ fontWeight: "bold", textAlign: "center" }}
            variant="h4"
          >
            НОВИНКА
          </Typography>
          <Box
            sx={{
              position: "absolute",
              border: "1px solid gray",
              width: "350px",
              top: "0",
              right: "0",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShopList;
