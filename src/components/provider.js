import { createContext, useState } from 'react';

export const state = createContext();

function Provider(props) {
  const [isDark, setTheme] = useState(false);

  return (
    <state.Provider value={{
      isDark,
      changeTheme: () => setTheme(!isDark)
    }}>
      {props.children}
    </state.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)