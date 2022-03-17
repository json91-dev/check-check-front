import { useContext } from 'react'
import { HelpModalContext } from './context'
import {HelpModalState} from "@query/queryInterface";

interface useHelpModalInterface {
  helpModalState: HelpModalState,
  setHelpModal: Function,
  openHelpModal: Function,
  closeHelpModal: Function
}

const useHelpModal = (): useHelpModalInterface => {
  const { state, dispatch }: any = useContext(HelpModalContext)

  const setHelpModal = (elementData: any) => {
    dispatch({
      type: 'SET_HELP',
      payload: {
        elementData,
      }
    })
  }

  const openHelpModal = () => {
    dispatch({
      type: 'OPEN_HELP',
    })
  };

  const closeHelpModal = () => {
    dispatch({
      type: 'CLOSE_HELP',
    })
  };

  return {
    helpModalState: state,
    setHelpModal,
    openHelpModal,
    closeHelpModal,
  }
}

export default useHelpModal
