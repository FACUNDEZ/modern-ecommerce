import { useEffect, useState, useRef } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import type { Product } from "../types/component.type";

export function Featured() {
    const [products, setProducts] = useState<Product[]>([]);
    const contenedorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getApi = async () => {
            try {
                const api = "https://api.escuelajs.co/api/v1/products";
                const response = await fetch(api);
                const datas = await response.json();
                const dataFiltered = datas.filter((data: Product) => data.id < 23);
                setProducts(dataFiltered);
            } catch (error) {
                console.log(error);
            }
        };

        getApi();
    }, []);

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        isDown = true;
        startX = e.pageX - (contenedorRef.current?.offsetLeft || 0);
        scrollLeft = contenedorRef.current?.scrollLeft || 0;
    };

    const handleMouseLeave = () => {
        isDown = false;
    };

    const handleMouseUp = () => {
        isDown = false;
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDown || !contenedorRef.current) return;
        e.preventDefault();
        const x = e.pageX - (contenedorRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 1;
        contenedorRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="mt-32 pb-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-customGray font-bold text-center mb-10">Featured</h1>
            <div
                className="flex flex-row justify-between items-center gap-x-7 overflow-x-hidden mx-7"
                ref={contenedorRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {
                    products.map((product, index) => (
                        <div key={index}>
                            <BackgroundGradient className="p-4 sm:p-10 bg-white dark:bg-zinc-900 w-[170px] ">
                                <div className="flex flex-col w-full pb-12">
                                    <picture className="-m-4 md:-m-10">
                                        <img src={product.images[1]} alt={product.title} className="w-full" />
                                    </picture>
                                    <span className="h-16 mt-3 mb-5">
                                        <p className="text-base sm:text-xl text-black mt-6 mb-2 dark:text-neutral-200">
                                            {product.title}
                                        </p>
                                    </span>
                                </div>

                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                    <span>Buy now </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        ${product.price}
                                    </span>
                                </button>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
