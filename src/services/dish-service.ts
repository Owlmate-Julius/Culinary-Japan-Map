/* eslint-disable @typescript-eslint/no-empty-object-type */
import Dish, { DishCategories, DishCategory, DishType } from "@/models/Dish";
import dbConnect from "@/lib/mongodb";
import { FilterDishType, FilterWishlistType } from "@/types/dish-types";

async function findDishes(filter: FilterDishType | FilterWishlistType | {}): Promise<DishType[] | []> {
    await dbConnect();
    try {
        const result: DishType[] = await Dish.find(filter);
        return result;
    } catch (err) {
        console.error("Error fetching dishes:", err);
    }
    return [];
}

export async function findAllDishes(): Promise<DishType[] | []> {
    const filter = {};
    return await findDishes(filter);
}

export async function findDishById(id: string): Promise<DishType | null> {
    await dbConnect();
    try {
        const result: DishType | null = await Dish.findById(id);
        return result;
    } catch (err) {
        console.error("Error fetching dish by ID:", err);
    }
    return null;
}

function isValidCategory(category: string): category is DishCategory {
  return DishCategories.includes(category as DishCategory);
}

export async function createDish(data: Partial<DishType>): Promise<DishType | null> {
  await dbConnect();
  try {
    if (!isValidCategory(data.category as string)) {
      throw new Error(`Invalid category: ${data.category}. Category must be one of: ${DishCategories}`);
    }

    const dish = new Dish(data);
    await dish.save();
    return dish;
  } catch (err) {
    console.error("Error creating dish:", err);
    throw err;
  }
}

export async function toggleWishlist(dishId: string, userId: string): Promise<DishType | null> {
    await dbConnect();
    const dish = await Dish.findById(dishId);
    if (!dish) {
        throw new Error("Dish not found");
    }
    const index = dish.on_wishlist.indexOf(userId);
    if (index === -1) {
        dish.on_wishlist.push(userId);
    } else {
        dish.on_wishlist.splice(index, 1);
    }
    await dish.save();
    return dish;
}