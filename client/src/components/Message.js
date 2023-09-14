import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Message(props) {
  const { isOwner } = props;
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: isOwner ? "flex-end" : "flex-start",
      }}
    >
      <Box
        sx={{
          maxWidth: 410,
        }}
      >
        <React.Fragment>
          <CardContent style={{ padding: "0px 5px"}}>
            <Typography sx={{ fontSize: 10 }} color="text.primary" gutterBottom>
              User Name
            </Typography>

            <Typography
              color="text.secondary"
              component="div"
              gutterBottom
              sx={{
                fontSize: 10,
                fontWeight: 400,
                backgroundColor: !isOwner ? "lightgray" : "#F5C7A9",
                // display: "inline-block",
                padding: "8px",
                borderRadius: isOwner
                  ? "10px 0px 10px 10px"
                  : "0px 10px 10px 10px",
              }}
            >
              Hi, It's been 15 minutes I am waiting outside the restaurant , and
              food is not ready,Hi, It's been 15 minutes I am waiting outside
              the restaurant , and food is not ready
            </Typography>

            <Typography color="text.secondary" sx={{ fontSize: 9 }}>
              Just Now
            </Typography>
          </CardContent>
        </React.Fragment>
      </Box>
    </Box>
  );
}
