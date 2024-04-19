import { useEffect, useState, useRef } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import type { Product } from "../types/component.type";
import { VisionIcon } from "../icons/VisionIcon";

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
            <h1 className="text-2xl md:text-4xl lg:text-5xl text-customGray font-bold text-center mb-8">Featured</h1>
            <div
                className="flex flex-row justify-between items-center gap-x-7 overflow-hidden ml-3"
                ref={contenedorRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {
                    products.map((product, index) => (
                        <div key={index} className="p-4 w-[180px] h-full last:mr-11">
                            <div className="flex flex-col h-full w-full pb-8">
                                <picture className="w-[185px] h-[240px] object-cover">
                                        <img src={product.images[1]} alt={product.title} className="w-[185px] h-[240px] object-cover" />
                                </picture>
                                <span className="h-[40px] w-[180px] px-2 pb-2">
                                    <p className="text-sm mt-4 text-left">
                                        {product.title}
                                    </p>
                                </span>
                                <span className="h-1 mt-10 px-2">
                                    <p className="text-lg font-bold text-left tracking-wide">${product.price}</p>
                                </span>
                            </div>

                            <div className="w-[180px] flex flex-row items-center justify-between  gap-x-1 overflow-hidden">
                                <button className="h-10 w-[75%] bg-customGray text-xs tracking-wider font-medium text-black rounded-[1px] hover:bg-gray-200 duration-200">
                                    BUY
                                </button>
                                <button className="h-10 w-[25%] pl-[12px] text-customGray border border-customGray rounded-[1px] hover:bg-gray-200 hover:text-black duration-200 hover:border-gray-200"><VisionIcon /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
