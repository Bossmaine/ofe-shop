import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

function RatingStar({ value, numReviews }) {
  const star1 =
    value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />;
  const star2 =
    value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />;
  const star3 =
    value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />;
  const star4 =
    value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />;
  const star5 =
    value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />;
  return (
    <div className="rating">
      <span>{star1}</span>
      <span>{star2}</span>
      <span>{star3}</span>
      <span>{star4}</span>
      <span>{star5}</span>
      <span className="review-count">{`Reviews(${numReviews})`}</span>
    </div>
  );
}

export default RatingStar;
