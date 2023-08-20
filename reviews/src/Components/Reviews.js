import React from "react";
import reviews from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Reviews() {
  const [reviewIndex, setReviewIndex] = React.useState(0);

  function prevBtn() {
    setReviewIndex((prevState) =>
      prevState === 0 ? reviews.length - 1 : prevState - 1
    );
  }

  function nextBtn() {
    setReviewIndex((prevState) =>
      prevState === reviews.length - 1 ? 0 : prevState + 1
    );
  }

  function handleSurprise() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setReviewIndex(randomIndex);
  }

  return (
    <main>
      <article className="review">
        <div className="image-container">
          <img className="person-image" src={reviews[reviewIndex].image} alt="review" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h2>{reviews[reviewIndex].name}</h2>
        <p className="job">{reviews[reviewIndex].job}</p>
        <p className="info">{reviews[reviewIndex].text}</p>
        <div className="arrow-button">
          <button className="prev-btn" onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <button className="surprise-me" onClick={handleSurprise}>
          Surprise Me
        </button>
      </article>
    </main>
  );
}
