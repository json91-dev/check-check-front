import { useContext } from 'react'
import { SectionStateContext } from './context'

const useSectionState = () => {
  const { state, dispatch }: any = useContext(SectionStateContext)
  console.log(state)

  const setSectionStates = (sectionStates: []) => {
    dispatch({
      type: 'SET_SECTION_STATES',
      payload: {
        sectionStates,
      },
    })
  }

  const setSectionState = (sectionState: string, sectionIndex: number) => {
    dispatch({
      type: 'SET_SECTION_STATE',
      payload: {
        sectionState,
        sectionIndex
      },
    })
  }

  return {
    sectionStates: state.sectionStates,
    setSectionState,
    setSectionStates
  }
}

export default useSectionState
