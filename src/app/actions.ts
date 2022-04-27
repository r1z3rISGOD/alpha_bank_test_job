import {PayloadAction} from "@reduxjs/toolkit";

type CardType = {
    liked_by_user: boolean;
    urls: {
        full: string
    },
    alt_description: string,
    id: string
}

export const toggleLike = (state, action: PayloadAction<string>) => {
    const cardId = action.payload;
    const idInOriginArray = state.cardsData.findIndex((card: CardType) => card.id === cardId)
    if (state.showFilteredCardsData) {
        state.cardsData[idInOriginArray].liked_by_user = false
        const idInFilteredArray = state.filteredCardsData.findIndex((card) => card.id === cardId);

        state.filteredCardsData = [
            ...state.filteredCardsData.slice(0, idInFilteredArray),
            ...state.filteredCardsData.slice(idInFilteredArray + 1)
        ]
    } else {
        state.cardsData[idInOriginArray].liked_by_user = !state.cardsData[idInOriginArray].liked_by_user;
    }
}
export const showOriginCards = (state) => {
    state.showFilteredCardsData = false;
}
export const showFilteredCards = (state) => {
    state.filteredCardsData = state.cardsData.filter((card: CardType) => card.liked_by_user)
    state.showFilteredCardsData = true;
}
export const removeCard = (state, action: PayloadAction<string>) => {
    const removedCardId = action.payload;
    const idInOriginArray = state.cardsData.findIndex((card: CardType) => card.id === removedCardId)
    state.cardsData = [
        ...state.cardsData.slice(0, idInOriginArray),
        ...state.cardsData.slice(idInOriginArray + 1)
    ];
    if (state.showFilteredCardsData) {
        const idInFilteredArray = state.filteredCardsData.findIndex((card: CardType) => card.id === removedCardId)
        state.filteredCardsData = [
            ...state.filteredCardsData.slice(0, idInFilteredArray),
            ...state.filteredCardsData.slice(idInFilteredArray + 1)
        ]
    }
}
export const setCardsData = (state, action: PayloadAction<{}>) => {
    state.cardsData = action.payload;
}

export const actions = {
    TOGGLE_LIKE: 'alfa/toggleLike',
    REMOVE_CARD: 'alfa/removeCard',
    SET_CARDS_DATA: 'alfa/setCardsData',
    SHOW_ORIGIN_CARDS: 'alfa/showOriginCards',
    SHOW_FILTERED_CARDS: 'alfa/showFilteredCards'
}
