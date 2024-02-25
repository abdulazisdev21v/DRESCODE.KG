import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import unnamed from "../../src/image/unnamed.png";
import telegram from "../image/telegram.webp";
import bakai from "../image/bakai.jpg";
import virta from "../image/virta.jpg";
import demir_16 from "../image/demir_16.jpg";
import footers from "../image/footers.jpg";

const Footer = () => {
  return (
    <Box id="footer">
      <Box clasaName="container">
        <Box sx={{ position: "absolute" }}>
          <img
            style={{ width: "93pc", height: "50vh", marginTop: "-30px" }}
            src={footers}
            alt=""
          />
        </Box>
        <Box
          sx={{
            marginLeft: "80px",
            padding: "29px 45px",
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
          }}
          clasaName="footer"
        >
          <Box clasaName="footer_text">
            <Typography
              sx={{
                padding: "0 0 15px 10px",
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              НАШИ КАНТАКТ{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "0 0 16px 0",
              }}
            >
              <Avatar src={unnamed} alt="" />
              <a
                style={{ color: "#fff", fontSize: "17px" }}
                href="https://api.whatsapp.com/send/?phone=704208686&text&type=phone_number&app_absent=0"
              >
                +996(774)49-08-66
              </a>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar src={telegram} alt="" />
              <a
                style={{ color: "#fff", fontSize: "20px" }}
                href="https://t.me/dresscodekg"
              >
                для заказ{" "}
              </a>
            </Box>
            <Typography sx={{ padding: "10px 0", color: "#fff" }}>
              Московская 58 / Ибраимова <br />
              azis01$@gmail.com{" "}
            </Typography>
          </Box>
          <Box>
            <h2
              style={{
                fontWeight: "bold",
                padding: "0 0 13px 0",
                color: "#fff",
              }}
            >
              КАТАЛОГ
            </h2>
            <Typography sx={{ color: "#fff" }}>НОВИНКИ</Typography>
            <Typography sx={{ color: "#fff" }}>ЖЕНСКАЯ ОДЕЖДА</Typography>
            <Typography sx={{ color: "#fff" }}>МУЖСКАЯ ОДЕЖДА</Typography>
            <Typography sx={{ color: "#fff" }}>БОЛЬШИЕ РАЗМЕРЫ</Typography>
            <Typography sx={{ color: "#fff" }}>СКИДКИ</Typography>
          </Box>
          <Box>
            <h2
              style={{
                fontWeight: "bold",
                padding: "0 0 13px 0",
                color: "#fff",
              }}
            >
              ПОКУПАТЕЛЯМ
            </h2>
            <Typography sx={{ color: "#fff" }}>О КОМПАНИИ</Typography>
            <Typography sx={{ color: "#fff" }}>ДОСТАВКА И ОПЛАТА</Typography>
            <Typography sx={{ color: "#fff" }}>ТАБЛИЦА РАЗМЕРОВ</Typography>
            <Typography sx={{ color: "#fff" }}>КОНТАКТЫ</Typography>
            <Typography sx={{ color: "#fff" }}>ПУБЛИЧНАЯ ОФЕРТА</Typography>
            <Typography sx={{ color: "#fff" }}>ПУБЛИЧНАЯ ОФЕРТА</Typography>
          </Box>
          <Box>
            <h2
              style={{
                fontWeight: "bold",
                padding: "0 0 13px 0",
                color: "#fff",
              }}
            >
              СПОСОБЫ ОПЛАТЫ
            </h2>
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar src={bakai} alt="" />
              <Avatar src={virta} alt="" />
              <Avatar sx={{ fontSize: "50px" }} src={demir_16} alt="" />
            </Box>
            <Typography sx={{ padding: "8px 0", color: "#fff" }}>
              Вы можете оплатить покупки <br />
              наличными при получении, <br />
              либо выбрать другой способ оплаты.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
