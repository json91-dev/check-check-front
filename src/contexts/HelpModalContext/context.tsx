import React, { createContext, useReducer } from 'react'
import {HelpModalState, HelpTopicsInterface} from "@query/queryInterface";

const initialState = {
  isOpenModal: false,
}

const HelpModalContext = React.createContext<HelpModalState>(initialState)
const Provider: any = HelpModalContext.Provider

const reducer: any = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_HELP': {
      const { elementData } = payload;
      const { helpTitle, helpDescription, helpTopics } = elementData
      return {
        ...state,
        helpTitle,
        helpDescription,
        helpTopics,
      }
    }

    case 'OPEN_HELP': {
      return {
        ...state,
        isOpenModal: true,
      }
    }

    case 'CLOSE_HELP': {
      return {
        ...state,
        isOpenModal: false,
      }
    }

    default: {
      throw new Error()
    }
  }
}

const HelpModalProvider: any = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { HelpModalContext, HelpModalProvider }
