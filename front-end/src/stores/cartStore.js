import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create((set) => ({
  items: [], // Cart items
  totalAmount: 0, // Total cart amount
  frequencyMap: {}, // Frequency Map

  addItem: (item) =>
    set((state) => {
      const priceString = item.Price.match(/[\d.]+/)[0];
      const priceNumber = parseFloat(priceString);

      const updatedFrequencyMap = { ...state.frequencyMap };
      updatedFrequencyMap[item.Name] =
        (updatedFrequencyMap[item.Name] || 0) + 1;

      const itemExists = state.items.find(
        (cartItem) => cartItem.Name === item.Name
      );

      const updatedTotalAmount = state.totalAmount + priceNumber;

      if (itemExists) {
        return {
          totalAmount: parseFloat(updatedTotalAmount.toFixed(2)), // Round to 2 decimals
          frequencyMap: updatedFrequencyMap,
        };
      }

      return {
        items: [...state.items, item],
        totalAmount: parseFloat(updatedTotalAmount.toFixed(2)), // Round to 2 decimals
        frequencyMap: updatedFrequencyMap,
      };
    }),

  decreaseItem: (item) =>
    set((state) => {
      const currentCount = state.frequencyMap[item.Name] || 0;

      if (currentCount === 1) {
        return state; // No changes are made to the store
      }

      const priceString = item.Price.match(/[\d.]+/)[0];
      const priceNumber = parseFloat(priceString);

      const updatedFrequencyMap = {
        ...state.frequencyMap,
        [item.Name]: currentCount - 1,
      };

      const updatedTotalAmount = state.totalAmount - priceNumber;

      return {
        frequencyMap: updatedFrequencyMap,
        totalAmount: parseFloat(updatedTotalAmount.toFixed(2)), // Round to 2 decimals
      };
    }),

  removeItem: (itemToRemove) =>
    set((state) => {
      const updatedItems = state.items.filter(
        (item) => item.Name !== itemToRemove.Name
      );

      const updatedTotal = updatedItems.reduce((total, item) => {
        const priceString = item.Price.match(/[\d.]+/)[0];
        const priceNumber = parseFloat(priceString);
        return total + priceNumber;
      }, 0);

      const { [itemToRemove.Name]: _, ...updatedFrequencyMap } =
        state.frequencyMap;

      return {
        items: updatedItems,
        totalAmount: parseFloat(updatedTotal.toFixed(2)), // Round to 2 decimals
        frequencyMap: updatedFrequencyMap,
      };
    }),

  clearCart: () => set({ items: [], totalAmount: 0 }),
}));

export default useCartStore;
