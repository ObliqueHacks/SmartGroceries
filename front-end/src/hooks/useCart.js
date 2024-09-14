// hooks/useCart.js
import useCartStore from "@/stores/cartStore";

export const useCart = () => {
  const {
    items,
    totalAmount,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
    frequencyMap,
  } = useCartStore((state) => state);
  return {
    items,
    totalAmount,
    addItem,
    decreaseItem,
    removeItem,
    clearCart,
    frequencyMap,
  };
};
