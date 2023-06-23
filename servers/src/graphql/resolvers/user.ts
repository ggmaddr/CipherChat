const resolvers = {
    Query:{
        searchUsers: () => {

        }
    },
    Mutation: {
        createUsername:()=>{
            console.log("I'M THE USER MUTATION RESOLVERS  ")
        }

    }

}
export default resolvers