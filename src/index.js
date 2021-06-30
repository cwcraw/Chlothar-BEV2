const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers,  playground: true});
const port = process.env.DB_PORT || 4000
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url} from ${new Date}`);
});