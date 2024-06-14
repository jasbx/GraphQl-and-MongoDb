const  {ApolloServer} = require ("@apollo/server");
const  {startStandaloneServer} = require ("@apollo/server/standalone");
//type
const typeDefs= require( './GraphQl/typeDefs');
const resolvers =require('./GraphQl/resolvers')
//make function resolvers



//connect with mongo db
const   mongoose =require ('mongoose');
mongoose.connect('mongodb+srv://gloop216:t6OwXxDJu1KR9YA3@cluster0.nryicsp.mongodb.net/GraphQl?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('connecting ok !'))
const server = new ApolloServer({
    typeDefs,
  resolvers,
});
const {url}= startStandaloneServer(server,{
   listen:{port:3000}
})

console.log(`Server ready at 4000`);

