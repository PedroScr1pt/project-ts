export interface User{
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    user_rol?:string;
    created_at?: Date;
    updated_at?: Date;
}