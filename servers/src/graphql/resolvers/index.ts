import userResolvers from './user'
import merge from 'lodash.merge'

const resolvers = merge({},userResolvers) //merged one is {} object

export default resolvers;