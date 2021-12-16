import React from "react";

const FuncKompDruga = (props) => {
    
    return (
        <div>
        <h2> Komponenta definirana drugom funkcijom sa ispisom proslijeđenih child propsa:</h2>
        {props.children} 
        </div>
    );
}

export default FuncKompDruga;