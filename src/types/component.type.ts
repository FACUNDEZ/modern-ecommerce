export type Product = {
        id: number;
        title: string;
        price: number;
        images: string[];
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

