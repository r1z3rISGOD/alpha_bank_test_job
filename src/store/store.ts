import {configureStore, createSlice} from '@reduxjs/toolkit';
import {toggleLike, setCardsData, showOriginCards, showFilteredCards, removeCard} from "./actions";

const feedSlice = createSlice({
    name: 'alfa',
    initialState: {
        cardsData: [],
        filteredCardsData: [],
        showFilteredCardsData: false
    },
    reducers: {
        toggleLike,
        setCardsData,
        showOriginCards,
        showFilteredCards,
        removeCard
    }
})

export const store = configureStore({
    reducer: feedSlice.reducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
