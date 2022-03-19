import React from 'react';

import Recall from "./Recall"

function Page() {
    const [page,setPage] = React.useState(true)

        return page ? (
        <>
            <div className="presentation">        
                <img src="./images/logo.png" />
                <h1>ZapRecall</h1>
            </div>
            <button className="start-button" onClick={() => setPage(false)}>Iniciar Recall!</button>
        </>
        ) : (<Recall />)

}

export default function Start() {
    return(
        <div className="center-start">
            <Page />
        </div>
    )
}