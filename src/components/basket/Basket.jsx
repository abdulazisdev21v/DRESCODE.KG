import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useShop } from "../../context/ProductContext";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import "./Basket.css";
import basket2 from "../../image/basket2.avif";

export default function Basket() {
  const { getOneProduct, oneProduct } = useShop();
  const { id } = useParams();
  React.useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <>
      <Header />
      <Box>
        <Box className="curent">
          <img src={basket2} alt="basket" />
        </Box>
        <Box className="basket">
          <Box className="basket_text">
            <Card
              sx={{
                maxWidth: 345,
                marginLeft: "20px",
                textAlign: "center",
                padding: "10px",
                background: "#0e2e79d4",
              }}
            >
              <CardMedia
                sx={{ height: 240 }}
                image={oneProduct.image}
                title="green iguana"
              />

              <CardContent>
                <Typography
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {oneProduct.name}
                </Typography>
                <Typography
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {oneProduct.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/">
                  <Button
                    sx={{ color: "#000", fontWeight: "bold", color: "#fff" }}
                    size="small"
                  >
                    продолжить шопинг
                  </Button>
                </Link>
                <Button sx={{ color: "#fff" }} disabled size="small">
                  довабить корзину
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
