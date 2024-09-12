// hooks/useCart.js
import useCartStore from "@/stores/cartStore";

export const useCart = () => {
  const { items, totalAmount, addItem, removeItem, clearCart } = useCartStore(
    (state) => state
  );
  return { items, totalAmount, addItem, removeItem, clearCart };
};
