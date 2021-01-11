import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function BlogPost({ data }) {
  const post = data.graphCmsPost;
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <h2>{post.subtitle}</h2>
        <h3>{post.excerpt}</h3>
        <h4>Author: {post.author.name}</h4>
        <h4>Written: {post.data}</h4>
        <h4>Last Updated: {post.updatedAt}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
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