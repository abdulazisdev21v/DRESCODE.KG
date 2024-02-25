import React from "react";
import "./Shopes.css";
import { Box, Typography } from "@mui/material";
import pana from "../../image/pana.jpg";
import pana2 from "../../image/pana2.jpg";
import nike from "../../image/nike.webp";
const Shopes = () => {
  const fakeAPI = {
    id: 1,
    images: [
      "https://lirus.kg/sources/banner1/10.jpg",
      "https://media.istockphoto.com/id/1309275066/photo/adidas-store-in-hong-kong.jpg?s=612x612&w=0&k=20&c=2FxRDWJySYQami9-vi-sP5ZCP3B7So0VIIjuUmaMd8A=",
      "https://img.championat.com/c/1350x759/news/big/d/p/nike-vypuskaet-novuyu-model-air-force_16914919351907171072.jpg",
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F08%2Fmarc-marquez-asics-gel-1130-sole-mates-interview-00.jpg?w=960&cbr=1&q=90&fit=max",
      "https://www.circlebdiecast.com/resize/Shared/Images/Product/Chase-Elliott-24-Kelley-Blue-Book-OSFM-Blue-Under-Armour-Hat/C246111020-2.jpg?bw=500&bh=500",
      "https://image1.lacoste.com/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-INT-Site/Library-Sites-LacosteContent/en/dw071cc375/fw23/homepage/2023-11-22/4C-lookbook-desktop.jpg?imwidth=840&impolicy=custom",
    ],
  };
  return (
    <Box id="block">
      <Box className="container">
        <Box className="block">
          <Box className="block-text">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Главная Мену
            </Typography>
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
                Топовые Компания{" "}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginLeft: "15px" }} className="slaiders">
            <img className="pana" src={pana} alt="pana" />

            <Box className="logo">
              <img className="pana2" src={pana2} alt="pana2" />
              <Typography
                variant="h4"
                sx={{
                  marginTop: "-190px",
                  color: "#fff",
                  marginLeft: "18px",
                  fontWeight: "bold",
                }}
              >
                Педжак мужская
              </Typography>
            </Box>
            <Box>
              <img className="nike" src={nike} alt="nike" />
              <Typography
                variant="h4"
                sx={{
                  marginTop: "-320px",
                  color: "#fff",
                  marginLeft: "15px",
                  fontWeight: "bold",
                }}
              >
                nike force
              </Typography>
            </Box>
            {fakeAPI.images.map((el) => (
              <Box className="slaider" key={el.id}>
                <img className="slaider2" src={el} alt="" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Shopes;
{
  /* <KeyboardDoubleArrowRightIcon sx={{ fontSize: "50px" }} /> */
}

{
  /* <a href="https://api.whatsapp.com/send/?phone=704208686&text&type=phone_number&app_absent=0">
                  DRESCODE
                </a> */
}
