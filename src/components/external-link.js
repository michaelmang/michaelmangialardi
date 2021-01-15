export default function ExternalLink({ children, to, ...rest }) {
  return (
    <a {...rest} href={to} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  )
}
