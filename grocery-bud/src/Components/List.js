import React from "react";


export default function List({listItem, deleteItem}){
    return (
        <div>
            <p>{listItem}</p>
            <button onClick={() => deleteItem(listItem)}>Delete</button>
        </div>
    )
}