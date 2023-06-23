// npm install @apollo/server express graphql cors body-parser
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {makeExecutableSchema} from "@graphql-tools/schema"
import express from 'express';
import http from 'http';
import cors from 'cors';
import { json } from 'body-parser';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import * as dotenv from "dotenv"
interface MyContext {
  token?: String;
}

async function main (){
    dotenv.config();
    const app = express();
    const httpServer = http.createServer(app);

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers
    })

    const corsOptions = {
        origin: process.env.CLIENT_ORIGIN,
        credentials: true,
    }
    console.log("client",process.env.CLIENT_ORIGIN)
    const server = new ApolloServer({
        schema,
        csrfPrevention: true,
        plugins: [
          // Proper shutdown for the HTTP server.
          ApolloServerPluginDrainHttpServer({ httpServer }),
        ],
      });
    await server.start();
    
    app.use(
    '/graphql',
    cors<cors.CorsRequest>(corsOptions),
    json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at `);
}
main().catch((err)=>console.log("GRAPHQL", err))