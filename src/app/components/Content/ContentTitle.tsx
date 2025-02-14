import { RecipeType } from "@/app/types";
import { Box, Link, Typography } from "@mui/material";

export default function ContentTitle(props: Partial<RecipeType>) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 1,
        fontSize: "text-4xl",
      }}
    >
      <Link
        href={props.url ?? "#"}
        target="_blank"
        rel="noopener"
        underline="hover"
        color="inherit"
      >
        <Typography variant="h3">{props?.title}</Typography>
      </Link>
    </Box>
  );
}
