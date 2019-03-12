
export interface User {
    readonly id: string;
    readonly name: string;
    readonly dateOfBirth: Date;
    readonly email: string;
    readonly password: string;
}

export const defaultUser: User = {
   id: null,
   name: '',
   password: '',
   dateOfBirth: null,
   email: ''
};
