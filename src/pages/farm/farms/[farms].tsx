import { GetServerSideProps } from "next"

import { Seo } from "components/Seo"

export default function FarmsPage({ farmName = undefined }: { farmName?: string }) {
	return (<>
		<Seo title={`Farms | ${farmName}`}/>
	</>)
}

interface ManageFarmsProps extends GetServerSideProps {
	params?: {
		name?: string
	}
}

export const getServerSideProps = async ({ params = {} }: ManageFarmsProps) => {
	const farmName = params.name || null

	return {
		props: {
			farmName,
		},
	}
}
