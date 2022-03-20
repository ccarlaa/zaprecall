let score = 0;

export default function Footer(card) {

    if(card.state === false){
        return (
            <footer>
                <h1>0/{card.length}-CONCLUÍDOS</h1>
            </footer>
        )
    }if(card.state === true){
        score = score + 1;
        return(
            <footer>
                <h1>{score}/{card.length}-CONCLUÍDOS</h1>
            </footer> 
        )
    }
}