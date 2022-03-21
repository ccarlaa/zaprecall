import React from 'react';

import CardFront from "./CardFront";
// import FirstFooter from "./FirstFooter"

export default function OpenCard(card) {

    const[open, setOpen] = React.useState(false);

    return !open ? (
        <>
            <div className="card" onClick={() => setOpen(true)}>
                <h1>Pergunta {card.number}</h1>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        </>
    ) : (
        <>
            <CardFront question={card.question} answer={card.answer} number={card.number} decklength={card.decklength}/>
            {/* <FirstFooter decklength={card.decklength} /> */}
        </>
    )
}