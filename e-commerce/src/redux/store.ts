import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import baseApi from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userSlice from "./features/users/userSlice";
import filterSlice from "./features/products/filterSlice";
import reviewsSlice from "./features/reviews/reviewsSlice";
import bookingSlice from "./features/bookings/bookingSlice";
import productSlice from "./features/products/ProductSlice"
import addToCartReducer from "./features/cart/addToCart.slice"

// redux persistor
const persistConfig = {
  key: "auth",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedCartsReducer = persistReducer(persistConfig, addToCartReducer);

// store
const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedReducer,
    users: userSlice,
    filters: filterSlice,
    reviews: reviewsSlice,
    bookings: bookingSlice,
    product: productSlice,
    carts: persistedCartsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
export const persistor = persistStore(store);
