import { Box, Typography } from "@mui/material";
import React from "react";
import "./Section.css";
import kovta from "../../image/kofta.jpg";
import kovta2 from "../../image/kovta2.jpg";
import Header from "../Header/Header";
import kovta3 from "../../image/kovta3.jpg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <>
      <Header />
      <Box>
        <Box>
          <h2
            style={{
              textAlign: "center",
              padding: "20px 0 40px 0",
              fontSize: "40px",
            }}
          >
            Рубашки
          </h2>
          <Link to="/">
            <Box
              className="section"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ padding: "20px 30px 0 150px" }}>
                <img src={kovta} alt="" />
                <Typography>Рубашка 0345346</Typography>
                <Typography>ЦЕНА:2000 СОМ</Typography>
              </Box>
              <Box>
                <img src={kovta2} alt="" />
                <Typography>Рубашка 0345346</Typography>
                <Typography>ЦЕНА:2000 СОМ</Typography>
              </Box>
              <Box>
                <img src={kovta3} alt="" />
                <Typography>Рубашка 0345346</Typography>
                <Typography>ЦЕНА:2000 СОМ</Typography>
              </Box>
            </Box>
          </Link>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            padding: "30px 0",
          }}
        >
          Главная Мену
        </Typography>
      </Box>
    </>
  );
};

export default Section;
