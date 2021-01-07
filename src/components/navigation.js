import { Link } from 'gatsby';

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-between mb-8">
      <Link className="text-cta font-bold text-xl tracking-wider" to="/">
        Michael Mangialardi
      </Link>
    </nav>
  )
}