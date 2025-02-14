export type IngredientType = {
  count: number;
  metric: string;
  ingredient: string;
};

export type StepType = string;

export type RecipeType = {
  title: string;
  portionSize?: number;
  ingredients: IngredientType[];
  steps: StepType[];
  url?: string;
};

export type ChatResponseType = {
  created_at: string;
  model: string;
  response: string;
  done: boolean;
  done_reason?: string;
  eval_count?: number;
  eval_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  total_duration?: number;
};
