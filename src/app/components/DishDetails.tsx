import { DishType } from "@/models/Dish";

interface PropsInterface {
  dish: DishType;
}

const DishDetails = ({ dish }: PropsInterface) => {
  return (
    <div>
      {dish && (
        <ul className="m-0 p-0">
          <li>
            <b>Name:</b> {dish.name}
          </li>
          <li>
            <b>Description:</b> {dish.description}
          </li>
          <li>
            <b>Prefecture:</b> {dish.prefecture}
          </li>
          <li>
            <b>Category:</b> {dish.category}
          </li>
          <li>
            <b>Created At:</b> {new Date(dish.createdAt).toLocaleDateString()}
          </li>
        </ul>
      )}
    </div>
  );
};

export default DishDetails;