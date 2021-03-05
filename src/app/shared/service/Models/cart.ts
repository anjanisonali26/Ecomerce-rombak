import { Product } from './product';

export interface Cart {
    product: Product;
    quantity : 1;
}
export interface ListCart {
    _id : string;
    user : string; 
    product : any;
    quantity : number;
    price : number;
}
export interface Checkout {
    user : string;
    _id : string;
    total : number;
}
export interface OrderHistory {
    history : string;
    _id : string;
    user : any;
    total: number;
}