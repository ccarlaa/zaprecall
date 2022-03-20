import React from 'react';

import CardFront from "./CardFront";
import Footer from "./Footer";

export default function OpenCard(card) {

    const[open, setOpen] = React.useState(false);

    return !open ? (
        <>
            <div className="card" onClick={() => setOpen(true)}>
                <h1>Pergunta {card.number}</h1>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <Footer lenght={card.length} state={open}/>
        </>
    ) : (
        <>
            <CardFront question={card.question} answer={card.answer} number={card.number}/>
            <Footer lenght={card.length} state={open}/>
        </>
    )
}