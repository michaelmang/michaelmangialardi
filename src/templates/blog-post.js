import { graphql } from "gatsby"
import 'highlight.js/styles/dracula.css'
import hljs from 'highlight.js'
import startcase from "lodash.startcase"
import { Fragment, useEffect, useRef } from "react";
import reactElementToJSXString from 'react-element-to-jsx-string';
import { useToggle } from "react-use";

import Bio from "../components/bio"
import ExternalLink from "../components/external-link"
import Layout from "../components/layout"
import Loading from "../components/loading"
import ThemeToggle from "../components/theme-toggle"

function format(defaultHtml) {
  let html = defaultHtml

  const matchInlineCode = /`<*\w+ *\/*>*`/gm
  const inlineCode = html.match(matchInlineCode)
  
  if (inlineCode) {
    const innerInlineCode = inlineCode[0].replace(/`/gm, "")
    const transformedInlineCode = reactElementToJSXString(
      <code class="inline-code inline-flex">{innerInlineCode}</code>
    )
    html = html.replace(matchInlineCode, transformedInlineCode)
  }

  const matchCode = /<code>(.|\n)*?<\/code>/gm
  const matchCodeTag = /<\/*code>/gm
  const code = html.match(matchCode)

  if (code) {
    const innerCode = code[0].replace(matchCodeTag, "")
    const transformedCode = reactElementToJSXString(
      <pre class="rounded-lg">
        <code>{innerCode}</code>
      </pre>
    )
    html = html.replace(matchCode, transformedCode)
  }

  return html
}

export default function BlogPost({ data }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef) {
      const nodes = contentRef.current.querySelectorAll('pre')
      nodes.forEach((node) => {
        hljs.highlightBlock(node);
      })
    }
  }, [contentRef])
  
  const author = data.graphCmsAuthor
  const post = data.graphCmsPost

  const [isDiscussHovered, toggleDiscussHovered] = useToggle(false)

  return (
    <Layout>
      <div className="h-full w-full flex flex-col items-center pt-20">
        <h3 className="text-background-light dark:text-background text-xl">{startcase(post.tags.find(tag => tag !== "blog").toLowerCase())}</h3>
        <h1 className="my-6 text-4xl text-dark dark:text-light font-black leading-10">
          {post.title}
        </h1>
        <h2 className="mb-8 text-3xl font-bold leading-10 text-dark dark:text-light opacity-75">
          {post.subtitle}
        </h2>
        <h5 className="mb-10 md:mb-20 text-dark dark:text-light opacity-75 font-bold text-xs tracking-wider">
          Last Updated: {post.date}
        </h5>
        <main className="max-w-screen-sm" dangerouslySetInnerHTML={{ __html: format(post.content.html) }} ref={contentRef} />
      </div>
      <div className="flex flex-col items-center mt-10">
        {post.tags.includes("blog") && (
          <Fragment>
            <div className="flex flex-row items-center">
              <Loading loop={isDiscussHovered} scale={1/8} />
              <ExternalLink
                className="mx-4 text-cta font-bold text-xs md:text-lg tracking-wider"
                onMouseEnter={() => {
                  toggleDiscussHovered()
                }}
                onMouseLeave={() => {
                  toggleDiscussHovered()
                }}
                to={"https://mobile.twitter.com/search?q=" + encodeURIComponent(`${window.location.origin}/blog/${post.slug}`)}
              >
                Discuss On Twitter
              </ExternalLink>
              <Loading loop={isDiscussHovered} scale={1/8} reverse />
            </div>
            <hr className="border-accent dark:border-background border-t-2 w-full max-w-screen-lg my-6" />
            <Bio className="max-w-screen-lg mt-3" fluid={data.avatar.childImageSharp.fluid} name={author.name}>{author.biography}</Bio>
          </Fragment>
        )}
      </div>
      <div className="fixed flex flex-col top-1/4 right-10">
        <ThemeToggle />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    graphCmsPost(slug: { eq: $slug }) {
      content {
        html
      }
      date
      id
      updatedAt
      slug
      title
      tags
      subtitle
      excerpt
    }
    graphCmsAuthor(name: {eq: "Michael Mangialardi"}) {
      biography
      name
    }
    avatar: file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`