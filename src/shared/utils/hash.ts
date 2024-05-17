import * as crypto from "crypto";

const hash = async (value:string | Buffer):Promise<{salt:string, key:string}>=>{
    return new Promise((res, rej)=>{
        const salt = crypto.randomBytes(value.length).toString('hex');
        crypto.pbkdf2(value, salt, 1000, 32, "sha512", (err, key)=>{
            if(err) throw err;
            res({salt, key:key.toString("hex")});
        })
    })
}


export default hash;
