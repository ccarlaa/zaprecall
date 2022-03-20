import Deck from "./Deck"
import Header from "./Header"

export default function Recall() {
    return (
        <>
            <Header />
            <div className="deck">
                <Deck />
            </div>
        </>
    )
}