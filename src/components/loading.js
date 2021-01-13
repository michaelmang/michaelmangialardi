import { Fragment } from "react"
import { animated, useSpring } from "react-spring"
import { useToggle } from "react-use"

import fadeIn from "../animations/fade-in"
import Bowser from "../images/bowser.svg"
import Flame from "../images/flame.svg"

const noop = () => {}

export default function Loading({ character: Character = Bowser, loop = false, reverse = false, scale = 1 }) {
  const [isAnimating, toggleAnimation] = useToggle(true)

  const springs = {
    1: useSpring(fadeIn({ delay: 150, reset: !isAnimating })),
    2: useSpring(fadeIn({ delay: 350, reset: !isAnimating })),
    3: useSpring(
      fadeIn({ delay: 550, reset: !isAnimating, onRest: loop ? toggleAnimation : noop })
    ),
  }

  const character = (
    <Character
      className={`h-${96 * scale} w-${96 * scale} m${reverse ? "l" : "r"}-${8 * scale} text-sun`}
      style={{ transform: `scaleX(${reverse ? -1 : 1})` }}
    />
  )
  
  const AnimatedFlame = animated(Flame)

  const flameCount = reverse ? [3, 2, 1] : [1, 2, 3]

  const flame = (
    flameCount.map(idx => (
      <AnimatedFlame
        key={idx}
        className={`mt-${8 * scale} ${idx === 2 ? `mx-${8 * scale}` : "mx-0"} h-${32 * scale} w-${
          32 * scale
        } text-sun dark:text-background`}
        style={{
          ...springs[idx],
          transform: `scaleX(${reverse ? -1 : 1})`,
        }}
      />
    ))
  )

  return (
    <Fragment>
      {reverse && flame}
      {reverse && character}
      {!reverse && character}
      {!reverse && flame}
    </Fragment>
  )
}
