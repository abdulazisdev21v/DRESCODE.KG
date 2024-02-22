import { Box } from "@mui/material";
import "./MenuFilter.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShop } from "../../context/ProductContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";

const MenuCard = ({ el }) => {
  const { deleteProduct } = useShop();
  return (
    <Box className="card">
      <img className="card_shop" src={el.image} alt="" />
      <Box className="card_text">
        <h1 style={{ color: "silver", fontSize: "30px" }}>{el.name}</h1>
        <h1 style={{ color: "azure", fontSize: "25px", padding: "10px" }}>
          `Цена:{el.price}`сом
        </h1>
        <Box
          sx={{
            marginLeft: "60px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "#fff",
          }}
        >
          <h1 style={{ color: "#fff" }}>{el.type}`men</h1>
          <DeleteIcon onClick={() => deleteProduct(el.id)} />
          <Link to={`/edit/${el.id}`}>
            <LocalMallIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuCard;
