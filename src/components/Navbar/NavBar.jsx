import React from "react";
import "./NavBar.css";
import { Box, Typography } from "@mui/material";
import logo1 from "../../image/logo1.jpg";
import logo2 from "../../image/logo2.png";
import logo3 from "../../image/logo3.jpg";
import logo4 from "../../image/logo4.jpg";
import logo5 from "../../image/logo5.jpg";
import ShopList from "../Recomendations/ShopList";

const NavBar = () => {
  return (
    <Box id="navBar">
      <Box sx={{ gap: "20px", position: "relative" }}>
        <Box
          sx={{
            border: "1px solid gray",
            width: "350px",
          }}
        ></Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
            ТО, ЧТО АКТУАЛЬНО В ЭТОМ СЕЗОНЕ
          </Typography>
        </Box>
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
      <Box
        sx={{
          padding: "30px 0 ",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Box className="rotate">
          <img src={logo1} alt="" />
          <Typography className="p"> Рубашки</Typography>
        </Box>
        <Box className="rotate">
          <img src={logo2} alt="" />
          <Typography className="p"> Рубашки</Typography>
        </Box>
        <Box className="rotate">
          <img src={logo3} alt="" />
          <Typography className="p"> Рубашки</Typography>
        </Box>
        <Box className="rotate">
          <img src={logo4} alt="" />
          <Typography className="p"> Рубашки</Typography>
        </Box>
        <Box className="rotate">
          <img src={logo5} alt="" />
          <Typography className="p"> Рубашки</Typography>
        </Box>
        <Box className="rotate">
          <img src={logo1} alt="" />
          <Typography className="p"> Рубашки</Typography>
        </Box>
      </Box>
      <ShopList />
    </Box>
  );
};

export default NavBar;
