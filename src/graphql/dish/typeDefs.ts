export const dishTypeDefs = `
  type Dish {
    id: ID!
    name: String!
    description: String!
    prefecture: String!
    imageUrl: String!
    category: String!
    on_wishlist: [String!]!
    createdAt: String
    updatedAt: String
  }

  type Query {
    dishes: [Dish!]!
    dish(id: ID!): Dish
  }

  type Mutation {
    addDish(
      name: String!
      description: String!
      prefecture: String!
      imageUrl: String!
      category: String!
    ): Dish!

    toggleWishlist(dishId: ID!, userId: String!): Dish!
  }
`;
