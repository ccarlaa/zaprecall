
function HtmlCloseCard(card) {
    return (
        <div className="card">
            <h1 className={card.color}>Pergunta {card.number}</h1>
            <ion-icon class={card.color} name={card.icon}></ion-icon>
        </div>
    )
}

export default function CloseCard(card) {
    if(card.color === "red"){
        return (
            <HtmlCloseCard color="red" icon="close-circle" />
        )
    }if(card.color === "green"){
        return (
            <HtmlCloseCard color="green" icon="checkmark-circle" />
        )
    }if(card.color === "orange"){
        return (
            <HtmlCloseCard color="orange" icon="help-circle" />
        )
    }
}