import React, { createContext } from 'react'
export const storeContext = createContext()
const Context = (props) => {
  return (
    <storeContext.Provider>
      {props.children}
    </storeContext.Provider>
  )
}

export default Context