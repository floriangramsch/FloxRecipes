import { Box, Typography } from "@mui/material";

export default function Landing() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "full",
        height: "800%",
      }}
    >
      <Typography variant="h1" sx={{ display: "flex", textAlign: "center" }}>
        Welcome to our recipes!
      </Typography>
    </Box>
  );
}
