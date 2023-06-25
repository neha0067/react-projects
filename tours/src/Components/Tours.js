import React from "react";
import Tour from "./Tour";


export default function Tours(props) {

    return (
        <section>
            <div>
                <h1>Our Tours</h1>
                <div className="underline"></div>
            </div>
            <div>
                {props.tours.map((tour) => {
                    return <Tour
                        key={tour.id}
                        {...tour}
                        // id={tour.id}
                        // image={tour.image}
                        // price={tour.price}
                        // name={tour.name}
                        // info={tour.info}
                        removeTour={props.removeTour}
                    />
                })}
            </div>
        </section>
    )
}