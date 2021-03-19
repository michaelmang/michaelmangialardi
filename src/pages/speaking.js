import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeToggle from "../components/theme-toggle"

export default function Lost() {
  return (
    <Layout>
      <SEO title="Speaking" />
      <div className="flex flex-col h-full pt-20 max-w-screen-sm">
        <h1 className="text-3xl text-dark dark:text-light font-black leading-10">
          Speaking
        </h1>
        <p className="mt-4">
          If you would like to have me speak at a conference, company tech talk, tech meetup, or a private workshop, please get in touch with me at <a className="text-cta font-bold text-sm md:text-lg tracking-wider" href="mailto:me@michaelmang.dev">me@michaelmang.dev</a>.
        </p>
        <p className="mt-4">
          I like to talk about JavaScript, React, CSS, Node, GraphQL, design tokens, professional skills, and related topics.

          I have a unique passion to make technical concepts easy to understand, teaching them in fun ways.
        </p>
        <p className="mt-4">
          I have given talks at my company, local meetups, and CodePen Dayton. <a className="text-cta font-bold text-sm md:text-lg tracking-wider" href="https://blog.codepen.io/2017/06/06/133-mike-mangialardi/" target="_blank" rel="noopener noreferrer">I have also appeared on the CodePen Radio podcast</a>. I would love to grow the list.
        </p>
      </div>
      <div className="fixed flex flex-col top-1/4 right-5 md:right-10">
        <ThemeToggle />
      </div>
    </Layout>
  )
}