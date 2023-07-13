import { configureStore } from '@reduxjs/toolkit'

import columnsReducer from './slices/column.slice';
import cardsReducer from './slices/card.slice';

const store = configureStore({
  reducer: {
    columns: columnsReducer,
    card: cardsReducer
  }
})

// export const RootState = store.getState();
// export const AppDispatch = store.dispatch;

export default store