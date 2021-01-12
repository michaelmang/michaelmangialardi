export default function Heading({ children, className }) {
  return (
    <div className={`tracking-widest uppercase text-cta text-base md:text-lg font-bold mb-6 ${className}`}>
      {children}
    </div>
  )
}