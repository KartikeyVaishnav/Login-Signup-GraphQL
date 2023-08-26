import User from "../Models/UserModel.js";
import { GraphQLError } from "graphql";
import { v4 as uuidv4 } from "uuid";
import { bcryption, encrypt } from "./controllers/passwordHashing.js";
import { generateOTP } from "./controllers/OTP.js";
import { login, userCreation } from "./controllers/sendMail.js";
import { checkOTP } from "./controllers/cacheOTP.js";
import { checkUserDetails } from "./controllers/checkUserDetails.js";

export const userCreationOTP = async (args, context) => {
  const find = await User.findOne({ email: args.email });
  if (!find) {
    await checkUserDetails(args)
    await userCreation(args)
    return { status: true, message: "OTP Sent" };
  } else {
    throw new GraphQLError("User with this email already exists")
  }
};

export const createUser = async (args, context) => {
    const verify = await checkOTP(args.email, args.otp);
    console.log(verify);

    if (verify) {
        const find = await User.findOne({ email: args.email });

  if (!find) {
    try {
      const otp = await generateOTP();
      console.log(otp);
      const hash = await encrypt(args.password);
      const user = new User({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: hash,
      });
      // context.session.email = args.email;
      // context.session.sessionID = uuidv4();
      user.save();
      return user;
    } catch (error) {
      console.log(error);
    }
  } else {
    throw new GraphQLError("User with this email already exists");
  }
    } else {
        throw new GraphQLError("Invalid OTP");
    }


  
};

export const loginOTP = async (args, context) => {
  const find = await User.findOne({ email: args.email });
  if (!find) {
    throw new GraphQLError(
      "User not found, Try sign up or enter a valid email ID"
    );
  } else {
    await checkUserDetails(args)
    await login(args);
    return { status: true, message: "OTP Sent" };
  }
};

export const loginOTPVerify = async (args, context) => {
  const verify = checkOTP(args.email, args.otp);
  console.log(verify);
  if (verify) {
    const find = await User.findOne({ email: args.email });

    if (!find) {
      throw new GraphQLError(
        "User not found, Try sign up or enter a valid email ID"
      );
    } else {
      const passwordCheck = await bcryption(args.password,find.password)
      console.log(passwordCheck)
      if (!passwordCheck) {
        throw new GraphQLError("Incorrect Password");
      } else {
        console.log(context.session);
        context.session.email = args.email;
        context.session.sessionID = uuidv4();
        console.log(context.session);
        return find;
      }
    }
  } else {
    throw new GraphQLError("Invalid OTP");
  }
};

export const getAllUser=async (args, context) => {
  const users = await User.find()
  return users
};

export const getSingleUser=async (args, context) => {
  const user = await User.findOne({email:args.email})
  return user
};