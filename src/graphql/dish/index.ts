import { dishTypeDefs } from "./typeDefs";
import { dishResolvers } from "./resolvers";

const exportedDishObject = {
    typeDefs: dishTypeDefs,
    resolvers: dishResolvers,
};
export default exportedDishObject;
