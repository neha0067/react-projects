import React from "react";


export default function Categories(props) {
    return (
        <div className="btn-container">
            {props.categories.map((category) => {
                return (
                    <div className="parent-container">
                        <div className="button-container">
                            <button className="buttons" onClick={() => props.filter(category)}>{category}</button>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}