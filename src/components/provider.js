import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client"
import fetch from "cross-fetch"
import { createContext, useState } from "react"

const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: process.env.APOLLO_CLIENT_URI,
  }),
  cache: new InMemoryCache()
})

export const state = createContext()

function Provider(props) {
  const [isDark, setTheme] = useState(false)

  return (
    <state.Provider
      value={{
        isDark,
        changeTheme: () => setTheme(!isDark),
      }}
    >
      {props.children}
    </state.Provider>
  )
}

export default ({ element }) => (
  <ApolloProvider client={client}>
    <Provider>{element}</Provider>
  </ApolloProvider>
)
