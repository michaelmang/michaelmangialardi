import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { Fragment } from "react"
import { useToggle, useWindowSize } from "react-use"

import Icon from "./icon"

const MD = 768

export default function Navigation() {
  const { width } = useWindowSize()

  const [expandMenu, toggleExpandMenu] = useToggle()

  return (
    <nav className="flex flex-row justify-between mb-8">
      <Link
        className="text-cta font-bold text-base md:text-xl tracking-wider"
        to="/"
      >
        Michael Mangialardi
      </Link>

      <div className="flex flex-col justify-center items-end md:flex-row">
        {!expandMenu && <Icon className="md:hidden text-cta mt-1" icon={faBars} onClick={toggleExpandMenu} />}
        {expandMenu && <Icon className="md:hidden text-cta mt-1 mb-4" icon={faTimes} onClick={toggleExpandMenu} />}
        
        <Link
          className={`${expandMenu ? "flex" : "hidden"} md:flex mr-0 md:mr-6 text-cta font-bold text-sm md:text-lg tracking-wider`}
          to="/blog"
        >
          Blog
        </Link>

        <Link
          className={`${expandMenu ? "flex" : "hidden"} md:flex mr-0 my-2 md:mr-6 md:my-0 text-cta font-bold text-sm md:text-lg tracking-wider`}
          to="/newsletter"
        >
          Newsletter
        </Link>

        <a
          className={`${expandMenu ? "flex" : "hidden"} md:flex text-cta font-bold text-sm md:text-lg tracking-wider`}
          href="mailto:mikemangialardi94@gmail.com"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
