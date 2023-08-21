import React from "react";

export default function Menu(props) {
    return props.items.map((menuItem) => {
        return (
            <article className="food-card">
                <img className="food-image" src={menuItem.img} alt="food" />
                <div className="food-info">
                    <header>
                        <h4 className="food-title">{menuItem.title}</h4>
                        <h4 className="food-price">{`$${menuItem.price}`}</h4>
                    </header>                    
                    <p className="food-desc">{menuItem.desc}</p>
                </div>
            </article>
        )
    })
}