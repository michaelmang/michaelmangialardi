import Lakitu from "../images/lakitu_cta.svg"

function Em({ children }) {
  return (
    <em className="font-black text-background dark:text-background-light">
      {children}
    </em>
  )
}

export default function Cta({ className }) {
  return (
    <div className={`flex flex-row self-center my-16 bg-light dark:bg-dark shadow-2xl max-w-screen-sm min-h-64 w-full p-8 ${className}`}>
      <div className="flex flex-col text-justify w-full">
        <div className="text-background dark:text-background-light text-lg md:text-xl font-black">
          A Newsletter for Learning What I'm Learning
        </div>
        
        <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
          Learning web development opens up <Em>a world of opportunities</Em> to get creative and build something fun...but it can also be <Em>overwhelming</Em>.
        </p>

        <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
          I get it. <Em>I'm an impostor syndrome survivor</Em>.
        </p>

        <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
          That's why I like to <Em>write about what I'm learning as I'm learning</Em> so I can teach web technologies in a way that's understandable (and hopefully fun!). <Em>No pressure</Em> but if you'd like to learn what I'm learning, join my newsletter.
        </p>

        <div className="flex flex-row items-center mt-12 h-32 w-full py-1">
          <div className="flex flex-col mr-6 w-1/4">
            <label className="text-dark dark:text-light text-sm">First Name</label>
            <input className="text-dark dark:text-light bg-light border-dark dark:border-light border-b-2 dark:bg-dark outline-none bg-transparent" type="text" />
          </div>
          
          <div className="flex flex-col mr-6 w-1/4">
            <label className="text-dark dark:text-light text-sm">Email</label>
            <input className="text-dark dark:text-light bg-light border-dark dark:border-light border-b-2 dark:bg-dark outline-none bg-transparent" type="email" />
          </div>

          <Lakitu className="hover text-dark dark:text-light cursor-pointer -mt-12 h-full w-24 md:w-32" />
        </div>
      </div>
    </div>
  )
}
