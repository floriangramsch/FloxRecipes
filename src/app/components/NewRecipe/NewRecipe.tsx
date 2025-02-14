import { usePageStore } from "@/app/stores/pageStore";
import { useRecipeStore } from "@/app/stores/recipeStore";
import { Box, Button, Divider } from "@mui/material";
import { useState } from "react";
import NewIngredients from "./NewIngredients";
import NewInstructions from "./NewInstructions";

export default function NewRecipe() {
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstrunctions] = useState<string[]>([]);

  const { addRecipe, setRecipe } = useRecipeStore();
  const { setPage } = usePageStore();

  const addNewRecipe = () => {
    if (ingredients === "" || instructions.length === 0) return;
    const newRecipe = {
      title: "Test3",
      ingredients: JSON.parse(ingredients),
      steps: instructions,
    };
    addRecipe(newRecipe);
    setRecipe(newRecipe);
    setPage("recipe");
  };

  return (
    <Box>
      <NewIngredients
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      <Divider sx={{ my: 1 }} />
      <NewInstructions
        instructions={instructions}
        setInstrunctions={setInstrunctions}
      />

      <Divider />
      <Button onClick={addNewRecipe} sx={{ m: 1 }} variant="contained">
        Add Recipe
      </Button>
    </Box>
  );
}
