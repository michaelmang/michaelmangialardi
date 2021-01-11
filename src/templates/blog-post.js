import { graphql } from "gatsby"
import 'highlight.js/styles/dracula.css'
import hljs from 'highlight.js'
import startcase from "lodash.startcase"
import { useEffect, useRef } from "react";
import reactElementToJSXString from 'react-element-to-jsx-string';

import Layout from "../components/layout"
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
  
  const post = data.graphCmsPost

  return (
    <Layout>
      <div className="h-full w-full flex flex-col items-center pt-20">
        <h3 className="text-background-light dark:text-background text-xl">{startcase(post.tags.find(tag => tag !== "blog").toLowerCase())}</h3>
        <h1 className="my-6 text-4xl text-dark dark:text-light font-black leading-10">
          {post.title}
        </h1>
        <h2 className="mb-20 text-3xl font-bold leading-10 text-dark dark:text-light opacity-75">
          {post.subtitle}
        </h2>
        <main className="max-w-screen-sm" dangerouslySetInnerHTML={{ __html: format(post.content.html) }} ref={contentRef} />
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
      author {
        name
      }
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
  }
`