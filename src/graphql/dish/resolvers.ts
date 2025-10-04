import { DishCategory } from "@/models/Dish";
import {
  findAllDishes,
  findDishById,
  createDish,
  toggleWishlist,
} from "@/services/dish-service";

type AddDishInput = {
  name: string;
  description: string;
  prefecture: string;
  imageUrl: string;
  category: DishCategory;
}

export const dishResolvers = {
  Query: {
    dishes: async () => {
      return await findAllDishes();
    },
    dish: async (_: unknown, { id }: { id: string }) => {
      return await findDishById(id);
    },
  },
  Mutation: {
    addDish: async (_: unknown, { name, description, prefecture, imageUrl, category, }: AddDishInput) => {
      return await createDish({ name, description, prefecture, imageUrl, category });
    },
    toggleWishlist: async (_: unknown, { dishId, userId }: { dishId: string; userId: string }) => {
      return await toggleWishlist(dishId, userId);
    },
  },
};