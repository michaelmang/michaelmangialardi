import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer className="w-full flex flex-row mt-20">
      <div className="flex flex-col w-3/4">
        <Link
          className="text-cta font-bold text-base md:text-xl tracking-wider"
          to="/"
        >
          Michael Mangialardi
        </Link>
        <div className="font-black text-xs md:text-base text-dark opacity-75 dark:text-light mb-4 md:mb-8">
          Blacksburg, Virginia
        </div>
        <div className="text-xs text-dark opacity-75 dark:text-light">
          © 2020-present Michael Mangialardi. All Rights Reserved
        </div>
      </div>
      <div className="flex-col hidden md:flex md:w-1/4 items-end">
        <div className="flex flex-row">
          <Link
            className="text-dark dark:text-light opacity-75 font-bold text-xs md:text-base tracking-wider mr-3 md:mr-6"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-dark dark:text-light opacity-75 font-bold text-xs md:text-base tracking-wider mr-3 md:mr-6"
            to="/newsletter"
          >
            Newsletter
          </Link>
          <Link
            className="text-dark dark:text-light opacity-75 font-bold text-xs md:text-base tracking-wider mr-3 md:mr-6"
            to="/newsletter"
          >
            Speaking
          </Link>
          <a
            className="text-dark dark:text-light opacity-75 font-bold text-xs md:text-base tracking-wider"
            href="mailto:mikemangialardi94@gmail.com"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
