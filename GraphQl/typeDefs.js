const {gql} = require('apollo-server');
// npm i apollo-server

module.exports= gql `#graphql
type Post{
    id:ID!,
    title:String!,
    body:String!,
    author:String!,
    
},

#add data from api
input AddPosts{
    title:String!,
    body:String!,
    author:String!,
},
#update
input EdaitPosts{
    title:String!,
    body:String!,
    author:String!,
},
type Query{
    posts:[Post]!,
    post(id:ID!):Post,
}

# create data

type Mutation{
    createPost(post:AddPosts!):Post,
    deletePost(id:ID!):Boolean,
    updatePost(id:ID!,post:EdaitPosts!):Boolean,
}




`
//the query not options must be there in types.
 //get by id we gave the post Id from client => game(id:ID!):Game AND ID must be requierd !