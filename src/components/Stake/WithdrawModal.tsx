import { Dispatch, SetStateAction, useMemo } from "react"

import styled from "styled-components"
import { Flex, Text } from "../../styles"
import { Modal } from "../Modal"
import { Toggle } from "components/Toggle"

const Setting = styled(Flex).attrs(() => ({
	justify: "space-between",
	align: "center"
}))`
	text-transform: uppercase;
`

type WithdrawModalProps = {
	modalOpen: boolean,
	setModalOpen: Dispatch<SetStateAction<boolean>>
}

export function WithdrawModal({
	modalOpen,
	setModalOpen
}: WithdrawModalProps) {

	if (!modalOpen) return null

	return (
		<Modal
			title="Settings"
			onClose={() => setModalOpen(false)}
			content={
				<Flex
					column
					gap={24}>
				</Flex>
			}
		/>
	)
}