import Img from "gatsby-image"

export default function Bio({ children, className, fluid, name }) {
  return (
    <div className={`flex flex-row ${className} justify-center`}>
      <div className="flex flex-col mr-6 h-32 w-32 overflow-hidden rounded-full border-background dark:border-background-light border-4">
        <Img fluid={fluid} />
      </div>
      <div className="flex flex-col w-2/3">
        <div className="text-dark dark:text-light text-sm md:text-base text-justify">
          {name} {children}
        </div>
      </div>
    </div>
  )
}
