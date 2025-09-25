import Dish, { DishType } from "@/models/Dish";
import dbConnect from "@/lib/mongodb";
import { FilterDishType, FilterWishlistType } from "@/types/dish-types";
import { QueryOptions } from "mongoose";

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

export async function findDishesById(
    dish_ids: string[]
): Promise<DishType[] | []> {
    const filter = { _id: { $in: dish_ids } };
    return await findDishes(filter);
}

export async function findDishesOnWishlist(
    user_id: string
): Promise<DishType[] | []> {
    const filter: FilterWishlistType = {
        on_wishlist: {
            $in: [user_id],
        },
    };
    return await findDishes(filter);
}

export async function updateWishlist(
    dish_id: string,
    user_id: string,
    action: "add" | "remove"
): Promise<DishType | null> {
    await dbConnect();
    const filter = { _id: dish_id };
    const options: QueryOptions = { new: true };
    let update = {};
    switch (action) {
        case "add":
            update = { $push: { on_wishlist: user_id } };
            break;
        case "remove":
            update = { $pull: { on_wishlist: user_id } };
            break;
    }
    try {
        const result: DishType | null = await Dish.findOneAndUpdate(
            filter,
            update,
            options
        );
        return result;
    } catch (err) {
        console.error("Error updating wishlist:", err);
    }
    return null;
}