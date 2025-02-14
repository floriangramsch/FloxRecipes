import { ChatResponseType } from "@/app/types";
import { useMutation } from "@tanstack/react-query";

export function useGetIngredientsMutation() {
  return useMutation({
    mutationKey: ["ingredients"],
    mutationFn: async ({
      input,
      onMessage,
    }: {
      input: string;
      onMessage: (msg: ChatResponseType) => void;
    }) => {
      const model = "phi4";

      const payload = {
        model: model,
        prompt: `Konvertiere mir folgende Rezeptliste in das passende output: ${input}`,
        stream: true,
        format: {
          type: "array",
          items: {
            type: "object",
            properties: {
              count: { type: "integer" },
              metric: { type: "string" },
              ingredient: { type: "string" },
            },
            required: ["count", "metric", "ingredient"],
          },
        },
      };

      const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.body) throw new Error("Keine Antwort vom Server");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const decoded = decoder.decode(value, { stream: true });
        const converted = JSON.parse(decoded);
        onMessage(converted);
      }
    },
  });
}
