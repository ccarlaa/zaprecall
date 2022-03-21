import Deck from "./Deck";
import Header from "./Header";

export default function Recall(card) {
    return (
        <>
            <Header />
            <div className="deck">
                <Deck />
            </div>
        </>
    )
}