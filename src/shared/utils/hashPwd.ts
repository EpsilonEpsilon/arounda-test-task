import * as crypto from "crypto";
const hashPwd = (salt:string, pwd:string):Promise<{key:string}>=>{
    return new Promise((res, rej)=>{
        crypto.pbkdf2(pwd, salt, 1000, 32, "sha512", (err, key)=>{
            if(err) throw err;
            res({key:key.toString("hex")});
        })
    })
}

export default hashPwd;
