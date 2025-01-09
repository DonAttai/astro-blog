import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { supabase } from "../lib/supabase";

export const auth = {
  register: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8, "Password must be at least 6 characters"),
    }),
    handler: async (input) => {
      //   const { error } = await supabase.auth.signUp(input);
      //   if (error) {
      //     throw new ActionError({
      //       code: "INTERNAL_SERVER_ERROR",
      //       message: error.message,
      //     });
      //   }
      return { success: true };
    },
  }),
  login: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      password: z.string().min(8, "Password must be at least 6 characters"),
    }),
    handler: async (input) => {
      return input;
    },
  }),
};
