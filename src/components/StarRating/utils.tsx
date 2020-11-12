import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"

export const renderStars = (completedStars: number, halfStar: boolean) => {
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