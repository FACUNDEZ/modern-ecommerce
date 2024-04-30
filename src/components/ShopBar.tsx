import { useEffect } from "react";
import { CloseButton } from "../icons/CloseBtn"
import { InfoIcon } from "../icons/InfoIcon";

export const ShopBar = ({ isOpen, onClose }: { isOpen: boolean, onClose: (value: any) => void }) => {
    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }
        return () => {
            body.style.overflowY = 'auto';
        };
    }, [isOpen]);

    return (
        <div className={`w-screen bg-black fixed top-0 left-0 z-40 h-screen transform transition-transform duration-1000 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={onClose} className="absolute top-4 right-2 font-bold text-2xl"><CloseButton /></button>
            <hr className="relative mt-14 border border-gray-600" />
            <div className="flex flex-row items-center justify-center gap-x-1 border border-customGray py-2 mx-6 mt-4 rounded-[1px]">
                <span><InfoIcon /></span><p className="text-sm">Your cart is empty.</p>
            </div>
            <button className="block m-auto w-[452px] mt-10 py-2 bg-customGray tracking-wide text-sm font-medium text-black rounded-[1px] hover:bg-gray-200 duration-200">
                BUY NOW
            </button>
        </div>
    )
}