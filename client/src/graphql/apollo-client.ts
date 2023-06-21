import {ApolloClient, ApolloClientOptions, HttpLink, InMemoryCache} from "@apollo/client"
// graphql endpoint that allows us to send http requests to our server
//create websocket link for real time data
const httpLink = new HttpLink({
    //uri of graphql server so graphql client knows where to send requests to
    //in REST API, there are multiple endpoints (URI) for different request, but in GQL, only this endpoint
    uri: 'http://localhost:4000/graphql',
    credentials: "include",
}) 
export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})