export default function Pill({ children }) {
  return (
    <div className="flex items-center bg-accent text-dark text-sm rounded-full min-w-max px-4 py-1 mr-2 mb-2 font-regular w-min leading-normal">
      {children}
    </div>
  )
}