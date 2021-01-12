import {
  faCodepen,
  faDribbble,
  faGithubAlt,
  faMedium,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { WindupChildren } from "windups"

import Boop from "../components/boop"
import ExternalLink from "../components/external-link"
import Heading from "../components/heading"
import Icon from "../components/icon"
import Layout from "../components/layout"
import Pill from "../components/pill"
import Posts from "../components/posts"
import ThemeToggle from "../components/theme-toggle"
import Pipe from "../images/pipe.svg"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="h-full w-full flex flex-col">
        <div className="relative flex flex-row shadow-2xl bg-gradient-to-r from-background to-background-light justify-around items-center px-10">
          <div className="h-full w-1/4">
            <Img fluid={data.portrait.childImageSharp.fluid} />
          </div>
          <div className="flex flex-col w-3/4 px-10">
            <WindupChildren>
              <h1 className="font-bold tracking-wide text-light text-2xl">
                Hi, I'm Michael Mangialardi 👋
              </h1>
              <h2 className="mt-8 text-3xl text-light font-black leading-10">
                I'm a <span className="text-cta">UI developer</span> at{" "}
                <ExternalLink to="https://www.rackspace.com/">
                  Rackspace Technology{" "}
                </ExternalLink>
                specializing in <span className="text-cta">React</span>,
                fluent across the{" "}
                <span className="text-cta">full stack</span>, and
                experienced in{" "}
                <span className="text-cta">UI/UX design</span>.
              </h2>
              <div className="flex flex-row mt-10">
                <ExternalLink to="https://github.com/michaelmang">
                  <Boop>
                    <Icon
                      className="text-2xl text-light mr-3"
                      icon={faGithubAlt}
                    />
                  </Boop>
                </ExternalLink>
                <ExternalLink to="https://codepen.io/mikemang">
                  <Boop>
                    <Icon
                      className="text-2xl text-light mr-3"
                      icon={faCodepen}
                    />
                  </Boop>
                </ExternalLink>
                <ExternalLink to="https://medium.com/@michaelmangial1">
                  <Boop>
                    <Icon
                      className="text-2xl text-light mr-3"
                      icon={faMedium}
                    />
                  </Boop>
                </ExternalLink>
                <ExternalLink to="https://dribbble.com/mikemang">
                  <Boop>
                    <Icon
                      className="text-2xl text-light mr-3"
                      icon={faDribbble}
                    />
                  </Boop>
                </ExternalLink>
                <ExternalLink to="https://www.youtube.com/channel/UCg9CbhSszDBIg-yxk-fSqhA/videos">
                  <Boop>
                    <Icon
                      className="text-2xl text-light mr-3"
                      icon={faYoutube}
                    />
                  </Boop>
                </ExternalLink>
              </div>
              <div className="flex flex-row mt-6">
                <Icon
                  className="text-2xl text-light mr-3"
                  icon={faMapMarkerAlt}
                />
                <div className="text-light text-lg">Blacksburg, Virginia</div>
              </div>
            </WindupChildren>
          </div>
          <div className="flex flex-col absolute -bottom-0 right-4 justify-end">
            <ThemeToggle />
            <Pipe className="h-24 w-auto" />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-col w-2/3">
            {["Professional Experience", "Side Projects"].map(heading => (
              <Posts
                key={heading}
                className="mb-6"
                heading={heading}
                posts={data.posts}
                subpath="/work"
              />
            ))}
          </div>
          <div className="flex flex-col w-1/3">
            <Heading>Technical Skills</Heading>
            <div className="flex flex-row flex-wrap">
              <Pill>UI Development</Pill>
              <Pill>Unit Testing</Pill>
              <Pill>End-to-End Testing</Pill>
              <Pill>AuthN & AuthZ</Pill>
              <Pill>Design Systems</Pill>
              <Pill>Animations</Pill>
              <Pill>CI/CD Engineering</Pill>
              <Pill>API Development</Pill>
              <Pill>Code Patterns</Pill>
              <Pill>Code Reviews</Pill>
              <Pill>Technical Writing</Pill>
              <Pill>Version Control</Pill>
              <Pill>UI/UX Design</Pill>
            </div>

            <Heading className="mt-6">Technologies</Heading>
            <div className="flex flex-row flex-wrap">
              <Pill>React</Pill>
              <Pill>Redux</Pill>
              <Pill>GraphQL</Pill>
              <Pill>Apollo Client</Pill>
              <Pill>Apollo Server</Pill>
              <Pill>Hasura</Pill>
              <Pill>Node</Pill>
              <Pill>Express</Pill>
              <Pill>Gatsby</Pill>
              <Pill>Jest</Pill>
              <Pill>Enzyme</Pill>
              <Pill>React Testing Library</Pill>
              <Pill>Puppeteer</Pill>
              <Pill>Babel</Pill>
              <Pill>Webpack</Pill>
              <Pill>PostgreSQL</Pill>
              <Pill>Elixir</Pill>
              <Pill>.NET Core</Pill>
              <Pill>Azure</Pill>
              <Pill>TeamCity</Pill>
              <Pill>Git</Pill>
            </div>

            <Heading className="mt-6">Professional Skills</Heading>
            <div className="flex flex-row flex-wrap">
              <Pill>Project Planning</Pill>
              <Pill>Agile Development</Pill>
              <Pill>Interview Paneling</Pill>
              <Pill>Employee Onboarding</Pill>
              <Pill>Tech Talks</Pill>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    portrait: file(relativePath: { eq: "portrait.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    posts: allGraphCmsPost(
      filter: { tags: { in: ["professional-experience", "side-projects"] } }
      sort: { order: ASC, fields: date }
    ) {
      edges {
        node {
          slug
          title
          content {
            html
          }
          subtitle
          tags
        }
      }
    }
  }
`
