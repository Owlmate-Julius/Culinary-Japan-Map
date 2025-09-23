import dbConnect from '@/lib/mongodb';
import Dish from '@/models/Dish';
import dishesData from './dishes.json';

async function seedDatabase() {
  try {
    console.log('Connecting to database...');
    await dbConnect();
    console.log('Database connected!');

    await Dish.deleteMany({});
    console.log('Existing dishes deleted.');

    await Dish.insertMany(dishesData);
    console.log('Database seeded with sample dishes.');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();