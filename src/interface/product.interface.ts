export interface Product {
    // id: string //TODO
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    title: string;
    category: Category;
}

export type Category = 'love' | 'friendship' | 'anniversary' | 'stuffed' | 'chocolates'
