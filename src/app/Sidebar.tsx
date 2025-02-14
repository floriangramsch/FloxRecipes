import { Box } from "@mui/material";
import SidebarItem from "./components/SidebarItem";
import NewItem from "./components/NewItem";
import { useRecipeStore } from "./stores/recipeStore";
import { FoodBankRounded } from "@mui/icons-material";
import { usePageStore } from "./stores/pageStore";

export default function Sidebar() {
  const { recipes } = useRecipeStore();
  const { setPage } = usePageStore();

  return (
    <Box
      sx={{ width: "20%", borderRight: "1px solid white", p: 1 }}
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
          }}
        >
          <FoodBankRounded sx={{ fontSize: "3rem" }} />
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
