export default function OpenCard(card) {
    return (
        <div className="card">
            <h1>Pergunta {card.number}</h1>
            <ion-icon class="icon" name="play-outline"></ion-icon>
        </div>
    )
}