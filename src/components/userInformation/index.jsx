import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name === null ? 'null' : name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const UserInformation = ({ name, campus, onCheckIn, onCheckOut }) => {
  return (
    <Grid
      container
      sx={{ aligneItems: "center", justifyContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: 500,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardHeader
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          className="card-header"
          avatar={
            <Avatar
              sx={{
                width: 100,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
              {...stringAvatar(name)}
            />
          }
          title={name}
          subheader={campus}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions disableSpacing>

          <Button variant="contained" onClick={onCheckIn}>Registrar entrada</Button>
          <Button variant="contained" sx={{marginLeft:15}}onClick={onCheckOut}>Registrar Salida</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default UserInformation;
