// import { ApolloServer } from "@apollo/server"
// import { startStandaloneServer } from '@apollo/server/standalone';
import express from "express";
import session from 'express-session';
import { ApolloServer, gql } from "apollo-server-express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDatabase } from "./controllers/db.js";
import { typeDefs } from "./service/graphql/typedefs.js";
import { resolvers } from "./service/graphql/resolvers.js";
dotenv.config();

const app = express();
app.use(cors())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    session:req.session
    return { req, res,session };
  },
});

await server.start()
server.applyMiddleware({ app });
connectDatabase();

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
);
// const { url } = await startStandaloneServer(server);
// console.log(`🚀 Server ready at ${url}`);
