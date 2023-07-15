import React from "react";

export default function Menu(props) {
    return props.items.map((menuItem) => {
        return (
            <div className="all-food-card">
                <article className="food-card">
                    <img src={menuItem.img} alt="food" />
                    <div>
                        <h2>{menuItem.title}</h2>
                        <button>{menuItem.price}</button>
                    </div>
                    <p>{menuItem.desc}</p>
                </article>
            </div>
        )
    })
}