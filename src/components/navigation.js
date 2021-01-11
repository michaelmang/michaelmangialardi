import { Link } from 'gatsby';

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-between mb-8">
      <Link className="text-cta font-bold text-xl tracking-wider" to="/">
        Michael Mangialardi
      </Link>

      <div className="flex flex-row">
        <Link className="mr-6 text-cta font-bold text-lg tracking-wider" to="/blog">
          Blog
        </Link>
        
        <a className="text-cta font-bold text-lg tracking-wider" href="mailto:mikemangialardi94@gmail.com">
          Contact
        </a>
      </div>
    </nav>
  )
}