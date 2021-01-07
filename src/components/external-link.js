export default function ExternalLink({ children, to }) {
  return (
    <a href={to} target="_blank" rel="noreferrer noopener">{children}</a>
  )
}