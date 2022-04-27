import React from "react";
import './CardItem.css'

interface CardItemProps {
    id: string,
    url: string,
    style: {},
    description: string,
    isLiked: boolean,
    onLikeClicked: (id: string) => void,
    onRemoveCardClicked: (id: string) => void
}

export const CardItem = ({
id,
style,
url,
description,
isLiked,
onLikeClicked,
onRemoveCardClicked
} : CardItemProps) => {
    return (
        <div key={id} style={style} className='card_item'>
            <img src={url} alt="" className='card_item__img'/>
            <div className="card_item__buttons">
                <div className='card_item__remove' onClick={() => onRemoveCardClicked(id)}/>
                <div className={`card_item__toggle_like ${isLiked ? 'card_item__toggle_like-active' : ''}`} onClick={() => onLikeClicked(id)}/>
            </div>
            <div className='card_item__description'>{description}</div>
        </div>
    )
}
