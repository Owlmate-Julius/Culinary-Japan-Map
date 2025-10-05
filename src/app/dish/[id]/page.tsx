import { notFound } from "next/navigation";
import { findDishById } from "@/services/dish-service";
import DishDetails from "@/app/components/DishDetails";
import { use } from 'react';

interface DishPageProps {
  params: {
    id: string;
  };
}

const DishPage = async ({ params }: DishPageProps) => {
  const resolvedParams = await params;
  const dish = await findDishById(resolvedParams.id);
  if (!dish) {
    notFound();
  }
  return (
    <div className="container mx-auto max-w-7xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DishDetails dish={dish} />
    </div>
  );
};

export default DishPage;