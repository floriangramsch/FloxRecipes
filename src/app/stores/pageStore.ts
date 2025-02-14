import { create } from "zustand";

type Page = "landing" | "newRecipe" | "recipe";

type PageStore = {
  currentPage: Page;
  setPage: (page: Page) => void;
};

export const usePageStore = create<PageStore>((set) => ({
  currentPage: "landing",
  setPage: (page) => set({ currentPage: page }),
}));
