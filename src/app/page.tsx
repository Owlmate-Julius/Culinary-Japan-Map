import { findAllDishes } from "@/services/dish-service";
import DishListItem from "./components/DishListItem";

export default async function Home() {
  try {
    const dishes = await findAllDishes();

    return (
      <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <DishListItem key={dish._id} dish={dish} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Database error while loading dishes:", error);
    return <div>Error loading dishes. Please try again later.</div>;
  }
}
