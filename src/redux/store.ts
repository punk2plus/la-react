import { actionLog } from "./middlewares/actionLog";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pageASlice } from "./pageA";
import { pageBSlice } from "./pageB";
import { pageCSlice } from "./pageC";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
}

const rootReducer = combineReducers({
    pageA: pageASlice.reducer,
    pageB: pageBSlice.reducer,
    pageC: pageCSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default { store, persistor };