import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, RecipeAPIResponseSchema, SearchRecipesSchema } from "../utils/recipes-schema";


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearFilter = z.infer<typeof SearchRecipesSchema>

export type Drinks = z.infer<typeof DrinksAPIResponse>

export type Drink = z.infer<typeof DrinkAPIResponse>

export type Recipe = z.infer<typeof RecipeAPIResponseSchema>