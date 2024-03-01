// Generated by https://quicktype.io

export interface User {
    jwt:  string;
    user: UserClass;
}

export interface UserClass {
    id:        number;
    username:  string;
    email:     string;
    provider:  string;
    confirmed: boolean;
    blocked:   boolean;
    firstname: string;
    lastname:  string;
    createdAt: string;
    updatedAt: string;
}

export interface Auth {
    identifier: string;
    password: string;
}