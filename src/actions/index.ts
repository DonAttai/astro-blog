import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { supabase } from "../lib/supabase";

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
  // sign up action
  signUpAction: defineAction({
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8, "Password must be at least 6 characters"),
    }),
    handler: async (input) => {
      const { error } = await supabase.auth.signUp(input);
      return input;
    },
  }),
  // login action
  loginAction: defineAction({
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8, "Password must be at least 6 characters"),
    }),
    handler: async (input) => {
      return input;
    },
  }),
};
