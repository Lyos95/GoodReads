import React from "react"
import "./text-box-information.scss"

type TextBoxInformationProps = { children?: any, title: string }
const TextBoxInformation = ({ children, title }: TextBoxInformationProps) => {
  return (
    <div className="text-box-information">
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default TextBoxInformation
