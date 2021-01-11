import { Link } from 'gatsby'
import { useHover } from 'react-use'

export default function Preview({ children, className, cta: defaultCta = "Read more", slug = "/", subtitle, title: defaultTitle, ...rest }) {
  function title(hovered) {
    return (
      <Link to={slug}>
        <h3 className={`cursor-pointer text-lg w-max ${hovered ? 'text-cta' : 'text-dark dark:text-light'} font-bold`}>{defaultTitle}</h3>
      </Link>
    )
  }

  const [hoverableTitle, isTitleHovered] = useHover(title);

  return (
    <div {...rest} className={`flex flex-col mb-6 ${className}`}>
      {hoverableTitle}
      {subtitle && <h4 className="text-dark dark:text-light opacity-75 text-base font-bold">{subtitle}</h4>}
      <div className="my-4 text-base text-dark dark:text-light text-justify w-3/4">{children}</div>
      <Link className={`cursor-pointer text-base hover:text-cta ${isTitleHovered ? 'text-cta' : 'text-dark dark:text-light'} font-bold`} to={slug}>{defaultCta}</Link>
    </div>
  )
}