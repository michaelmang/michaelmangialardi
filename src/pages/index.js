import { faCodepen, faDribbble, faGithubAlt, faMedium } from "@fortawesome/free-brands-svg-icons";
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { WindupChildren } from 'windups';

import Boop from "../components/boop";
import ExternalLink from "../components/external-link";
import Heading from "../components/heading";
import Icon from "../components/icon";
import Layout from "../components/layout";
import Pill from "../components/pill";
import Preview from "../components/preview";

export default function Home({ data }) {
  return (
    <Layout>
        <div className="h-full w-full flex flex-col">
          <div className="flex flex-row shadow-2xl bg-gradient-to-r from-background to-background-light justify-around items-center overflow-hidden px-10">
            <div className="h-full w-1/4">
              <Img fluid={data.portrait.childImageSharp.fluid} />
            </div>
            <div className="flex flex-col w-2/3 px-4">
              <WindupChildren>
                <h1 className="font-bold tracking-wide text-light text-2xl">
                  Hi, I'm Michael Mangialardi 👋
                </h1>
                <h2 className="mt-8 text-3xl text-light font-black leading-10">
                  I'm a <span className="text-cta">UI developer</span> at <a className="text-accent" href="https://www.rackspace.com/" target="_blank" rel="noopener noreferrer">Rackspace Technology</a>{' '}
                  specializing in <span className="text-cta">React</span> and fluent in <span className="text-cta">UI/UX design</span>.
                </h2>
                <div className="flex flex-row mt-10">
                    <ExternalLink to="https://github.com/michaelmang">
                      <Boop>
                        <Icon className="text-2xl text-light mr-3" icon={faGithubAlt} />
                      </Boop>
                    </ExternalLink>
                    <ExternalLink to="https://codepen.io/mikemang">
                      <Boop>
                        <Icon className="text-2xl text-light mr-3" icon={faCodepen} />
                      </Boop>
                    </ExternalLink>
                    <ExternalLink to="https://medium.com/@michaelmangial1">
                      <Boop>
                        <Icon className="text-2xl text-light mr-3" icon={faMedium} />
                      </Boop>
                    </ExternalLink>
                    <ExternalLink to="https://dribbble.com/mikemang">
                      <Boop>
                        <Icon className="text-2xl text-light mr-3" icon={faDribbble} />
                      </Boop>
                    </ExternalLink>
                </div>
              </WindupChildren>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-16">
            <div className="flex flex-col w-2/3">
              <Heading>Professional Experience</Heading>
              <Preview subtitle="October 2016 - Present" title="Rackspace Technology">
                <p>I develop the UI for the Microsoft 365 admin portal for Rackspace Technology.</p>
                <p className="my-4">My day-to-day consists of developing product features, writing code reviews, working with API developers to create contracts and develop mock APIs, and working closely with a product team and UX designer to the designs and scope for our project roadmap.</p>
                <p>Additionally, I lead three other frontend developers taking ownership of planning projects, progressing towards an architectural vision, establishing code patterns, engineering our deployment pipeline, and documenting along the way.</p>
              </Preview>
              
              <Heading className="mt-6">Side Projects</Heading>
              <Preview subtitle="October 2016 - Present" title="Rackspace Technology">
                <p>I develop the UI for the Microsoft 365 admin portal for Rackspace Technology.</p>
                <p className="my-4">My day-to-day consists of developing product features, writing code reviews, working with API developers to create contracts and develop mock APIs, and working closely with a product team and UX designer to the designs and scope for our project roadmap.</p>
                <p>Additionally, I lead three other frontend developers taking ownership of planning projects, progressing towards an architectural vision, establishing code patterns, engineering our deployment pipeline, and documenting along the way.</p>
              </Preview>
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
              </div>

              <Heading className="mt-6">Technologies</Heading>
              <div className="flex flex-row flex-wrap">
                <Pill>React</Pill>
                <Pill>Redux</Pill>
                <Pill>GraphQL</Pill>
                <Pill>Apollo</Pill>
                <Pill>Hasura</Pill>
                <Pill>Express</Pill>
                <Pill>Gatsby</Pill>
                <Pill>Jest</Pill>
                <Pill>Puppeteer</Pill>
                <Pill>.NET Core</Pill>
                <Pill>Azure</Pill>
                <Pill>TeamCity</Pill>
                <Pill>Git</Pill>
              </div>
              
              <Heading className="mt-6">Professional Skills</Heading>
              <div className="flex flex-row flex-wrap">
                <Pill>UI/UX Design</Pill>
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
  }
` 