import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducer";
import { addCart, deleteProduct, totalCount } from "./reducers/product-reducer";
import { loadState, saveState } from "@/config/LocalStorage";

const totalCountMiddleware = createListenerMiddleware();

interface ProductState {
  product_list: Product[];
  count: number;
  totalPrice: number;
}
interface Product {
  id: number;
  price: number;
  user_price?: number;
  user_count?: number;
}

totalCountMiddleware.startListening({
  matcher: isAnyOf(addCart, deleteProduct),
  effect: (action, api) => {
    api.dispatch(totalCount());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState: {
    product: loadState("products"),
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(totalCountMiddleware.middleware),
});

store.subscribe(() => {
  saveState("products", store.getState().product);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
