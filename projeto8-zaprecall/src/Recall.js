import Deck from "./Deck"
import Header from "./Header"
import Footer from "./Footer"

export default function Recall() {
    return (
        <>
            <Header />
            <div className="deck">
                <Deck />
            </div>
            <Footer />
        </>
    )
}