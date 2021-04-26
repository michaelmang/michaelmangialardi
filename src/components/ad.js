import Img from "gatsby-image"

export default function Ad({ className, fluid }) {
  return (
    <div
      className={`flex flex-row self-center my-16 rounded-lg bg-dark dark:bg-light shadow-2xl max-w-screen-sm min-h-64 w-full p-8 ${className}`}
    >
      <div
        className="flex flex-col text-left md:text-justify w-2/3"
      >
        <div className="text-background-light dark:text-background text-lg md:text-xl font-black">
          Design Systems for Developers
        </div>

        <p className="mt-3 pr-6 text-light dark:text-dark text-sm md:text-base font-black">
          Read my latest ebook on how to use design tokens to code production-ready design system assets.
        </p>
        <a className="mt-6 h-12" href="https://www.producthunt.com/posts/design-systems-for-developers-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-design-systems-for-developers-2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=293753&theme=light" alt="Design Systems for Developers - Use Design Tokens To Launch Design Systems Into Production | Product Hunt" /></a>
      </div>
      <div
        className="flex flex-col text-left md:text-justify w-1/3"
      >
        <a className="cursor-pointer" href="https://www.producthunt.com/posts/design-systems-for-developers-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-design-systems-for-developers-2">
          <Img className="rounded-circle" fluid={fluid} />
        </a>
      </div>
    </div>
  )
}
