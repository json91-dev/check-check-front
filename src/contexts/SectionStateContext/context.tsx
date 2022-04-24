import React, { createContext, useReducer } from 'react'

const initialState = {
  sectionStates: []
}
const SectionStateContext = React.createContext(initialState)
const Provider: any = SectionStateContext.Provider

const reducer: any = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_SECTION_STATES': {
      return {
        ...state,
        sectionStates: payload.sectionStates,
      }
    }

    case 'SET_SECTION_STATE': {
      const {sectionState, sectionIndex} = payload
      const updatedSectionStates = [...state.sectionStates];
      updatedSectionStates[sectionIndex] = sectionState;

      return {
        ...state,
        sectionStates: updatedSectionStates,
      }
    }

    default: {
      throw new Error()
    }
  }
}

const SectionStateProvider: any = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { SectionStateContext, SectionStateProvider }
