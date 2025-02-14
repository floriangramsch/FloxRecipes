"use client";

import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function Home() {
  // const [recipes, setRecipes] = useState<RecipeType[]>([
  //   {
  //     title: "Cookie Dough",
  //     portionSize: 3,
  //     ingredients: [
  //       {
  //         count: 75,
  //         metric: "g",
  //         ingredient: "weiche Butter",
  //       },
  //       {
  //         count: 80,
  //         metric: "g",
  //         ingredient: "Zucker",
  //       },
  //       {
  //         count: 1,
  //         metric: "Pck.",
  //         ingredient: "Vanillezucker",
  //       },
  //       {
  //         count: 1,
  //         metric: "Prise",
  //         ingredient: "Salz",
  //       },
  //       {
  //         count: 150,
  //         metric: "g",
  //         ingredient: "Mehl",
  //       },
  //       {
  //         count: 4,
  //         metric: "EL",
  //         ingredient: "Milch",
  //       },
  //       {
  //         count: 100,
  //         metric: "g",
  //         ingredient: "Schokotropfen",
  //       },
  //     ],
  //     steps: [
  //       "Butter und Zucker kurz cremig rühren. Salz, Mehl und Milch hinzugeben und gut verrühren. Schokotröpfchen oder Schokostreusel unterheben. 30 Minuten im Kühlschrank kalt stellen, dann genießen.",
  //     ],
  //     url: "https://www.einfachbacken.de/rezepte/chocolate-chip-cookie-dough-ohne-ei?portions=3",
  //   },
  //   {
  //     title: "Test1",
  //     ingredients: [
  //       {
  //         count: 200,
  //         metric: "g",
  //         ingredient: "Zucker",
  //       },
  //       {
  //         count: 300,
  //         metric: "g",
  //         ingredient: "Mehl",
  //       },
  //       {
  //         count: 1,
  //         metric: "Stück",
  //         ingredient: "Penis",
  //       },
  //     ],
  //     steps: [
  //       "Dies ist Test 1",
  //       "Schritt 2",
  //       "Schritt 3 ist so schrecklich dass selbst Satan angst davor hat",
  //     ],
  //   },
  //   {
  //     title: "Test2",
  //     ingredients: [
  //       {
  //         count: 2,
  //         metric: "mal",
  //         ingredient: "Bebis",
  //       },
  //       {
  //         count: Infinity,
  //         metric: "tonnen",
  //         ingredient: "Liebe",
  //       },
  //       {
  //         count: 1,
  //         metric: "mal",
  //         ingredient: "Figgern",
  //       },
  //     ],
  //     steps: ["Dies ist Test 2"],
  //   },
  // ]);

  // const [content, setContent] = useState<RecipeType | undefined>(undefined);

  return (
    <Box sx={{ display: "flex", height: "100dvh" }}>
      <Sidebar />
      <Content />
    </Box>
  );
}
