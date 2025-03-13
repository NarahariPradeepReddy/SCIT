import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";

function Footer() {
  return (
    <Box
      alignItems="center"
      textAlign="center"
      sx={{
        background: "#555",
        padding: 3,
        marginTop: "auto",
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button component={Link} to="/" sx={{ textTransform: "none", color: "#ffffff" }}>
            Home
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/About"  sx={{ textTransform: "none", color: "#ffffff"}}>
            About
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/Contact"  sx={{ textTransform: "none", color: "#ffffff" }}>
            Contact
          </Button>
        </Grid>
      </Grid>

      <Typography sx={{ color: "#fff", marginTop: 2 }}>
        &copy; {new Date().getFullYear()} SCIT. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
