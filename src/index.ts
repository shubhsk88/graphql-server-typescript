import {ApolloServer} from 'apollo-server-express'
import express from 'express';
import typeDefs from './schema';

const server=new ApolloServer({typeDefs});
const app=express();

server.applyMiddleware({
    cors:true,
    app

})
const PORT=4000;

app.listen(PORT,()=>console.log(`server is listening to ${PORT}/${server.graphqlPath}`))