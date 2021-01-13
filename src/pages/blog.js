import { graphql } from "gatsby"
import startcase from "lodash.startcase"
import { useState } from "react"

import Layout from "../components/layout"
import Pill from "../components/pill"
import Preview from "../components/preview"
import SEO from "../components/seo"
import ThemeToggle from "../components/theme-toggle"

function uniq(list) {
  return [...new Set(list)]
}

export default function Blog({ data }) {
  const categories = uniq(data.allGraphCmsPost.edges.flatMap(({ node }) => (
    node.tags.filter(tag => tag !== "blog")
  )))

  const [filter, setFilter] = useState("all")

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="h-full w-full flex flex-col">
        {!!categories.length && (
          <div className="flex flex-col my-6">
            <h2 className="mb-3 text-xl md:text-3xl text-dark dark:text-light font-black leading-10">
              Categories
            </h2>
            <div className="flex flex-row items-center">
              {["all", ...categories].map(category => (
                <Pill
                  key={category}
                  className={`${filter === category ? "bg-cta" : ""} hover:bg-cta cursor-pointer`}
                  onClick={() => setFilter(category)}
                >
                  {startcase(category.toUpperCase())}
                </Pill>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-row my-6">
          <h1 className="text-xl md:text-3xl text-dark dark:text-light font-black leading-10">
            {startcase(filter.toLowerCase())} Posts
          </h1>
        </div>
        <div className="flex flex-row flex-wrap w-full">
          {data.allGraphCmsPost.edges.filter(({ node }) => filter === "all" || node.tags.includes(filter)).map(({ node }) => (
            <Preview
              key={node.title}
              className="text-light min-w-64 w-80 p-8 rounded-lg shadow-xl border-background-light border-4 mr-6"
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
