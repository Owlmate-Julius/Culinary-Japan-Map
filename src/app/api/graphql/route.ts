import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "@/graphql";

const server = new ApolloServer({
  schema,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
