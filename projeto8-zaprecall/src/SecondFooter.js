let score = 0;
let icon = [];

function HtmlIcon(answer) {
    if(answer.icon === "1"){
        return (
            <>
                <ion-icon class="red" name="close-circle"></ion-icon>
            </>
        )
    }if(answer.icon === "2"){
        return (
            <>
                <ion-icon class="green" name="checkmark-circle"></ion-icon>
            </>
        )
    }
    if(answer.icon === "3"){
        return (
            <>
                <ion-icon class="orange" name="help-circle"></ion-icon>
            </>
        )
    }
}

export default function Footer(card) {
    console.log("second")
    icon = [...icon,card.icon];
    score = score + 1;
    return (
        <footer className="second-footer">
            <div class="icons">
                {icon.map(answer => <HtmlIcon icon={answer} />)}
            </div>
            <h1>{score}/{card.decklength}-CONCLUÍDOS</h1>
        </footer>
    )
}

