import ContentTitle from "./ContentTitle";
import {
  Box,
  Checkbox,
  Divider,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import {
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useRecipeStore } from "@/app/stores/recipeStore";

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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Grid2 container columnSpacing={2} rowSpacing={1} columns={2}>
              {content.ingredients.map((ing) => (
                <>
                  <Grid2 size={1} display='absolute' left={8}>
                    <Checkbox sx={{ p: 0 }} />
                    {ing.count} {ing.metric}
                  </Grid2>
                  <Grid2 size={1}>{ing.ingredient}</Grid2>
                </>
              ))}
            </Grid2> */}
            <List className="text-nowrap">
              {currentRecipe.ingredients.map((ing, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemIcon sx={{ minWidth: 0, mr: "6px" }}>
                    <Checkbox sx={{ p: 0 }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Grid2 container spacing={12}>
                      <Grid2 size={6}>
                        {parseFloat(
                          (
                            ing.count *
                            (portionSize / originalPortionSize.current)
                          ).toFixed(2)
                        )}{" "}
                        {ing.metric}
                      </Grid2>
                      <Grid2 size={6}>{ing.ingredient}</Grid2>
                    </Grid2>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider className="w-full" />
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
