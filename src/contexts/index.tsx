import React from 'react'
import { CheckListStatusProvider } from './CheckListStatusContext/context'

const CustomContexts = ({ children }) => {
	return (
		<CheckListStatusProvider>
			{children}
		</CheckListStatusProvider>
	)
}

export default CustomContexts
