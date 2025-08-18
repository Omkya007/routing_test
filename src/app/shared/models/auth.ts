export interface IregisterUser{
    email:string,
    password:string,
    userRole:'admin'|'buyer'|'superAdmin'
}



export interface IloginUser{
       email:string,
    password:string
}