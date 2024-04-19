import { useEffect, useState } from "react";
import type { Product } from "../types/component.type";
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "../icons/SocialMediaIcons";

const CardSocialMedia = ({ product, Svg }: { product: Product | null, Svg: any }) => {
    return (
        <a href="#">
            <div className="relative flex justify-center items-center overflow-hidden">
                <img src={product?.images[0]} className="transform duration-700 ease-in-out hover:scale-105" alt={product?.title} />
                <span className="absolute">
                    <Svg className="z-10" />
                </span>
            </div>
        </a>
    )
}

function SocialMedia() {
    const [product1, setProduct1] = useState<Product | null>(null);
    const [product2, setProduct2] = useState<Product | null>(null);
    const [product3, setProduct3] = useState<Product | null>(null);
    const [product4, setProduct4] = useState<Product | null>(null);

    useEffect(() => {
        const getApi = async () => {
            try {
                const api = "https://api.escuelajs.co/api/v1/products";
                const response = await fetch(api);
                const datas = await response.json();
                const item1 = datas.find((data: Product) => data.id === 23);
                const item2 = datas.find((data: Product) => data.id === 24);
                const item3 = datas.find((data: Product) => data.id === 25);
                const item4 = datas.find((data: Product) => data.id === 26);
                setProduct1(item1);
                setProduct2(item2);
                setProduct3(item3);
                setProduct4(item4);
            } catch (error) {
                console.log(error);
            }
        };

        getApi();
    }, []);

    return (
        <section className="grid grid-cols-2 gap-5 mx-4 overflow-hidden py-20">
            <CardSocialMedia product={product1} Svg={InstagramIcon}/>
            <CardSocialMedia product={product2} Svg={FacebookIcon}  />
            <CardSocialMedia product={product3} Svg={TwitterIcon}  />
            <CardSocialMedia product={product4} Svg={YoutubeIcon} />
        </section>
    )
}

export default SocialMedia