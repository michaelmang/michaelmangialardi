import { graphql } from "gatsby"
import { WindupChildren } from "windups"

import Layout from "../components/layout"
import Preview from "../components/preview"
import ThemeToggle from "../components/theme-toggle"

export default function Blog({ data }) {
  return (
    <Layout>
      <div className="h-full w-full flex flex-col">
        <WindupChildren>
          <h1 className="mt-8 text-3xl text-dark dark:text-light font-black leading-10">
            Posts
          </h1>
        </WindupChildren>
        <div className="flex flex-row flex-wrap justify-between w-full mt-6">
          {data.allGraphCmsPost.edges.map(({ node }) => (
            <Preview
              key={node.title}
              className="text-light w-1/3 p-8 rounded-lg shadow-xl border-background border-4"
              slug={node.slug}
              subtitle={node.subtitle}
              title={node.title}
            >
              {node.excerpt}
            </Preview>
          ))}
        </div>
      </div>
      <div className="fixed flex flex-col top-1/4 right-10">
        <ThemeToggle />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allGraphCmsPost(filter: {tags: {in: ["blog"]}}, sort: {order: ASC, fields: date}) {
      edges {
        node {
          slug
          title
          tags
          subtitle
          excerpt
        }
      }
    }
  }
`
