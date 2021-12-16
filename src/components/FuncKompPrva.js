import React from "react";

const FuncKompPrva = (props) => {
    const { ime, godine } = props;

    return (
        <div>
        <h2> Komponenta definirana funkcijom:</h2>
        <p>Prva osoba je {ime} i ima {godine} godina.</p>
        </div>
    );
}

export default FuncKompPrva;