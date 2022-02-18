import React, { createContext, useReducer } from 'react'

const initialState = {
	data: [],
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
