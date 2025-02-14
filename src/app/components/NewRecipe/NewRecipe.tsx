import { useGetIngredientsMutation } from "@/app/composables/ollama/useIngredients";
import { usePageStore } from "@/app/stores/pageStore";
import { useRecipeStore } from "@/app/stores/recipeStore";
import {
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";

export default function NewRecipe() {
  const [ingredientsInput, setIngredientsInput] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstrunctions] = useState<string[]>([]);
  const [instructionCount, setInstrunctionCount] = useState<number>(1);

  const { addRecipe, setRecipe } = useRecipeStore();
  const { setPage } = usePageStore();

  const ingredientsMutation = useGetIngredientsMutation();

  const handleIngredients = () => {
    setIngredients("");

    ingredientsMutation.mutate({
      input: ingredientsInput,
      onMessage: (chunk) => {
        setIngredients((prev) => prev + chunk.response);
      },
    });
  };

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
    <>
      <Box sx={{ display: "flex", width: "full" }}>
        <TextField
          label="Ingredients"
          variant="outlined"
          value={ingredientsInput}
          onChange={(e) => setIngredientsInput(e.target.value)}
          sx={{ m: 1, width: '80%' }}
          multiline
        />
        <Button onClick={handleIngredients} sx={{ m: 1 }} variant="contained">
          Process Ingredients
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "full",
          justifyContent: "center",
          m: 1,
          fontSize: "2rem",
        }}
      >
        <IndeterminateCheckBoxOutlined
          onClick={() =>
            setInstrunctionCount(Math.max(instructionCount - 1, 0))
          }
          sx={{ fontSize: "inherit" }}
        />
        <AddBoxOutlined
          onClick={() => setInstrunctionCount(instructionCount + 1)}
          sx={{ fontSize: "inherit" }}
        />
      </Box>
      {Array.from({ length: instructionCount }).map((_, index) => (
        <TextField
          key={index}
          label={`Instruction ${index + 1}`}
          value={instructions[index] || ""}
          onChange={(e) => {
            const newInstructions = [...instructions];
            newInstructions[index] = e.target.value;
            setInstrunctions(newInstructions);
          }}
          multiline
          sx={{ m: 1 }}
        />
      ))}

      {ingredientsMutation.isPending && <CircularProgress sx={{ m: 1 }} />}
      <TextField value={ingredients} multiline hidden={!ingredients} />

      <Button onClick={addNewRecipe} sx={{ m: 1 }} variant="contained">
        Add Recipe
      </Button>
    </>
  );
}
