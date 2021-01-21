import kebabcase from "lodash.kebabcase"
import { Fragment } from "react"

import Heading from "./heading"
import Preview from "./preview"

export default function Posts({ className, heading, posts, subpath }) {
  return (
    <Fragment>
      <Heading className={className}>{heading}</Heading>
      {posts.edges
        .filter(({ node }) => node.tags.includes(kebabcase(heading)))
        .map(({ node }) => (
          <Preview
            key={node.slug}
            slug={`${subpath}/${node.slug}`}
            subtitle={node.subtitle}
            title={node.title}
          >
            <div class="excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </Preview>
        ))}
    </Fragment>
  )
}
