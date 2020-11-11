import React from "react"
import "./sticky-header.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

type StickyProps = { triggerFunction: Function }
const StickyHeader = ({ triggerFunction }: StickyProps) => {
  return (
    <div className="sticky-header">
      <div className="sticky-header-flexbox-container">
        <FontAwesomeIcon
          onClick={() => {
            triggerFunction()
          }}
          icon={faArrowLeft}
          size="2x"
          className="sticky-header-flexbox-container__icon"
        ></FontAwesomeIcon>
        <div className="sticky-header-flexbox-container__title">
          Author profile
        </div>
      </div>
    </div>
  )
}

export default StickyHeader
