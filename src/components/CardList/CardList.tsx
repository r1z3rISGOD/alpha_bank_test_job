import {CardItem} from "../CardItem/CardItem";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {actions} from "../../store/actions";
import {List} from "react-virtualized";
import {FilterButton} from "../FilterButton/FilterButton";
import './CardList.css'
import React from "react";

const listWidth = window.innerWidth;
const listHeight = window.innerHeight;
const rowHeight = 500;

export const CardList = () => {
    const originCardData = useAppSelector((state) => state.cardsData);
    const isShowFilteredCardsData = useAppSelector((state) => state.showFilteredCardsData);
    const filteredCardsData = useAppSelector((state) => state.filteredCardsData);
    const dispatch = useAppDispatch();

    const onLikeClicked = (id: string) => {
        dispatch({type: actions.TOGGLE_LIKE, payload: id})
    }
    const onRemoveCardClicked = (id: string) => {
        dispatch({type: actions.REMOVE_CARD, payload: id})
    }
    const onFilterCardClicked = () => {
        dispatch({type: actions.SHOW_FILTERED_CARDS})
    }
    const onOriginCardClicked = () => {
        dispatch({type: actions.SHOW_ORIGIN_CARDS})
    }
    const createCardItem = ({index, key, style}) => {
        return isShowFilteredCardsData ?
            <CardItem
                key={key}
                style={style}
                id={filteredCardsData[index].id}
                url={filteredCardsData[index].urls.full}
                description={filteredCardsData[index].alt_description}
                isLiked={filteredCardsData[index].liked_by_user}
                onLikeClicked={onLikeClicked}
                onRemoveCardClicked={onRemoveCardClicked}
            /> :
            <CardItem
                key={key}
                style={style}
                id={originCardData[index].id}
                url={originCardData[index].urls.full}
                description={originCardData[index].alt_description}
                isLiked={originCardData[index].liked_by_user}
                onLikeClicked={onLikeClicked}
                onRemoveCardClicked={onRemoveCardClicked}
            />
    }
    return (
        <div className='card_list'>
            <FilterButton
                onFilterCardClicked={onFilterCardClicked}
                onOriginCardClicked={onOriginCardClicked}
                isShowFilteredCardsData={isShowFilteredCardsData}
            />
            <List
                width={listWidth}
                height={listHeight}
                rowHeight={rowHeight}
                rowRenderer={createCardItem}
                rowCount={isShowFilteredCardsData ? filteredCardsData.length : originCardData.length}
            />
        </div>
    )
}
