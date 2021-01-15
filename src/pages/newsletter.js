import Cta from "../components/cta"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeToggle from "../components/theme-toggle"

export default function Lost() {
  return (
    <Layout>
      <SEO title="Newsletter" />
      <div className="flex flex-col h-full pt-20">
        <h1 className="text-3xl text-dark dark:text-light font-black leading-10">
          Subscribe To My Newsletter
        </h1>
        <div className="flex flex-row items-start">
          <Cta className="shadow-none mt-4 pl-0" />
        </div>
      </div>
      <div className="fixed flex flex-col top-1/4 right-10">
        <ThemeToggle />
      </div>
    </Layout>
  )
}
