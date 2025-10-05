import Link from "next/link";
import { DishType } from "@/models/Dish";

interface PropsInterface {
  dish: DishType;
}

const DishListItem = ({ dish }: PropsInterface) => {
  return (
    <>
      {dish && (
        <li className="bg-white rounded-md text-gray-800 cursor-pointer list-none m-2 p-2 transition duration-250 ease-in hover:bg-blue-500 hover:text-white will-change-auto">
          <Link href={`/dishes/${dish._id}`}>
            <h2>
              {dish.name}
              <small className="font-light pl-4">
                {dish.category} in {dish.prefecture}
              </small>
            </h2>
          </Link>
        </li>
      )}
    </>
  );
};

export default DishListItem;