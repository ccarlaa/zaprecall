import Deck from "./Deck"
import Header from "./Header"
import FirstFooter from "./FirstFooter"

export default function Recall(card) {
    return (
        <>
            <Header />
            <div className="deck">
                <Deck />
            </div>
            <FirstFooter decklength={card.decklength}/>
        </>
    )
}