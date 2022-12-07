export interface Product {
    _id?: string;
    model: string ;
    name: string ; 
    price: number ;
    imagePath?: string;
    imageUrl?: string;
    rating?: number;
    productAttributes?: {
        _id?: string;
        size?: string;
        brand?: string;
        color?: string;
    }[];
    category?: {
        name: string;
    } | undefined;
}