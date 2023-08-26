import { createUser, getAllUser, getSingleUser, loginOTP, loginOTPVerify, userCreationOTP } from "../user.js"

export const resolvers={
   Query:{
      getAllUser:async(parent,args)=>{
         return getAllUser(args)
      },
      getSingleUser:async(parent,args)=>{
         return getSingleUser(args)
      }
   },
   Mutation:{
      userCreationOTP:async(parent,args,context)=>{
       return userCreationOTP(args,context)
    },
    createUser:async(parent,args,context)=>{
       return createUser(args,context)
    },

    loginOTP:async(parent,args,context)=>{
       return loginOTP(args,context)
    },

    loginOTPVerify:async(parent,args,context)=>{
       return loginOTPVerify(args,context)
    }
   }
}



