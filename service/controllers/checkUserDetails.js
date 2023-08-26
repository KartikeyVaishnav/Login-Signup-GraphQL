import { GraphQLError } from "graphql"


export const checkUserDetails= async(args)=>{
    let regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   if(args.email !== null && args.email!== undefined){
    if(regex.test(args.email)) true
    else{
          throw new GraphQLError("Please enter a valid email")
      }
   }
   
   regex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
   if(args.password !== null && args.password!== undefined){
    if(regex.test(args.password)) true
      else{
          throw new GraphQLError("Please enter a valid password")
      }
   }

   regex=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
   if(args.firstName !== null && args.firstName!== undefined){
    if(regex.test(args.firstName)) true
      else{
          throw new GraphQLError("Please enter a valid First Name")
      }
   }
   regex=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
   if(args.lastName !== null && args.lastName!== undefined){
    if(regex.test(args.lastName)) true
      else{
          throw new GraphQLError("Please enter a valid Last Name")
      }
   }
}