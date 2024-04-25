import { StateCreator } from "zustand"

type Category = {}

export type RecipeSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipeSliceType> = () => ({
    categories: [],
    fetchCategories: async () => {

    }
})