import { graphql } from "gatsby"
import "highlight.js/styles/dracula.css"
import hljs from "highlight.js"
import truncate from "lodash.truncate"
import startcase from "lodash.startcase"
import { Fragment, useEffect, useRef } from "react"

import Ad from "../components/ad"
import Bio from "../components/bio"
import ExternalLink from "../components/external-link"
import FireCta from "../components/fire-cta"
import Layout from "../components/layout"
import LikeButton from "../components/like-button"
import SEO from "../components/seo"
import ThemeToggle from "../components/theme-toggle"
import Luigi from "../images/luigi.svg"
import Mario from "../images/mario.svg"

function format(html) {
  const matchEmptyTags = /<\w*><\/\w*>/gm
  return html.replace(matchEmptyTags, "")
}

export default function BlogPost({ data }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef?.current) {
      const nodes = contentRef.current.querySelectorAll("pre")
      nodes.forEach(node => {
        hljs.highlightBlock(node)
      })
    }
  }, [contentRef])

  const author = data.graphCmsAuthor
  const post = data.graphCmsPost
  const site = data.site.siteMetadata

  const maxExcerptChars = 160
  const defaultExcerpt = post?.content?.text
    ? truncate(post.content.text.replace(/\\n/gm, " "), {
        length: maxExcerptChars,
      })
    : ""

  return (
    <Layout cta>
      <SEO description={post.seo.description} title={post.seo.title} />
      <div className="h-full w-full flex flex-col items-center pt-20">
        <h3 className="text-background-light dark:text-background text-xl text-center">
          {startcase(post.tags.find(tag => tag !== "blog").toLowerCase())}
        </h3>
        <h1 className="my-6 text-4xl text-dark dark:text-light font-black leading-10 max-w-screen-sm text-center">
          {post.title}
        </h1>
        <h2 className="mb-8 text-3xl font-bold leading-10 text-dark dark:text-light opacity-75 max-w-screen-sm text-center">
          {post.subtitle}
        </h2>
        <h5 className="mb-10 md:mb-20 text-dark dark:text-light opacity-75 font-bold text-xs tracking-wider max-w-screen-sm text-center">
          Last Updated: {post.date}
        </h5>
        <main
          className="w-full max-w-screen-sm"
          dangerouslySetInnerHTML={{
            __html: format(post.html || post.content.html),
          }}
          ref={contentRef}
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        {post.tags.includes("blog") && (
          <Fragment>
            <FireCta>
              <ExternalLink
                className="mx-1 md:mx-4 text-cta font-bold text-xs md:text-lg tracking-wider text-center"
                to={
                  "https://mobile.twitter.com/search?q=" +
                  encodeURIComponent(`${site.url.replace(/https:\/\/www./gm, "")}/blog/${post.slug}`)
                }
              >
                Discuss On Twitter
              </ExternalLink>
            </FireCta>
            <FireCta character={Mario}>
              <ExternalLink
                className="mx-1 md:mx-4 text-cta font-bold text-xs md:text-lg tracking-wider text-center"
                to={
                  "https://twitter.com/intent/tweet?url=" +
                  encodeURIComponent(`${site.url}/blog/${post.slug} \n\n`) +
                  "&via=michaelmangial1" +
                  "&text=" +
                  encodeURIComponent(
                    `${post.title} by ${author.name} \n\n ${
                      post.excerpt || defaultExcerpt
                    } \n\n`
                  )
                }
              >
                Share On Twitter
              </ExternalLink>
            </FireCta>
            <FireCta character={Luigi}>
              <ExternalLink
                className="mx-1 md:mx-4 text-cta font-bold text-xs md:text-lg tracking-wider text-center"
                to={
                  "https://www.facebook.com/sharer/sharer.php?u=" +
                  encodeURIComponent(`${site.url}/blog/${post.slug}`)
                }
              >
                Share On Facebook
              </ExternalLink>
            </FireCta>
            <Ad fluid={data.ebookCover.childImageSharp.fluid} />
            <hr className="border-background dark:border-background-light border-t-2 w-full max-w-screen-lg my-6" />
            <Bio
              className="max-w-screen-lg mt-3"
              fluid={data.avatar.childImageSharp.fluid}
              name={author.name}
            >
              {author.biography}
            </Bio>
          </Fragment>
        )}
      </div>
      <div className="fixed flex flex-col top-1/4 right-5 md:right-10">
        <ThemeToggle />
        <LikeButton slug={post.slug} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    graphCmsPost(slug: { eq: $slug }) {
      content {
        html
        text
      }
      html
      date
      id
      updatedAt
      slug
      title
      tags
      subtitle
      seo {
        keywords
        description
        title
      }
    }
    graphCmsAuthor(name: { eq: "Michael Mangialardi" }) {
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
    ebookCover: file(relativePath: { eq: "ebook-cover.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        url
      }
    }
  }
`
