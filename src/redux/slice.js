import { createSlice } from '@reduxjs/toolkit'
export const listSlice = createSlice({
    name: 'listereducer',
    initialState:[],
    reducers: {
      list: (state,action) => state=action.payload
      ,
     
    },
  })
  
  export const { list } = listSlice.actions
  
  export default listSlice.reducer