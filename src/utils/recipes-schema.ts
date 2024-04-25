import { z } from "zod";

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchRecipesSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})