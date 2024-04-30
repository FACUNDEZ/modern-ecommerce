import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: { price: 0, products: [] },
    setCurrentCart: (cart) => set({ cart })
}))