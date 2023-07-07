import React from "react";
import reviews from "../data";

export default function Reviews() {
    
    const [reviewIndex, setReviewIndex] = React.useState(0)

    function prevBtn() {
        setReviewIndex((prevState) => prevState === 0 ? reviews.length - 1 : prevState - 1)
    }

    function nextBtn() {
        setReviewIndex((prevState) => prevState === reviews.length -1 ? 0 : prevState + 1)
    }

    function handleSurprise() {
        const randomIndex = Math.floor(Math.random() * reviews.length)
        setReviewIndex(randomIndex)
    }

    return (
        <main>
            <div>
                <img src={reviews[reviewIndex].image}/>
            </div>
            <h2>{reviews[reviewIndex].name}</h2>
            <p className="job">{reviews[reviewIndex].job}</p>
            <p>{reviews[reviewIndex].text}</p>
            <div className="arrow-button">
                <button onClick={prevBtn}>previous</button>
                <button onClick={nextBtn}>next</button>
            </div>
            <button className="surprise-me" onClick={handleSurprise}>Surprise Me</button>
        </main>

    )
}