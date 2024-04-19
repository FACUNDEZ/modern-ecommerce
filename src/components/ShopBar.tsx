import { CloseButton } from "../icons/CloseBtn"

export const ShopBar = ({state, setState}: {state: boolean, setState: (value: boolean) => void}) => {
    return (
        <div className={`w-screen bg-black fixed top-0 left-0 z-40 h-screen transform transition-transform duration-500 ${state === false ? 'animate-translateX20 ' : 'animate-translateX2'}`}>
            <button onClick={() => setState(false)} className="absolute top-5 right-10 font-bold text-2xl"><CloseButton /></button>
            <div className="ml-6 mt-20">
                
            </div>
        </div>
    )
}