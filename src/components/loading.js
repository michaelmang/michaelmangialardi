import { Fragment } from "react"
import { animated, useSpring } from 'react-spring'
import { useToggle } from 'react-use'

import fadeIn from "../animations/fade-in"
import Bowser from "../images/bowser.svg"
import Flame from "../images/flame.svg"

export default function Loading({ scale = 1 }) {
  const [isAnimating, toggleAnimation] = useToggle(true)

  const springs = {
    1: useSpring(fadeIn({ delay: 150, reset: !isAnimating })),
    2: useSpring(fadeIn({ delay: 350, reset: !isAnimating })),
    3: useSpring(fadeIn({ delay: 550, reset: !isAnimating, onRest: toggleAnimation })),
  };
  
  const AnimatedFlame = animated(Flame)

  return (
    <Fragment>
      <Bowser className={`h-${64 * scale} w-${64 * scale} text-sun`} />
      {[1, 2, 3].map(idx => (
        <AnimatedFlame key={idx} className={`mt-8 ml-10 h-${32 * scale} w-${32 * scale} text-sun dark:text-background`} style={springs[idx]} />
      ))}
    </Fragment>
  )
}