import { IngredientType } from "@/app/types";
import {
  Box,
  Checkbox,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

type TableInterface = {
  ingredients: IngredientType[];
};

export default function IngredientsTable(props: TableInterface) {
  return (
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
        {props.ingredients.map((ing, index) => (
          <ListItem disablePadding key={index}>
            <ListItemIcon sx={{ minWidth: 0, mr: "6px" }}>
              <Checkbox sx={{ p: 0 }} />
            </ListItemIcon>
            <ListItemText>
              <Grid2 container spacing={12}>
                <Grid2 size={6}>
                  {ing.count} {ing.metric}
                </Grid2>
                <Grid2 size={6}>{ing.ingredient}</Grid2>
              </Grid2>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
