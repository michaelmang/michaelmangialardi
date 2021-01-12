import Navigation from "./navigation"

import Footer from './footer'
import { state } from './provider'

export default function Layout({ children }) {
  return (
    <state.Consumer>
      {context => (
        <div className={context.isDark ? 'dark' : 'light'}>
          <div className={`font-display min-h-screen w-screen bg-light dark:bg-dark px-10 py-5 md:px-20 md:py-10`}>
            <Navigation />
            <div className="h-full flex flex-col justify-between" style={{ minHeight: `calc(100vh - 140px)` }}>
              {children}
              <Footer />
            </div>
          </div>
        </div>
      )}
    </state.Consumer>
  )
}
