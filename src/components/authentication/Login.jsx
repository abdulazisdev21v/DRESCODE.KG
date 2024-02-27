import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Register.css";

const Login = () => {
  const { login } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function hendleLoginSumbit() {
    try {
      await login(email, password);
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
          Sign in
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
        />
        <Button
          onClick={() => hendleLoginSumbit()}
          variant="contained"
          className="register"
        >
          Sign in
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

export default Login;
