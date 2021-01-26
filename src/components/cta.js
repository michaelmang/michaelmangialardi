import { gql, useMutation } from "@apollo/client"
import { Fragment, useState } from "react"
import { useToggle, useMount } from "react-use"

import Lakitu from "../images/lakitu_cta.svg"
import LakituThanks from "../images/lakitu_cta_thanks.svg"

const STORAGE_KEY = "michaelmangialardi-newsletter"

const UPSERT_EMAIL = gql`
  mutation($email: String!, $first_name: String = "") {
    insert_emails_one(
      object: { email: $email, first_name: $first_name }
      on_conflict: { constraint: emails_pkey, update_columns: [email] }
    ) {
      email
      first_name
    }
  }
`

function getStorageItem() {
  JSON.parse(window?.localStorage?.getItem(STORAGE_KEY))
}

function normalize(e) {
  return e.target.value
}

function validate(email) {
  const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return valid.test(String(email).toLowerCase())
}

function Em({ children }) {
  return (
    <em className="font-black text-background dark:text-background-light">
      {children}
    </em>
  )
}

function Error({ children }) {
  return <div className="text-cta py-1 text-left text-xs">{children}</div>
}

export default function Cta({ className }) {
  const [firstName, setFirstName] = useState("")
  const [isNameFocused, toggleNameFocused] = useToggle()
  const [badName, setBadName] = useState("")

  const [email, setEmail] = useState("")
  const [isEmailFocused, toggleEmailFocused] = useToggle()
  const [missingEmail, setMissingEmail] = useState("")
  const [badEmail, setBadEmail] = useState("")

  const [upsertEmail, { data, loading }] = useMutation(UPSERT_EMAIL)

  function updateEmail(e) {
    if (missingEmail) {
      setMissingEmail("")
    }

    if (badEmail) {
      setBadEmail("")
    }

    setEmail(normalize(e))
  }

  function updateFirstName(e) {
    if (badName) {
      setBadName("")
    }

    setFirstName(normalize(e))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (validate(firstName)) {
      return setBadName("Please enter a valid first name.")
    }

    if (!email) {
      return setMissingEmail("Please enter your email.")
    }

    if (!validate(email)) {
      return setBadEmail("Please enter a valid email.")
    }

    upsertEmail({
      variables: {
        email,
        first_name: firstName,
      },
    })

    window?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(true));
  }

  const [hasSubscribed, setSubscribed] = useState(undefined)

  useMount(() => setSubscribed(getStorageItem()))

  const hasSubmitted = loading || data || hasSubscribed

  return (
    <div
      className={`flex flex-row self-center my-16 bg-light dark:bg-dark shadow-2xl max-w-screen-sm min-h-64 w-full p-8 ${className}`}
    >
      <form
        className="flex flex-col text-left md:text-justify w-full"
        onSubmit={handleSubmit}
      >
        <div className="text-background dark:text-background-light text-lg md:text-xl font-black">
          {hasSubmitted
            ? "Thanks for Subscribing"
            : "A Newsletter for Learning What I'm Learning"}
        </div>

        <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
          I'll send you an email shortly to say hey and so you can{" "}
          <Em>confirm your email</Em>.
        </p>

        {!hasSubmitted && (
          <Fragment>
            <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
              Learning web development opens up{" "}
              <Em>a world of opportunities</Em> to get creative and build
              something fun...but it can also be <Em>overwhelming</Em>.
            </p>

            <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
              I get it. <Em>I'm an impostor syndrome survivor</Em>.
            </p>

            <p className="mt-6 text-dark dark:text-light text-sm md:text-base font-black">
              That's why I like to{" "}
              <Em>write about what I'm learning as I'm learning</Em> so I can
              teach web technologies in a way that's understandable (and
              hopefully fun!). <Em>No pressure</Em> but if you'd like to learn
              what I'm learning, join my newsletter.
            </p>

            <div className="flex flex-row md:items-center mt-6 md:mt-12 h-32 w-full py-1">
              <div className="flex flex-col mr-6 w-1/4">
                <label
                  aria-label="First Name"
                  className={`text-sm ${
                    badName
                      ? "text-cta"
                      : isNameFocused
                      ? "text-background dark:text-background-light mb-2"
                      : "text-dark dark:text-light"
                  }`}
                >
                  Name
                </label>
                <input
                  aria-labelledby="First Name"
                  className={`text-dark dark:text-light bg-light border-b-2 dark:bg-dark outline-none bg-transparent ${
                    badName
                      ? "border-cta"
                      : isNameFocused
                      ? "border-background dark:border-background-light"
                      : "border-dark dark:border-light"
                  }`}
                  onBlur={toggleNameFocused}
                  onChange={updateFirstName}
                  onFocus={toggleNameFocused}
                  type="text"
                  value={firstName}
                />
                {!!badName && <Error>{badName}</Error>}
              </div>

              <div className="flex flex-col mr-6 w-1/4">
                <label
                  aria-label="Email"
                  className={`text-sm ${
                    missingEmail || badEmail
                      ? "text-cta"
                      : isEmailFocused
                      ? "text-background dark:text-background-light mb-2"
                      : "text-dark dark:text-light"
                  }`}
                >
                  Email
                </label>
                <input
                  aria-labelledby="Email"
                  className={`text-dark dark:text-light bg-light border-b-2 dark:bg-dark outline-none bg-transparent ${
                    missingEmail || badEmail
                      ? "border-cta"
                      : isEmailFocused
                      ? "border-background dark:border-background-light"
                      : "border-dark dark:border-light"
                  }`}
                  onBlur={toggleEmailFocused}
                  onChange={updateEmail}
                  onFocus={toggleEmailFocused}
                  type="email"
                  value={email}
                />
                {!!missingEmail && <Error>{missingEmail}</Error>}
                {!!badEmail && <Error>{badEmail}</Error>}
              </div>

              <button
                className="h-full w-24 md:w-32 focus:outline-none active:outline-none"
                type="submit"
              >
                <Lakitu className="float text-dark dark:text-light cursor-pointer -mt-16 md:-mt-12 h-full w-full" />
              </button>
            </div>
          </Fragment>
        )}

        {hasSubmitted && (
          <LakituThanks className="float mt-8 text-dark dark:text-light h-full w-24 md:w-32" />
        )}
      </form>
    </div>
  )
}
