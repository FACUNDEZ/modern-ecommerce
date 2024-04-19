import { useEffect, useState, useRef } from "react";
import type { Product } from "../types/component.type";

function News() {
    const [product1, setProduct1] = useState<Product | null>(null);
    const [product2, setProduct2] = useState<Product | null>(null);

    useEffect(() => {
        const getApi = async () => {
            try {
                const api = "https://api.escuelajs.co/api/v1/products";
                const response = await fetch(api);
                const datas = await response.json();
                const item1 = datas.find((data: Product) => data.id === 40);
                const item2 = datas.find((data: Product) => data.id === 48);
                setProduct1(item1);
                setProduct2(item2);
            } catch (error) {
                console.log(error);
            }
        };

        getApi();
    }, []);

    return (
        <section className="flex flex-col gap-5 pt-7 pb-16">
            <a href="">
                <div className="h-4/5 w-full relative flex justify-center items-center overflow-hidden">
                    <img className="transform duration-700 ease-in-out hover:scale-105" src={product1?.images[0]} alt={product1?.title} />
                    <div className="absolute flex flex-col">
                        <p className="text-customGray text-center font-bold text-xl">NEW</p>
                        <button className="bg-black p-4 mt-3 text-customGray text-xs rounded-sm tracking-wider">BUY NOW</button>
                    </div>
                </div>
            </a>

            <a href="">
                <div className="h-4/5 w-full relative flex justify-center items-center overflow-hidden">
                    <img className="transform duration-700 ease-in-out hover:scale-105" src={product2?.images[0]} alt={product2?.title} />
                    <div className="absolute flex flex-col">
                        <p className="text-customGray text-center font-bold text-xl">SALE</p>
                        <button className="bg-black p-4 mt-3 text-customGray text-xs rounded-sm tracking-wider">BUY NOW</button>
                    </div>
                </div>
            </a>
        </section>
    )
}

export default News