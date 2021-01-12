import { Fragment } from "react"
import { animated, useSpring } from "react-spring"
import { useToggle } from "react-use"

import { state } from "./provider"
import CoinBlock from "../images/coin_block.svg"
import ReactMushroom from "../images/react_mushroom.svg"

export default function ThemeToggle() {
  const [smashed, toggleSmashed] = useToggle(false)

  const moon = { color: "#0A0C10" }
  const sun = { color: "#FFE773" }
  const spring = useSpring({
    from: smashed ? sun : moon,
    to: smashed ? moon : sun,
  })
  const AnimatedReactMushroom = animated(ReactMushroom)

  return (
    <state.Consumer>
      {context => (
        <Fragment>
          <AnimatedReactMushroom
            className={`h-10 md:h-16 w-auto mb-2`}
            style={spring}
          />
          <CoinBlock
            className={`cursor-pointer h-10 md:h-16 w-auto mb-6 md:mb-10 transition-all text-cta delay-75 hover:text-background`}
            onClick={() => {
              context.changeTheme()
              toggleSmashed()
            }}
          />
        </Fragment>
      )}
    </state.Consumer>
  )
}