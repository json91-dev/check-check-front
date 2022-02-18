import { useContext } from 'react'
import { CheckListStatusProvider } from './context'

const useCheckListStatus = () => {
	const { state, dispatch } = useContext(CheckListStatusProvider)

	const setData = array => {
		dispatch({
			type: 'SET_DATA',
			payload: array,
		})
	}

	return {
		measurements: state,
		setData,
	}
}

export default useCheckListStatus
