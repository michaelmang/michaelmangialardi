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
import { Pace, WindupChildren } from "windups"

import Boop from "../components/boop"
import ExternalLink from "../components/external-link"
import Heading from "../components/heading"
import Icon from "../components/icon"
import Layout from "../components/layout"
import Pill from "../components/pill"
import Pipe from "../images/pipe.svg"
import Posts from "../components/posts"
import SEO from "../components/seo"
import ThemeToggle from "../components/theme-toggle"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="h-full w-full flex flex-col">
        <div className="relative rounded-sm flex flex-row shadow-2xl bg-gradient-to-r from-background to-background-light justify-around items-center px-4 py-6 md:px-10 md:py-0">
          <div className="h-full hidden md:w-1/4 md:block">
            <Img fluid={data.portrait.childImageSharp.fluid} />
          </div>
          <div className="flex flex-col w-full md:w-3/4 px-4 md:px-10">
            <h1 className="font-bold tracking-wide text-light text-lg md:text-2xl">
              Hi, I'm Michael Mangialardi 👋
            </h1>
            <h2 className="mt-4 md:mt-8 text-xl md:text-3xl text-light font-black leading-8 md:leading-10">
              I'm a{" "}
              <WindupChildren>
                <Pace ms={125}>
                  <span className="text-cta">UI developer</span>
                </Pace>
              </WindupChildren>{" "}
              at{" "}
              <ExternalLink to="https://www.rackspace.com/">
                Rackspace Technology{" "}
              </ExternalLink>
              specializing in{" "}
              <WindupChildren>
                <Pace ms={125}>
                  <span className="text-cta">React</span>
                </Pace>
              </WindupChildren>
              , fluent across the{" "}
              <WindupChildren>
                <Pace ms={125}>
                  <span className="text-cta">full stack</span>
                </Pace>
              </WindupChildren>
              , and experienced in{" "}
              <WindupChildren>
                <Pace ms={125}>
                  <span className="text-cta">UI/UX design</span>
                </Pace>
              </WindupChildren>
              .
            </h2>
            <div className="flex flex-row mt-6 md:mt-10">
              <ExternalLink aria-label="Github" to="https://github.com/michaelmang">
                <Boop>
                  <Icon
                    className="md:text-2xl text-xl text-light mr-3"
                    icon={faGithubAlt}
                  />
                </Boop>
              </ExternalLink>
              <ExternalLink aria-label="Codepen" to="https://codepen.io/mikemang">
                <Boop>
                  <Icon
                    className="md:text-2xl text-xl text-light mr-3"
                    icon={faCodepen}
                  />
                </Boop>
              </ExternalLink>
              <ExternalLink aria-label="Medium" to="https://michaelmangial1.medium.com/">
                <Boop>
                  <Icon
                    className="md:text-2xl text-xl text-light mr-3"
                    icon={faMedium}
                  />
                </Boop>
              </ExternalLink>
              <ExternalLink aria-label="Dribbble" to="https://dribbble.com/mikemang">
                <Boop>
                  <Icon
                    className="md:text-2xl text-xl text-light mr-3"
                    icon={faDribbble}
                  />
                </Boop>
              </ExternalLink>
              <ExternalLink aria-label="YouTube" to="https://www.youtube.com/channel/UCg9CbhSszDBIg-yxk-fSqhA/videos">
                <Boop>
                  <Icon
                    className="md:text-2xl text-xl text-light mr-3"
                    icon={faYoutube}
                  />
                </Boop>
              </ExternalLink>
            </div>
            <div className="flex flex-row mt-3 md:mt-6">
              <Icon
                className="md:text-2xl text-xl text-light mr-3"
                icon={faMapMarkerAlt}
              />
              <div className="text-light text-sm md:text-lg">
                Blacksburg, Virginia
              </div>
            </div>
          </div>
          <div className="flex flex-col absolute -bottom-0 right-4 justify-end">
            <ThemeToggle />
            <Pipe className="h-12 md:h-24 w-auto" />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-16">
          <div className="flex flex-col w-3/5 max-w-screen-sm">
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
              <Pill>Serverless</Pill>
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
              <Pill>CSS</Pill>
              <Pill>Tailwind</Pill>
              <Pill>Jest</Pill>
              <Pill>Enzyme</Pill>
              <Pill>React Testing Library</Pill>
              <Pill>Cypress</Pill>
              <Pill>Puppeteer</Pill>
              <Pill>Babel</Pill>
              <Pill>Webpack</Pill>
              <Pill>PostgreSQL</Pill>
              <Pill>Elixir</Pill>
              <Pill>.NET Core</Pill>
              <Pill>Azure</Pill>
              <Pill>Service Bus</Pill>
              <Pill>Netlify</Pill>
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
          excerpt
          slug
          title
          content {
            html
            text
          }
          subtitle
          tags
        }
      }
    }
  }
`
