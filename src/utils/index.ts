import { ethers } from "ethers"
import { formatEther, getAddress } from "ethers/lib/utils"
import BigNumber from 'bignumber.js'
import { NETWORK_RPC_URL } from "./env-vars"
import { basicConversionTable } from "../constants"

export * from "./formatting"
export * from "./formatBalance"


export const defaultProvider = new ethers.providers.JsonRpcProvider(NETWORK_RPC_URL)

export function isSameAddress(address1 = "", address2 = "") {
	try {
		const a1 = getAddress(address1)
		const a2 = getAddress(address2)
		if (a1 && a2) return a1.toLowerCase() === a2.toLowerCase()
		return false
	} catch(_) {
		return false
	}
}

export function convertCurrencyToCanto(amount: string, currency: string) {
	return parseFloat(formatEther(amount)) * (basicConversionTable[ currency.toLowerCase() ] || 0)
}

export const bnToDec = (number: string, decimals = 18): number => {
	const bn = new BigNumber(number)
	return bn.dividedBy(new BigNumber(10).pow(decimals)).toNumber()
  }