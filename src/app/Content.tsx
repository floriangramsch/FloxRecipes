import { Box } from "@mui/material";
import { usePageStore } from "./stores/pageStore";
import Landing from "./components/Content/Landing";
import Recipe from "./components/Content/Recipe";
import NewRecipe from "./components/NewRecipe/NewRecipe";

export default function Content() {
  const { currentPage } = usePageStore();

  return (
    <Box sx={{ p: 1, width: "100%", display: "flex", flexDirection: "column" }}>
      {currentPage === "landing" && <Landing />}
      {currentPage === "recipe" && <Recipe />}
      {currentPage === "newRecipe" && <NewRecipe />}
    </Box>
  );
}
