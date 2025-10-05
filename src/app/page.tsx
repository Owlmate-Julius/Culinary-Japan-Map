import { findAllDishes } from "@/services/dish-service";

export default async function Home() {
  try {
    const dishes = await findAllDishes();

    return (
      <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div key={index}>
            <div className="bg-zinc-50 rounded-lg p-6 shadow-lg">
              <div className="text-center flex flex-col items-center space-y-2">
                <h1 className="text-3xl">{dish.name}</h1>
                <div className="text-purple-500">{dish.prefecture}</div>
                <div className="text-gray-600">{dish.description}</div>
                <span className="w-80 h-px bg-gray-300"></span>
                <div className="text-blue-500 font-mono text-xs">{dish.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Database error while loading dishes:", error);
    return <div>Error loading dishes. Please try again later.</div>;
  }
}
