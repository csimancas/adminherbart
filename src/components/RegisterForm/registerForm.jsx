import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright ©"}
      <Link color="inherit" href="https://www.colegioherbart.edu.mx/">
        Colegio Herbart 2022
      </Link>
    </Typography>
  );
}

const theme = createTheme();

const RegisterForm = ({
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  level,
  setLevel,
  levels,
  name,
  setName,
  phone,
  setPhone,
  campus,
  setCampus,
  action,
  register,
  setRegister,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "200px",
              width: "200px",
            }}
            alt="Logo"
            src="https://firebasestorage.googleapis.com/v0/b/herbartapp-2e9ca.appspot.com/o/Escudo-Herbart.png?alt=media&token=fef62424-0eb0-4041-9937-a37cb1e614be"
          />
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre Completo"
              name="name"
              autoComplete="name"
              value={name}
              onChange={setName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              value={email}
              onChange={setEmail}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={setPassword}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="copnfirmPassword"
              label="Confirmar Contraseña"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={confirm}
              onChange={setConfirm}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Celular"
              id="phone"
              autoComplete="phone"
              value={phone}
              onChange={setPhone}
            />
            <InputLabel id="levels">Nivel Escolar</InputLabel>
            <Select
              fullWidth
              labelId="level"
              id="level"
              value={level}
              label="Age"
              onChange={setLevel}
            >
              <MenuItem value={"ADM"}> ADMINISTRACIÓN </MenuItem>
              <MenuItem value={"CON"}> CONTABILIDAD </MenuItem>
              <MenuItem value={"NID"}> NIDO </MenuItem>
              <MenuItem value={"KID"}> PREESCOLAR </MenuItem>
              <MenuItem value={"PRI"}> PRIMARIA </MenuItem>
              <MenuItem value={"SEC"}> SECUNDARIA </MenuItem>
              <MenuItem value={"PRE"}> PREPARATORIA </MenuItem>
            </Select>
            <InputLabel id="campus">Campus</InputLabel>
            <Select
              fullWidth
              labelId="campus"
              id="campus"
              value={campus}
              label="Age"
              onChange={setCampus}
            >
              <MenuItem value={"C"}> Ciudad del Valle </MenuItem>
              <MenuItem value={"V"}> El Verde </MenuItem>
            </Select>
            <Button
              type="button"
              onClick={action}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
          </Box>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export { RegisterForm };
