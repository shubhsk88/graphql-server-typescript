import {gql} from 'apollo-server-express'

export default gql`
type User{
    id:ID!
    firstName:String!
    lastName:String!
    email:String
    age:Float


}
type Query{
    users:[User]
}


`