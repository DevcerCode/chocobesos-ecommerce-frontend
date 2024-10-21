interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    title: string;
    category: Category;
}

type Category = 'love' | 'friendship' | 'anniversary' | 'stuffed' | 'chocolates'

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            "description": "Un regalo perfecto para expresar tu amor eterno.",
            "images": ["ae-01.jpg", "ae-02.jpg", "ae-03.jpg"],
            "inStock": 20,
            "price": 49.99,
            "slug": "amor-eterno-1",
            "title": "Amor Eterno",
            "category": "love"
        },
        {
            "description": "Un símbolo de amor verdadero y duradero.",
            "images": ["amr-01.jpg", "amr-02.jpg"],
            "inStock": 15,
            "price": 39.99,
            "slug": "amor-verdadero-2",
            "title": "Amor Verdadero",
            "category": "love"
        },
        {
            "description": "Rosas rojas que demuestran pasión y cariño.",
            "images": ["az-01.jpg", "az-02.jpg", "az-03.jpg"],
            "inStock": 25,
            "price": 59.99,
            "slug": "rosas-de-pasion-3",
            "title": "Rosas de Pasión",
            "category": "love"
        },
        {
            "description": "El regalo ideal para una cita romántica.",
            "images": ["be-01.jpg", "be-02.jpg"],
            "inStock": 10,
            "price": 34.99,
            "slug": "cita-romantica-4",
            "title": "Cita Romántica",
            "category": "love"
        },
        {
            "description": "Un detalle tierno y lleno de sentimientos.",
            "images": ["erd-01.jpg", "erd-02.jpg", "erd-03.jpg"],
            "inStock": 8,
            "price": 29.99,
            "slug": "detalle-tierno-5",
            "title": "Detalle Tierno",
            "category": "love"
        },
        {
            "description": "Flores frescas que expresan el amor más puro.",
            "images": ["ra-01.jpg", "ra-02.jpg", "ra-03.jpg", "ra-04.jpg", "ra-05.jpg"],
            "inStock": 12,
            "price": 49.99,
            "slug": "amor-puro-6",
            "title": "Amor Puro",
            "category": "love"
        },
        {
            "description": "Un ramo de flores para sorprender a tu ser amado.",
            "images": ["ro-01.jpg", "ro-02.jpg"],
            "inStock": 18,
            "price": 44.99,
            "slug": "ramo-de-sorpresa-7",
            "title": "Ramo de Sorpresa",
            "category": "love"
        },
        {
            "description": "Detalles que enamoran a primera vista.",
            "images": ["ros-01.jpg", "ros-02.jpg"],
            "inStock": 22,
            "price": 54.99,
            "slug": "detalles-enamoran-8",
            "title": "Detalles que Enamoran",
            "category": "love"
        },
        {
            "description": "Una caja de chocolates finos para una ocasión especial.",
            "images": ["tr-01.jpg", "tr-02.jpg", "tr-03.jpg"],
            "inStock": 30,
            "price": 24.99,
            "slug": "chocolates-finos-9",
            "title": "Chocolates Finos",
            "category": "love"
        },
        {
            "description": "Un oso de peluche gigante para abrazar por siempre.",
            "images": ["xd-01.jpg", "xd-02.jpg"],
            "inStock": 5,
            "price": 89.99,
            "slug": "oso-gigante-10",
            "title": "Oso Gigante",
            "category": "love"
        }
    ]
}
