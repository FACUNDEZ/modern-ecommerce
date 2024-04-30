export type Product = {
        id: number;
        title: string;
        price: number;
        images: string[];
        category: {
                id: number;
        }
}

export type RegisterRequest =
        | {
                firstName: string;
                lastName: string;
                email: string;
                password: string;
        }

export type LoginRequest =
        | {
                email: string;
                password: string;
        }

