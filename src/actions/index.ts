import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { auth } from "./auth";

export const server = {
  // comment action
  commentAction: defineAction({
    input: z.object({
      content: z.string().min(3, "Comment must be at least 3 characters"),
      articleId: z.string(),
      author: z.string(),
    }),
    handler: async (input) => {
      return input;
    },
  }),
  auth,
};
