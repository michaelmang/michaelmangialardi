import { Link } from 'gatsby'
import { useHover } from 'react-use'

export default function Preview({ children, cta: defaultCta = "Read more", link = "/", subtitle, title: defaultTitle }) {
  function title(hovered) {
    return (
      <div className={`cursor-pointer text-lg w-max ${hovered ? 'text-cta' : 'text-dark dark:text-light'} font-bold`}>{defaultTitle}</div>
    )
  }

  const [hoverableTitle, isTitleHovered] = useHover(title);

  return (
    <div className="flex flex-col mb-6">
      {hoverableTitle}
      {subtitle && <div className="text-dark dark:text-light opacity-75 text-base font-bold">{subtitle}</div>}
      <div className="my-4 text-base text-dark dark:text-light text-justify w-3/4">{children}</div>
      <Link className={`cursor-pointer text-base hover:text-cta ${isTitleHovered ? 'text-cta' : 'text-dark dark:text-light'} font-bold`} to={link}>{defaultCta}</Link>
    </div>
  )
}