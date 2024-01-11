import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import category from './reducer/category'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './reducer/auth'
import cart from './reducer/cart'

let rootReducer:any = combineReducers({
  category:category,
  auth:auth,
  cart:cart
})

const persistConfig = {
  key: 'root',
  storage,
}
const reducerProxy = (state: any, action: AnyAction) => {
  console.log("🚀 ~ reducerProxy ~ action:", action)
  if(action.type === 'category/handleLogout') {
    state={}
    return rootReducer(state, action);
  }
  return rootReducer(state, action);
}
 
const persistedReducer = persistReducer(persistConfig, reducerProxy)

export const store = configureStore({
  reducer: persistedReducer,
})
export const persistor = persistStore(store)