import { useGetIngredientsMutation } from "@/app/composables/ollama/useIngredients";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import IngredientsTable from "../Table/IngredientsTable";
import { IngredientType } from "@/app/types";
import {
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";

type NewIngredientsInterface = {
  ingredients: string;
  setIngredients: Dispatch<SetStateAction<string>>;
};

export default function NewIngredients(props: NewIngredientsInterface) {
  const [ingredientsInput, setIngredientsInput] = useState<string>("");
  const [userIngredients, setUserIngredients] = useState<IngredientType[]>([
    { count: 1, metric: "wow", ingredient: "test" },
  ]);

  const ingredientsMutation = useGetIngredientsMutation();

  const handleIngredients = () => {
    props.setIngredients("");

    ingredientsMutation.mutate({
      input: ingredientsInput,
      onMessage: (chunk) => {
        props.setIngredients((prev) => prev + chunk.response);
      },
    });
  };

  useEffect(() => {
    console.log(props.ingredients);
  }, [props.ingredients]);

  return (
    <Box>
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
            setUserIngredients((prev) => prev.slice(0, prev.length - 1))
          }
          sx={{ fontSize: "inherit" }}
        />
        <AddBoxOutlined
          onClick={() =>
            setUserIngredients((prev) => [
              ...prev,
              { count: 1, metric: "test", ingredient: "asd" },
            ])
          }
          sx={{ fontSize: "inherit" }}
        />
      </Box>
      <IngredientsTable ingredients={userIngredients} />

      <Box sx={{ display: "flex", width: "full" }}>
        <TextField
          label="Ingredients"
          variant="outlined"
          value={ingredientsInput}
          onChange={(e) => setIngredientsInput(e.target.value)}
          sx={{ m: 1, width: "80%" }}
          multiline
        />
        <Button
          onClick={handleIngredients}
          sx={{ m: 1 }}
          variant="contained"
          disabled={ingredientsMutation.isPending}
        >
          {ingredientsMutation.isPending ? (
            <CircularProgress sx={{ m: 1 }} />
          ) : (
            "Process Ingredients"
          )}
        </Button>
      </Box>
      <TextField
        value={props.ingredients}
        multiline
        hidden={!props.ingredients}
      />
    </Box>
  );
}
