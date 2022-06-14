import React from "react";
import { Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const buttonStyles = makeStyles((theme) => ({
  paperCard: {
    minHeight: 256,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "&:hover": {
      boxShadow: "0px 0px 15px #777",
      cursor: "pointer",
    },
  },
  label: {
    fontSize: 32,
    maxWidth: "80%",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

const StyleButton = ({ name, children, action }) => {
  const classes = buttonStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div onClick={action}>
          <Paper className={classes.paperCard} variant="outlined">
            {children}
            <span className={classes.label}>{name}</span>
          </Paper>
        </div>
      </Grid>
    </ThemeProvider>
  );
};

export { StyleButton };
