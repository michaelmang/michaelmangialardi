const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const blogPosts = await graphql(`
    query GetBlogPosts {
      allGraphCmsPost(filter: {tags: {in: ["blog"]}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  
  blogPosts.data.allGraphCmsPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}