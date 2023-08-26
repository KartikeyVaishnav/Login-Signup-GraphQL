import bcrypt from 'bcrypt';
const saltRounds = 10;

export const encrypt = async(password)=>{
    const hash= bcrypt.hash(password,saltRounds)
    return hash
}

export const bcryption = async(password,hash)=>{
  const compare = bcrypt.compare(password, hash);
  return compare
}