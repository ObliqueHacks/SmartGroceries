// stores/cartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [], // Cart items
  totalAmount: 0, // Total cart amount
  addItem: (item) =>
    set((state) => {
      // Extract the numeric part from the price string (e.g., "$1.23/ea" -> "1.23")
      const priceString = item.Price.match(/[\d.]+/)[0];
      // Convert the extracted string to a floating-point number
      const priceNumber = parseFloat(priceString);

      return {
        items: [...state.items, item],
        totalAmount: state.totalAmount + priceNumber,
      };
    }),
  removeItem: (itemId) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== itemId);
      const updatedTotal = updatedItems.reduce(
        (total, item) => total + item.Price,
        0
      );
      return { items: updatedItems, totalAmount: updatedTotal };
    }),
  clearCart: () => set({ items: [], totalAmount: 0 }),
}));

export default useCartStore;
