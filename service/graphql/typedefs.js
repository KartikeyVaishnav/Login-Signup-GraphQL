export const typeDefs=`

type User{
    id:String
    firstName:String
    lastName:String
    email:String
    password:String
    mobile:String
}

type return{
    status:Boolean
    message:String
}

type Query{
    getAllUser:[User]

    getSingleUser(email:String!):User
}

type Mutation{
    userCreationOTP(
        firstName:String!
        lastName:String!
        email:String!
        password:String! 
        ):return

    createUser(
        firstName:String!
        lastName:String!
        email:String!
        password:String!
        otp:String!
        ):User

        loginOTP(email:String! password:String!):return

        loginOTPVerify(email:String! password:String! otp:String!):User
}

`