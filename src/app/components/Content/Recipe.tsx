import ContentTitle from "./ContentTitle";
import { Box, Divider, Paper, Typography } from "@mui/material";
import {
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useRecipeStore } from "@/app/stores/recipeStore";
import IngredientsTable from "../Table/IngredientsTable";

export default function Recipe() {
  const { currentRecipe } = useRecipeStore();

  const originalPortionSize = useRef(1);

  const [portionSize, setPortionSize] = useState(originalPortionSize.current);

  useEffect(() => {
    originalPortionSize.current = currentRecipe?.portionSize ?? 1;
    setPortionSize(currentRecipe?.portionSize ?? 1);
  }, [currentRecipe]);

  return (
    <>
      {currentRecipe && (
        <>
          <ContentTitle title={currentRecipe.title} url={currentRecipe.url} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={"gap-1"}
          >
            <IndeterminateCheckBoxOutlined
              onClick={() =>
                setPortionSize((oldVal) => Math.max(0, oldVal - 1))
              }
            />
            <Typography variant="h5">{portionSize}</Typography>
            <AddBoxOutlined
              onClick={() => setPortionSize((oldVal) => oldVal + 1)}
            />
          </Box>

          <IngredientsTable
            ingredients={currentRecipe.ingredients.map((ingredient) => ({
              count:
                ingredient.count * (portionSize / originalPortionSize.current),
              metric: ingredient.metric,
              ingredient: ingredient.ingredient,
            }))}
          />

          <Divider />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {currentRecipe.steps.map((step, index) => (
              <Paper
                key={index}
                sx={{
                  width: "75%",
                  p: 1,
                  m: 1,
                }}
                elevation={3}
              >
                {step}
              </Paper>
            ))}
          </Box>
        </>
      )}
    </>
  );
}
