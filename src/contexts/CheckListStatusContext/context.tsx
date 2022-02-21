import React, { createContext, useReducer } from 'react'

const initialState = {
	checkListClicked: [{
		title:'전세 계약',
		sections: {
			["필요서류 준비하기"]: false,

		}

	}],
}
const CheckListStatusContext = createContext(initialState)
const { Provider } = CheckListStatusContext

const reducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'SET_DATA': {
			return { ...state, data: payload }
		}

		default: {
			throw new Error()
		}
	}
}

const CheckListStatusProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { CheckListStatusContext, CheckListStatusProvider }
