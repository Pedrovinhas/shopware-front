export interface IUser {
    name: string;
    phone: string;
    email?: string;
    wishlist?: string[];
    cart?: string[]
    address?: [{city?: string, state?: string, pinCode?: string, street?: string }] | any;
}