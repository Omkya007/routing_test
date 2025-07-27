

export interface Iuser{
    username: string;
    userid: string;
    userrole: 'candidate'|'admin'|'super_admin';
    userImageUrl: string;
}