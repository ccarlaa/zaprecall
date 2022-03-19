export default function CloseCard(card) {
    return (
        <div className="closecard">
            <h1>Pergunta {card.number}</h1>
            <ion-icon name="close-circle"></ion-icon>
        </div>
    )

}