import { combineReducers, configureStore } from '@reduxjs/toolkit'
import category from './reducer/category'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './reducer/auth'

let rootReducer:any = combineReducers({
  category:category,
  auth:auth
})

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)