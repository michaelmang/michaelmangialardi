import Layout from "../components/layout"
import Loading from "../components/loading"
import SEO from "../components/seo"
import ThemeToggle from "../components/theme-toggle"

export default function Lost() {
  return (
    <Layout>
      <SEO title="Not Found" />
      <div className="flex flex-col h-full pt-20">
        <h1 className="text-3xl text-dark dark:text-light font-black leading-10">
          Whoops! This page doesn't exist or got burnt
        </h1>
        <div className="flex flex-row items-center mt-10">
          <Loading loop />
        </div>
      </div>
      <div className="fixed flex flex-col top-1/4 right-5 md:right-10">
        <ThemeToggle />
      </div>
    </Layout>
  )
}
