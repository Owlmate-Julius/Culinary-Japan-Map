/**
 * Custom types for dish-related Mongoose queries.
 */

export declare type FilterDishType = {
  dish_id: string | string[];
};

export declare type FilterWishlistType = {
  on_wishlist: {
    $in: string[];
  };
};