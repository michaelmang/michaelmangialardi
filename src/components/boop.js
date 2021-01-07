import { cloneElement, Children } from 'react'

export default function Boop({ children }) {
  return (
    Children.map(children, child => (
      cloneElement(child, {
        className: `${child.props.className} cursor-pointer skew-0 hover:text-cta transform transition-all hover:skew-y-3`,
      })
    ))
  )
}