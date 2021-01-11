import Layout from "../components/layout"
import ThemeToggle from "../components/theme-toggle"

export default function Lost() {
  return (
    <Layout>
      <div className="flex flex-col h-full pt-20">
        <h1 className="text-3xl text-dark dark:text-light font-black leading-10">
          Whoops! This page doesn't exist
        </h1>
      </div>
      <div className="fixed flex flex-col top-1/4 right-10">
        <ThemeToggle />
      </div>
    </Layout>
  )
}