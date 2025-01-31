import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export type TAddtoCart = {
  _id: string;
  name: string;
  image: string;
  price: number;
  stock: number;
  quantity?: number;
};

type TInitialState = {
  carts: TAddtoCart[];
};

const initialState: TInitialState = {
  carts: [],
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<TAddtoCart>) => {
      const isExist = state.carts.find(
        (item) => item._id == action.payload._id
      );
      if (!isExist) {
        state.carts.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
        toast.success("add to cart successfully");
      } else {
        toast.error("already added to cart");
      }
    },
    removeItem: (state, action) => {
      state.carts = state.carts.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.carts = [];
    },
    loadCart: (state, action) => {
      state.carts = action.payload;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.carts.find((item) => item._id === action.payload);
      if (product && product.stock > product.quantity!) {
        product.quantity = (product.quantity || 0) + 1;
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.carts.find((item) => item._id === action.payload);
      if (product && product.quantity! > 1) {
        product.quantity = (product.quantity || 0) - 1;
      }
    },
  },
});

export const {
  addCart,
  removeItem,
  clearCart,
  loadCart,
  incrementQuantity,
  decrementQuantity,
} = addToCartSlice.actions;

export default addToCartSlice.reducer;
