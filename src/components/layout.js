import Navigation from './navigation'

export default function Layout({ children }) {
  return (
    <div className="font-display min-h-screen w-screen bg-light px-20 py-10">
      <Navigation />
      {children}
    </div>
  )
}