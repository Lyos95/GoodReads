import React, { useEffect, useState } from "react"
import "./star-rating.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"

type StarRatingProps = { rating: number | undefined }
const StarRating = ({ rating = 0 }: StarRatingProps) => {
  const [numberOfCompletedStars, setNumberOfCompletedStars] = useState(0)
  const [halfOfStar, sethalfOfStar] = useState(false)

  useEffect(() => {
    let floorRating = Math.floor(rating)
    setNumberOfCompletedStars(floorRating)
    sethalfOfStar(rating - floorRating > 0)
  }, [rating])

  let renderStars = (completedStars: number, halfStar: boolean) => {
    let stars = []
    while (completedStars > 0 || halfStar) {
      if (completedStars > 0) {
        stars.push(
          <div className="rating-container__star" key={completedStars}>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </div>
        )
        completedStars--
      } else if (halfStar) {
        stars.push(
          <div className="rating-container__star" key='halfstar'>
            <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
          </div>
        )
        halfStar = false
      }
    }
    return stars
  }
  return (
    <div className="rating-container">
      {renderStars(numberOfCompletedStars, halfOfStar)}{" "}
      {rating > 0 && `(${rating})`}
    </div>
  )
}

export default StarRating
