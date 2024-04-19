import { useState } from "react";
import { MenuIcon } from "../icons/MenuIcon";
import { LoginIcon } from "../icons/LoginIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { ShopIcon } from "../icons/ShopIcon";
import { NavBar } from "./NavBar";
import { ShopBar } from "./ShopBar";

export function Header() {
    const [asideBar, setAsideBar] = useState(false)
    const [shopBar, setShopBar] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 w-screen h-20 p-7 z-20 bg-black overflow-hidden">
            <nav className="flex flex-row justify-between items-center text-customGray pr-4">
                <div>
                    <button onClick={() => setAsideBar(true)} className="mr-4">
                        <MenuIcon />
                    </button>
                    {asideBar === true && <NavBar state={asideBar} setStateFunction={setAsideBar} />}
                    <button> <SearchIcon /> </button>
                </div>
                <span className="ms-madi-regular tracking-wider text-2xl -rotate-12">WebWish</span>
                <div>
                    <button className="mr-2">
                        <a href="/auth/login"> <LoginIcon /> </a>
                    </button>
                    <button onClick={() => setShopBar(true)}> <ShopIcon /> </button>
                    {shopBar === true && <ShopBar state={shopBar} setState={setShopBar} />}
                </div>
            </nav>
        </header>
    )
}
