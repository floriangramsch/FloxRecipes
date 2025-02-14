import { Box } from "@mui/material";
import SidebarItem from "./components/SidebarItem";
import NewItem from "./components/NewItem";
import { useRecipeStore } from "./stores/recipeStore";
import { CalendarMonth, FoodBankRounded } from "@mui/icons-material";
import { usePageStore } from "./stores/pageStore";
import { useState } from "react";

export default function Sidebar() {
  const [hidden, setHidden] = useState(true);

  const { recipes } = useRecipeStore();
  const { setPage } = usePageStore();

  return (
    <Box
      sx={{
        width: "20%",
        borderRight: "1px solid white",
        p: 1,
        display: hidden ? "hidden" : "",
      }}
      className={"flex flex-col justify-between"}
    >
      <div>
        <Box
          onClick={() => setPage("landing")}
          sx={{
            width: "full",
            display: "flex",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <FoodBankRounded sx={{ fontSize: "3rem", color: "orange" }} />
          <CalendarMonth
            onClick={() => setHidden(!hidden)}
            sx={{ position: "absolute", right: 0, fontSize: "2rem" }}
          />
        </Box>
        {recipes.map((recipe) => (
          <SidebarItem key={recipe.title} recipe={recipe} />
        ))}
      </div>
      <div>
        <NewItem />
      </div>
    </Box>
  );
}
