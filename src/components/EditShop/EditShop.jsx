import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./EditShop.css";
import { Box, Button, TextField } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useNavigate, useParams } from "react-router-dom";
import { useShop } from "../../context/ProductContext";

const EditShop = () => {
  const { getOneProduct, oneProduct, editProduct } = useShop();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setImage(oneProduct.image);
      setName(oneProduct.name);
      setPrice(oneProduct.price);
      setType(oneProduct.type);
    }
  }, [oneProduct]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  function hendleSaveShop() {
    const shopObj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };
    editProduct(id, shopObj);
  }

  return (
    <>
      <Header />
      <Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <img
            className="kolecsion"
            src="https://f97o6kd8uk.a.trbcdn.net/upload_jpeg/rk/0b5/Slayd_VL_2024.jpg?_cvc=1707775050"
          ></img>
          <Box
            sx={{
              position: "absolute",
              width: "450px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              marginLeft: "530px",
              height: "49vh",
            }}
          >
            <TextField
              onChange={(e) => setName(e.target.value)}
              id="outlined-basic"
              label="Name"
              variant="filled"
              value={name}
            />
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              value={price}
            />
            <TextField
              sx={{ background: "#fff" }}
              onChange={(e) => setType(e.target.value)}
              id="outlined-basic"
              label="Type"
              variant="filled"
              value={type}
            />
            <TextField
              onChange={(e) => setImage(e.target.value)}
              id="outlined-basic"
              label="image"
              variant="outlined"
              value={image}
            />
            <Button
              onClick={() => {
                navigate(`/`);
                hendleSaveShop();
              }}
              className="btn_save"
              sx={{
                textDecoration: "none",
                margin: "0 0 20px 0",
                fontSize: "20px",
                display: "flex",
                gap: "10px",
                background: "#bold",
                "&:hover": {
                  background: "#112B66",
                },
                fontWeight: "bold",
              }}
              variant="contained"
            >
              <LocalGroceryStoreIcon />
              ИЗМЕНИТЬ
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "50px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "60px",
            objectFit: "cover",
          }}
        >
          <img
            src="https://a.lmcdn.ru/bs2/76717/nike.59A5379E.jpg"
            class="_image_qfdvy_13"
          ></img>
          <img
            src="https://a.lmcdn.ru/bs2/76717/mango.59A5379E.jpg"
            class="_image_qfdvy_13"
          ></img>
          <img
            src="https://a.lmcdn.ru/bs2/76717/asics.59A5379E.png"
            class="_image_qfdvy_13"
          ></img>
          <img
            src="https://a.lmcdn.ru/bs2/76717/logo_TH_100-80.59A5379E.png"
            class="_image_qfdvy_13"
          ></img>
          <img
            src="https://a.lmcdn.ru/bs2/76717/river_island.59A5379E.jpg"
            class="_image_qfdvy_13"
          ></img>
          <img
            src="https://a.lmcdn.ru/bs2/76717/gap.59A5379E.png"
            class="_image_qfdvy_13"
          ></img>
          <img
            src="https://a.lmcdn.ru/bs2/76717/adidasperformance.59A5379E.jpg"
            class="_image_qfdvy_13"
          ></img>
          <img
            src="https://a.lmcdn.ru/bs2/76717/logo_100-80_3.59A5379E.png"
            class="_image_qfdvy_13"
          ></img>
        </Box>
      </Box>
    </>
  );
};

export default EditShop;
