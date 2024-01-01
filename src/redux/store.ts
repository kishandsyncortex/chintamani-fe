import { configureStore } from '@reduxjs/toolkit'
import category from './reducer/category'

export const store = configureStore({
  reducer: {category:category},
})