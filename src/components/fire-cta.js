import { cloneElement } from "react"
import { useToggle } from "react-use"

import Character from "./loading"

export default function FireCta({ children, ...rest }) {
  const [isDiscussHovered, toggleDiscussHovered] = useToggle(false)
  
  return (
    <div className="flex flex-row items-center my-2">
      <Character loop={isDiscussHovered} scale={1 / 8} {...rest} />
      {cloneElement(children, {
        onMouseEnter: toggleDiscussHovered,
        onMouseLeave: toggleDiscussHovered,
      })}
      <Character loop={isDiscussHovered} scale={1 / 8} reverse {...rest} />
    </div>
  )
}