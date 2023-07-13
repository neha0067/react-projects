import React from "react";


export default function Categories(props) {
    return props.categories.map((category) => {
        return <button onClick={() => props.filter(category)}>{category}</button>
    })
}