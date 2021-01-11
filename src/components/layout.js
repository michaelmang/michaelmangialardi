import Navigation from "./navigation"

import { state } from './provider'

export default function Layout({ children }) {
  return (
    <state.Consumer>
      {context => (
        <div className={context.isDark ? 'dark' : 'light'}>
          <div className={`font-display min-h-screen w-screen bg-light dark:bg-dark px-20 py-10`}>
            <Navigation />
            {children}
          </div>
        </div>
      )}
    </state.Consumer>
  )
}
