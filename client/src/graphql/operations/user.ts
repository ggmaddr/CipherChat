import {gql} from "@apollo/client"
//similar to backend resolvers
//use exact same name "createUsername" from backend inside CreateUsername mutation
//username: $username <= 1st usrname is in typedefs/user.ts, 2nd $username is in fronend mutation func CreateUsername($username: String!)
export default{
    Queries:{

    },

    Mutations: {
        createUsername: gql`
          mutation CreateUsername($username: String!) {
            createUsername(username: $username) {
              success
              error
            }
          }
        `,
      },
    Subscriptions:{},
}