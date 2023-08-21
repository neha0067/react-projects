import React from "react";


export default function List({listItem, deleteItem}){
    return (
        <div className="grocery-items">
            <p>{listItem}</p>
            <button onClick={() => deleteItem(listItem)}>Delete</button>
        </div>
    )
}