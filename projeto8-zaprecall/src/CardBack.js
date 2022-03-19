import React from 'react';

import CloseCard from "./CloseCard"

export default function CardBack(card) {

    const [closeCard,setCloseCard] = React.useState(false);
    console.log(closeCard);

    return !closeCard ? (
        <div className="answer">
            <p>{card.answer}</p>
            <div className="performance">
                <p className="red" onClick={() => setCloseCard("red")}>Não lembrei</p>
                <p className="orange" onClick={() => setCloseCard("orange")}>Quase não lembrei</p>
                <p className="green" onClick={() => setCloseCard("green")}>Zap!</p>
            </div>
        </div>
    ) : (<CloseCard color={closeCard} number={card.number}/>)
}