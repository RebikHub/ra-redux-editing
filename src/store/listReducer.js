import { createSlice } from "@reduxjs/toolkit";

export const listReducer = createSlice({
  name: 'listReducer',
  initialState: {
    items: []
  },
  reducers: {
    addItemStore: (state, action) => {
      state.items.push(action.payload)
    },
    deleteItemStore: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload)
    },
    editItemStore: (state, action) => {
      const { id, name, price } = action.payload
      const index = state.items.findIndex((el) => el.id === id)
      state.items[index] = {
        name: name,
        price: price,
        id: id
      }
    }
  }
})

export const { addItemStore, deleteItemStore, editItemStore } = listReducer.actions
export default listReducer.reducer