import getShareImage from "@jlengstorf/get-share-image"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ title, description, image, article }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const socialImage = getShareImage({
    title: title || defaultTitle,
    tagline: description || defaultDescription,
    cloudName: "dpzpn0xkz",
    imagePublicID: "michael_mangialardi/social_card",
    titleFont: "futura",
    taglineFont: "futura",
    taglineTopOffset: 300,
    titleColor: "FDFCDC",
    taglineColor: "FDFCDC",
    titleExtraConfig: "_bold",
    titleBottomOffset: 399,
  })

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || socialImage || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang="en" />

      <script async src="https://cdn.splitbee.io/sb.js"></script>

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`
