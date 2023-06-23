const { gql } = require("apollo-server");
//return array of [User] by search username
//CreateUsernameResponse: return custom types
const typeDefs = gql`
    type User{
        id: String
        username: String
    }
    type Query{
        searchUsers(username: String): [User] 
    }
    type Mutation{
        createUsername(username: String): CreateUsernameResponse
    
    }
    type CreateUsernameResponse{
        success: Boolean
        error: String
    }
`

export default typeDefs