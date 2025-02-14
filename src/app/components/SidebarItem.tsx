import { Box } from "@mui/material";
import { useRecipeStore } from "../stores/recipeStore";
import { RecipeType } from "../types";
import { usePageStore } from "../stores/pageStore";

export default function SidebarItem({ recipe }: { recipe: RecipeType }) {
  const { setRecipe } = useRecipeStore();
  const { setPage } = usePageStore();

  return (
    <Box
      onClick={() => {
        setPage("recipe");
        setRecipe(recipe);
      }}
      sx={{
        bgcolor: "blueviolet",
        p: 1,
        m: 1,
        borderRadius: "4px",
        boxShadow: "initial",
      }}
      className={"flex justify-center cursor-pointer"}
    >
      <div>{recipe.title}</div>
    </Box>
  );
}
