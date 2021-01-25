const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const blogPosts = await graphql(`
    query GetBlogPosts {
      allGraphCmsPost(filter: {tags: {in: ["blog"]}}, sort: {fields: createdAt, order: DESC}) {
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

  const workPosts = await graphql(`
    query GetWorkPosts {
      allGraphCmsPost(
        filter: { tags: { in: ["side-projects", "professional-experience"] } }
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  workPosts.data.allGraphCmsPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: `work/${node.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
