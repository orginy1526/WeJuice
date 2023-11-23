import React, { useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BlenderIcon from "@mui/icons-material/Blender";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function App() {
  const [randomFlavor, setRandomFlavor] = useState("");
  const [displayText, setDisplayText] = useState(true);

  const styles = {
    largeIcon: {
      width: 100,
      height: 600,
    },
  };
  const getRandomFlavor = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/getRandomFlavor"
      );

      setRandomFlavor(response.data.flavor);
      setDisplayText(false);
    } catch (error) {
      console.error("Error fetching random flavor:", error);
    }
  };

  return (
    <div>
      <Typography
        align="center"
        fontFamily="monospace"
        variant="h3"
        gutterBottom
      >
        We Juice
      </Typography>{" "}
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Typography
          style={{ display: displayText ? "display" : "none" }}
          variant="h4"
        >
          Press 👉
        </Typography>
        <IconButton
          onClick={getRandomFlavor}
          aria-label="shaker"
          sx={{ color: "black" }}
        >
          <BlenderIcon sx={{ fontSize: "5em" }} />
        </IconButton>
      </Grid>
      <br />
      <Grid display="flex" justifyContent="center" alignItems="center">
        {randomFlavor && (
          <Box
            sx={{
              boxShadow: 0,
              width: "12rem",
              height: "6rem",
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "light" ? "grey.300" : "grey.800",
              p: 1,
              m: 1,
              borderRadius: 2,
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <Typography
              align="center"
              fontFamily="monospace"
              variant="h5"
              gutterBottom
            >
              {" "}
              {randomFlavor}{" "}
            </Typography>
          </Box>
        )}
      </Grid>
    </div>
  );
}

export default App;
