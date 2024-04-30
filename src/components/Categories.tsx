import { useState, useEffect } from "react"

interface Product {
    id: number;
    name: string;
    image: string;
}

function Categories() {

    const [categories, setCategories] = useState<Product[]>([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const api = "https://api.escuelajs.co/api/v1/categories";
                const response = await fetch(api);
                const datas = await response.json();
                const dataFiltered = datas.filter((data: Product) => data.id < 6)
                setCategories(dataFiltered);
            } catch (error) {
                console.log(error);
            }
        };

        getApi();
    }, []);

    return (
        <section className="grid grid-cols-2 gap-5 overflow-hidden">
            {categories.map((product: Product, index: number) => (
                <a href={`/category/${product.id}`} key={index}>
                    <div className="relative flex justify-center items-center overflow-hidden">
                        <img src={product.image} className="transform duration-700 ease-in-out hover:scale-105" alt={product.name} />
                        <h1 className="absolute font-bold text-xl overflow-hidden">{product.name.toUpperCase()}</h1>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default Categories