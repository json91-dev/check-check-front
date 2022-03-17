import React from 'react'
import { CheckListStatusProvider } from './CheckListStatusContext/context'
import { HelpModalProvider } from './HelpModalContext/context'

const CustomContexts = ({ children }: any) => {
	return (
		<HelpModalProvider>
			<CheckListStatusProvider>
				{children}
			</CheckListStatusProvider>
		</HelpModalProvider>
	)
}

export default CustomContexts
