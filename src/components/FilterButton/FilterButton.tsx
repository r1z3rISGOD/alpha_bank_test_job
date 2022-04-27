import React from "react";
import './FilterButton.css'

interface FilterButtonProps {
    isShowFilteredCardsData: boolean,
    onFilterCardClicked: () => void,
    onOriginCardClicked: () => void
}
export const FilterButton = ({isShowFilteredCardsData, onFilterCardClicked, onOriginCardClicked} : FilterButtonProps) => {
    return <button className='card_list__filter' onClick={() => {
        if (isShowFilteredCardsData) {
            onOriginCardClicked()
        } else {
            onFilterCardClicked()
        }
    }}>{isShowFilteredCardsData ? 'Show all cards' : 'Show liked cards'}</button>
}
