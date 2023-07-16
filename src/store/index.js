import { configureStore } from '@reduxjs/toolkit'

import columnsReducer from './slices/column.slice';
import cardsReducer from './slices/card.slice';
import boardsSlice from './slices/boards.slice';

const store = configureStore({
  reducer: {
    columns: columnsReducer,
    card: cardsReducer,
    boards: boardsSlice
  }
})



export default store