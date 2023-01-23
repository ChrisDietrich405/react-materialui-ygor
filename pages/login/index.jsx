import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { Container } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  return (
    <Container>
      <FormControl>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="my-input"
          placeholder="username"
          aria-describedby="my-helper-text"
        />

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="my-input"
          placeholder="password"
          aria-describedby="my-helper-text"
        />
      </FormControl>
    </Container>
  );
};

export default Login;
