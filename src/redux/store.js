import { configureStore } from '@reduxjs/toolkit'
import  listereducer from './slice'

export const store = configureStore({
  reducer: {listereducer: listereducer,},
})