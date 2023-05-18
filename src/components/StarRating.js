import React from "react";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function StarRating(props) {
  const { star } = props;
  return Array.from({ length: 5 }, (element, index) => {
    return (
      <span key={index}>
        {star > index ? (
          <FaStar className="icon" style={{ color: "gold" }} />
        ) : (
          <AiOutlineStar className="icon" style={{ color: "gold" }} />
        )}
      </span>
    );
  });
}

export default StarRating;
