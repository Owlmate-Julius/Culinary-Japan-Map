/* eslint-disable @typescript-eslint/no-explicit-any */
import { DishCategory } from "@/models/Dish";
import {
  findAllDishes,
  findDishById,
  createDish,
  toggleWishlist,
} from "@/services/dish-service";

export const dishResolvers = {
  Query: {
    dishes: async () => {
      return await findAllDishes();
    },
    dish: async (_: any, { id }: { id: string }) => {
      return await findDishById(id);
    },
  },
  Mutation: {
    addDish: async (
      _: any,
      {
        name,
        description,
        prefecture,
        imageUrl,
        category,
      }: {
        name: string;
        description: string;
        prefecture: string;
        imageUrl: string;
        category: DishCategory;
      }
    ) => {
      return await createDish({ name, description, prefecture, imageUrl, category });
    },
    toggleWishlist: async (
      _: any,
      { dishId, userId }: { dishId: string; userId: string }
    ) => {
      return await toggleWishlist(dishId, userId);
    },
  },
};