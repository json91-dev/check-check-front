import { useContext } from 'react'
import { HelpModalContext } from './context'
import { HelpTopicsInterface } from "@utils/interfaces/userCheckList";

export interface HelpModalStateInterface {
  isOpenModal: boolean,
  helpTitle?: string,
  helpDescription?: string,
  helpTopics?: Array<HelpTopicsInterface>
}

interface useHelpModalInterface {
  helpModalState: HelpModalStateInterface,
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
