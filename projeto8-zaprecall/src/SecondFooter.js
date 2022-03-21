import Message from "./Message"

let score = 0;
let array = [];
let incorrect = false;

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

function HtmlFooter(score) {
    array = [...array,score.icon];
    return (
        <footer className="second-footer">
            <div className="icons">
                {array.map(answer => <HtmlIcon icon={answer} />)}
            </div>
            <h1>{score.score}/{score.decklength}-CONCLUÍDOS</h1>
        </footer>
    )
}

export default function Footer(card) {
    score = score + 1;
    if(card.icon === "1"){
        incorrect = true;
    }
    if(score < card.decklength){
        return (
            <HtmlFooter score={score} decklength={card.decklength} icon={card.icon}/>
        )
    }else{
        return (
            <>
                <Message status={incorrect} />
                <HtmlFooter score={score} decklength={card.decklength} icon={card.icon}/>
            </>
        )
    }
}

