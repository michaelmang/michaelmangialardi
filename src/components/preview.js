import { Link } from "gatsby"
import { animated, useSpring } from "react-spring"
import { useHover } from "react-use"

import fadeIn from "../animations/fade-in"

export default function Preview({
  children,
  className,
  cta: defaultCta = "Read more",
  slug = "/",
  subtitle,
  title: defaultTitle,
  ...rest
}) {
  function title(hovered) {
    return (
      <Link to={slug}>
        <h3
          className={`cursor-pointer text-base md:text-lg md:w-max md:max-w-xs ${
            hovered ? "text-cta" : "text-dark dark:text-light"
          } font-bold`}
        >
          {defaultTitle}
        </h3>
      </Link>
    )
  }

  const [hoverableTitle, isTitleHovered] = useHover(title)

  const spring = useSpring(fadeIn())

  return (
    <animated.div {...rest} className={`flex flex-col mb-6 ${className}`} style={spring}>
      {hoverableTitle}
      {subtitle && (
        <h4 className="text-dark dark:text-light opacity-75 text-sm md:text-base font-bold">
          {subtitle}
        </h4>
      )}
      <div className="my-4 text-sm md:text-base text-dark dark:text-light text-left w-full">
        {children}
      </div>
      <Link
        className={`cursor-pointer text-sm md:text-base hover:text-cta ${
          isTitleHovered ? "text-cta" : "text-dark dark:text-light"
        } font-bold w-max`}
        to={slug}
      >
        {defaultCta}
      </Link>
    </animated.div>
  )
}
