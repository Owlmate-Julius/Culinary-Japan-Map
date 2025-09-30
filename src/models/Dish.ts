import { Schema, InferSchemaType, model, models } from "mongoose";

export const DishCategories = ["Noodles", "Ramen", "Sushi", "Donburi", "Sweets", "Street Food", "Seafood", "Fried Food", "Other"] as const;

const DishSchema = new Schema({
    // name of the Japanese dish, e.g., "Hakodate Shio Ramen"
    name: {
        type: String,
        required: [true, "Dish name is required."],
        trim: true,
    },
    // brief description of the dish
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    // prefecture or region in Japan it's famous for. e.g., "Hokkaido"
    prefecture: {
        type: String,
        required: [true, "Prefecture is required."],
    },
    // url to an image of the dish
    imageUrl: {
        type: String,
        required: [true, "Image URL is required."],
    },
    // category of the dish, e.g., "Ramen", "Sushi", "Donburi", "Sweets"
    category: {
        type: String,
        required: [true, "Category is required."],
        enum: DishCategories, // 2. Verwende die Konstante hier
    },
    // array of user IDs who have this dish on their wishlist
    // => easily track who wants to try what
    on_wishlist: {
        type: [String], // Array of (user IDs)
        default: [],
    },
}, { timestamps: true });

export type DishType = InferSchemaType<typeof DishSchema>;
export type DishCategory = typeof DishCategories[number];

// to prevent recompiling the model on every hot-reload
const Dish = models.Dish || model("Dish", DishSchema);

export default Dish;
