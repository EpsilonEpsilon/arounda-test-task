import {User} from ".prisma/client";

export interface IUser extends Omit<User, "id" | "salt"> {
    id?:string,
    salt?:string
}
