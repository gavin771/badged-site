import React from "react"

export default ({ title, clickAction }) => {
  return (
    <button onClick={clickAction} className="fancy-btn">
      {title}
    </button>
  )
}
