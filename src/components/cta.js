import { Fragment } from "react"

import Lakitu from "../images/lakitu_cta_cheers.svg"

export default function Cta({ className }) {
  return (
    <div
      className={`flex flex-row self-center my-16 bg-light dark:bg-dark shadow-2xl max-w-screen-sm min-h-64 w-full p-8 ${className}`}
    >
      <form className="flex flex-col justify-center w-full">
        <div className="text-background dark:text-background-light text-lg md:text-xl font-black">
          Design Systems for Developers
        </div>

        <Fragment>
          <p className="mt-2 text-dark dark:text-light text-sm md:text-base font-black">
            An ebook that teaches you how to code design systems that scale in just 12 chapters.
          </p>

          <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
            <em className="text-background">Design Systems for Developers</em> gives you the skill-set to be able to build and maintain a robust design system that scales. After researching design tokens for months and collaborating with other designers and developers, I've decided to record my learnings. I'll cover how to use <em className="text-background">design tokens</em> and a <em className="text-background">style dictionary</em> so that you can build a design system on a firm foundation.
          </p>
          
          <a className="mt-6 underline text-cta" href="https://leanpub.com/designsystemsfordevelopers">Learn how to code a design system in 12 chapters</a>
          
          <a
            className="h-full w-24 md:w-32 focus:outline-none active:outline-none"
            href="https://leanpub.com/designsystemsfordevelopers"
          >
            <Lakitu className="float text-dark dark:text-light cursor-pointer mt-8 h-full w-full" />
          </a>
        </Fragment>
      </form>
    </div>
  )
}
