import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './reducers';


const persistConfig = {
    key: 'root',
    whitelist: [
        'users', 
        'admins', 
        'property'
    ],
    storage,
    stateReconciler: autoMergeLevel2
}


export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== "production"
})

export const persistor = persistStore(store)
