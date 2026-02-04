import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer/index.js";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
