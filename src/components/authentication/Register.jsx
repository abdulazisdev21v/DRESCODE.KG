import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const { register, signInWithGoogle } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function hendleShopSumbit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Box>
      <Box
        sx={{
          width: "430px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          m: "100px auto",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "bold",
            fontSize: "45px",
          }}
        >
          Регистрация
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="standard-basic"
          label="Почта"
          variant="standard"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          id="standard-basic"
          label="Логин"
          variant="standard"
          type="password"
        />
        <Button
          onClick={hendleShopSumbit}
          variant="contained"
          className="register"
        >
          регистрация
        </Button>
        <Button onClick={() => signInWithGoogle()} variant="contained">
          регистрация через Google
        </Button>
        <Link to="/">
          <Button variant="contained" className="register">
            Назад
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Register;
