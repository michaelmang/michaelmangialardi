import { animated, useSpring } from "react-spring"

import fadeIn from "../animations/fade-in"

export default function Pill({ children, className, ...rest }) {
  const spring = useSpring(fadeIn())

  return (
    <animated.div
      {...rest}
      className={`flex items-center bg-accent text-dark dark:text-light dark:bg-background text-xs md:text-sm rounded-full min-w-max px-4 py-1 mr-2 mb-2 font-regular w-min leading-normal ${className}`}
      style={spring}
    >
      {children}
    </animated.div>
  )
}
