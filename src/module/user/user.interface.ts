export interface IUser {
    _id?: string;
    name: string;
    role: "Admin" | "User";
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}