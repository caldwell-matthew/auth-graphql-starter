const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./types/root_query_type');
const mutation = require('./mutatons');

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
});
