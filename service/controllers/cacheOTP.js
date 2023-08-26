import NodeCache from "node-cache" ;
const myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 });


export const cacheOTP=(key,otp)=>{
    console.log("===>",otp)
    console.log("===>",key)
  const value=  myCache.set( key, otp, 90 )
  return value
}

export const checkOTP=(key,otp)=>{
    const value = myCache.get( key )
    if(otp===value){
        return true
    }else{
        return false
    }
        
}

