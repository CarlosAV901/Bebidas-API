import { z } from "zod";
import { CategoriesAPIResponseSchema, SearchRecipesSchema } from "../utils/recipes-schema";


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearFilter = z.infer<typeof SearchRecipesSchema>