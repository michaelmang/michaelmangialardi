export default function Pill({ children, className, ...rest }) {
  return (
    <div {...rest} className={`flex items-center bg-accent text-dark dark:text-light dark:bg-background text-xs md:text-sm rounded-full min-w-max px-4 py-1 mr-2 mb-2 font-regular w-min leading-normal ${className}`}>
      {children}
    </div>
  )
}