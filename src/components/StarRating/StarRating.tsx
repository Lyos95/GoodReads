import React, { useEffect, useState } from "react"
import "./star-rating.scss"
import { renderStars } from "./utils"


type StarRatingProps = { rating: number | undefined }
const StarRating = ({ rating = 0 }: StarRatingProps) => {
  const [numberOfCompletedStars, setNumberOfCompletedStars] = useState(0)
  const [halfOfStar, sethalfOfStar] = useState(false)

  useEffect(() => {
    let floorRating = Math.floor(rating)
    setNumberOfCompletedStars(floorRating)
    sethalfOfStar(rating - floorRating > 0)
  }, [rating])

  return (
    <div className="rating-container">
      {renderStars(numberOfCompletedStars, halfOfStar)}{" "}
      {rating > 0 && `(${rating})`}
    </div>
  )
}

export default StarRating
