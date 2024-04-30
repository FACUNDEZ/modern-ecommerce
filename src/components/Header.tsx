import { useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { LoginIcon } from "../icons/LoginIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { ShopIcon } from "../icons/ShopIcon";
import { NavBar } from "./NavBar";
import { ShopBar } from "./ShopBar";

export function Header() {
    const [isOpenNavBar, setIsOpenNavBar] = useState(false)
    const [isOpenShopBar, setIsOpenShopBar] = useState(false)

    const toggleNavBar = () => {
        setIsOpenNavBar(!isOpenNavBar);
    };

    const toggleShopBar = () => {
        setIsOpenShopBar(!isOpenShopBar);
    };

    return (
        <header className="fixed top-0 left-0 right-0 w-screen h-20 p-7 z-20 bg-black border-b border-gray-600 ">
            <div className="flex flex-row justify-between items-center text-customGray pr-4">
                <div className="flex items-center">
                    <button onClick={toggleNavBar} className="mr-4">
                        <MenuIcon />
                    </button>
                    <NavBar isOpen={isOpenNavBar} onClose={toggleNavBar} />
                    <button> <SearchIcon /> </button>
                </div>
                <span className="ms-madi-regular tracking-wider text-2xl -rotate-12">WebWish</span>
                <div className="flex items-center">
                    <button className="mr-2">
                        <a href="/auth/login"> <LoginIcon /> </a>
                    </button>
                    <button onClick={toggleShopBar}> <ShopIcon /> </button>
                    <ShopBar isOpen={isOpenShopBar} onClose={toggleShopBar} />
                </div>
            </div>
        </header>
    )
}



