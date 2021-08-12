import Navigation from "./navigation"
import Footer from "./footer"
import { state } from "./provider"

export default function Layout({ children, cta = false }) {
  return (
    <state.Consumer>
      {context => (
        <div className={context.isDark ? "dark" : "light"}>
          {cta && (
            <a
              className="flex justify-center p-4 h-30 w-full bg-gradient-to-r from-cta via-background to-background-light text-light text-base md:text-lg"
              href="https://leanpub.com/designsystemsfordevelopers"
              data-splitbee-event="Visit ebook landing page"
            >
              <span className="mr-2">✨</span>Learn how to build a Shopify-like design system in my book
              &nbsp;<em className="italic">Design Systems for Developers</em>&nbsp;
              <span className="ml-2">✨</span>
            </a>
          )}
          <div
            className={`font-display min-h-screen w-screen bg-light dark:bg-dark px-8 py-5 md:px-20 md:py-10`}
          >
            <Navigation />
            <div
              className="h-full flex flex-col justify-between"
              style={{ minHeight: `calc(100vh - 140px)` }}
            >
              {children}
              <Footer />
            </div>
          </div>
        </div>
      )}
    </state.Consumer>
  )
}
