import React from 'react';

import CardBack from './CardBack';

export default function CardFront(card) {

    const [showAnswer, setShowAnswer] = React.useState(false);

    return !showAnswer ? (
        <div className="cardfront">
            <p>{card.question}</p>
            <img onClick={() => setShowAnswer(true)} src="./images/setinha.png" alt="" />
        </div>
    ) : (<CardBack answer={card.answer} number={card.number} decklength={card.decklength}/>)
}