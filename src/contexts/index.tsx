import React from 'react'
import { CheckListStatusProvider } from './CheckListStatusContext/context'
import { HelpModalProvider } from './HelpModalContext/context'
import {SectionStateProvider} from "~/contexts/SectionStateContext/context";

const CustomContexts = ({ children }: any) => {
	return (
		<HelpModalProvider>
			<CheckListStatusProvider>
				<SectionStateProvider>
					{children}
				</SectionStateProvider>
			</CheckListStatusProvider>
		</HelpModalProvider>
	)
}

export default CustomContexts
