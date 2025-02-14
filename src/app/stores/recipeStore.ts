import { create } from "zustand";
import { RecipeType } from "../types";

type RecipeStore = {
  recipes: RecipeType[];
  currentRecipe?: RecipeType;
  addRecipe: (recipe: RecipeType) => void;
  setRecipe: (recipe?: RecipeType) => void;
};

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [
    {
      title: "Cookie Dough",
      portionSize: 3,
      ingredients: [
        {
          count: 75,
          metric: "g",
          ingredient: "weiche Butter",
        },
        {
          count: 80,
          metric: "g",
          ingredient: "Zucker",
        },
        {
          count: 1,
          metric: "Pck.",
          ingredient: "Vanillezucker",
        },
        {
          count: 1,
          metric: "Prise",
          ingredient: "Salz",
        },
        {
          count: 150,
          metric: "g",
          ingredient: "Mehl",
        },
        {
          count: 4,
          metric: "EL",
          ingredient: "Milch",
        },
        {
          count: 100,
          metric: "g",
          ingredient: "Schokotropfen",
        },
      ],
      steps: [
        "Butter und Zucker kurz cremig rühren. Salz, Mehl und Milch hinzugeben und gut verrühren. Schokotröpfchen oder Schokostreusel unterheben. 30 Minuten im Kühlschrank kalt stellen, dann genießen.",
      ],
      url: "https://www.einfachbacken.de/rezepte/chocolate-chip-cookie-dough-ohne-ei?portions=3",
    },
    {
      title: "Test1",
      ingredients: [
        {
          count: 200,
          metric: "g",
          ingredient: "Zucker",
        },
        {
          count: 300,
          metric: "g",
          ingredient: "Mehl",
        },
        {
          count: 1,
          metric: "Stück",
          ingredient: "Penis",
        },
      ],
      steps: [
        "Dies ist Test 1",
        "Schritt 2",
        "Schritt 3 ist so schrecklich dass selbst Satan angst davor hat",
      ],
    },
    {
      title: "Test2",
      ingredients: [
        {
          count: 2,
          metric: "mal",
          ingredient: "Bebis",
        },
        {
          count: Infinity,
          metric: "tonnen",
          ingredient: "Liebe",
        },
        {
          count: 1,
          metric: "mal",
          ingredient: "Figgern",
        },
      ],
      steps: ["Dies ist Test 2"],
    },
  ],
  currentRecipe: undefined,
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  setRecipe: (recipe) => {
    if (recipe) {
      set({ currentRecipe: recipe });
    } else {
      set({ currentRecipe: undefined });
    }
  },
}));
