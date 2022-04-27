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
        <div key={id} style={style} className={`card_item ${isLiked ? 'card_item-liked' : ''}`}>
            <img src={url} alt="" className='card_item__img'/>
            <div className="card_item__buttons">
                <div className='card_item__remove' onClick={() => onRemoveCardClicked(id)}>Remove</div>
                <div className='card_item__toggle_like' onClick={() => onLikeClicked(id)}>{isLiked ? 'Unlike' : 'Like'}</div>
            </div>
            <div className='card_item__description'>{description}</div>
        </div>
    )
}
