import { CloseButton } from "../icons/CloseBtn"

export const NavBar = ({ state, setStateFunction }: { state: boolean, setStateFunction: (value: boolean) => void }) => {
    return (
        <div className={`w-[370px] bg-black fixed top-0 left-0 z-40 h-screen transform transition-transform duration-500 ${state === false ? 'animate-translateX0' : 'animate-translateX'}`}>
            <button className="absolute top-5 right-5 font-bold text-2xl" onClick={() => {setStateFunction(false)}}><CloseButton /></button>
            <div className="ml-6 mt-20">
                <nav className="">
                    <ul className="">
                        <li className="mb-5 tracking-wider"><a className="hover:text-gray-200" href="">HOME</a></li>
                        <li className="mb-5 tracking-wider"><a className="hover:text-gray-200" href="">CLOTHES</a></li>
                        <li className="mb-5 tracking-wider"><a className="hover:text-gray-200" href="">ELECTRONICS</a></li>
                        <li className="mb-5 tracking-wider"><a className="hover:text-gray-200" href="">FURNITURE</a></li>
                        <li className="mb-5 tracking-wider"><a className="hover:text-gray-200" href="">SHOES</a></li>
                        <li className="mb-5 tracking-wider"><a className="hover:text-gray-200" href="">MISCELLANEOUS</a></li>
                        <li className="mb-5 tracking-wider"><a className="hover:text-gray-200" href="">OFFERS</a></li>
                        <li className="tracking-wider"><a className="hover:text-gray-200" href="">SALE</a></li>
                    </ul>
                </nav>
            </div>
            <span className="ms-madi-regular tracking-wider text-2xl -rotate-12 absolute bottom-24 left-32">WebWish</span>
        </div>
    )
}