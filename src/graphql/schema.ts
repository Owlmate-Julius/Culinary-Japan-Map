import { makeExecutableSchema } from "@graphql-tools/schema";
import dish from "./dish";

export const schema = makeExecutableSchema({
  typeDefs: [dish.typeDefs],
  resolvers: [dish.resolvers],
});
