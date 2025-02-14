import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { usePageStore } from "../stores/pageStore";

export default function NewItem() {
  const { setPage } = usePageStore();

  return (
    <Box
      onClick={() => setPage("newRecipe")}
      sx={{
        bgcolor: "blueviolet",
        p: 1,
        m: 1,
        borderRadius: "4px",
        boxShadow: "initial",
        "&:hover": { bgcolor: "red" },
      }}
      className={"flex justify-center cursor-pointer"}
    >
      <AddIcon />
    </Box>
  );
}
