import React from 'react';

export default function CardFront(card) {
    return (
        <div className="cardfront">
            <p>{card.question}</p>
            <img src="./images/setinha.png" alt="" />
        </div>
    )
}