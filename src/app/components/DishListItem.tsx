import Link from "next/link";
import { DishType } from "@/models/Dish";

interface PropsInterface {
  dish: DishType;
}

const DishListItem = ({ dish }: PropsInterface) => {
  return (
    <>
      {dish && (
        <div className="bg-zinc-50 rounded-lg p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-50">
          <Link href={`/dish/${dish._id}`}>
            <div className="text-center flex flex-col items-center space-y-2">
              <h1 className="text-3xl">{dish.name}</h1>
              <div className="text-purple-500">{dish.prefecture}</div>
              <div className="text-gray-600">{dish.description}</div>
              <span className="w-80 h-px bg-gray-300"></span>
              <div className="text-blue-500 font-mono text-xs">{dish.category}</div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default DishListItem;