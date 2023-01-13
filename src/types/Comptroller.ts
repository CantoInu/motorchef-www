import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from 'ethereum-abi-types-generator';

export interface CallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface SendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface EstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: EstimateGasOptions): Promise<number>;
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: CallOptions): Promise<TCallReturn>;
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  Comptroller,
  ComptrollerMethodNames,
  ComptrollerEventsContext,
  ComptrollerEvents
>;
export type ComptrollerEvents =
  | 'ActionPaused'
  | 'ActionPaused'
  | 'CompAccruedAdjusted'
  | 'CompBorrowSpeedUpdated'
  | 'CompGranted'
  | 'CompReceivableUpdated'
  | 'CompSupplySpeedUpdated'
  | 'ContributorCompSpeedUpdated'
  | 'DistributedBorrowerComp'
  | 'DistributedSupplierComp'
  | 'Failure'
  | 'MarketEntered'
  | 'MarketExited'
  | 'MarketListed'
  | 'NewBorrowCap'
  | 'NewBorrowCapGuardian'
  | 'NewCloseFactor'
  | 'NewCollateralFactor'
  | 'NewLiquidationIncentive'
  | 'NewPauseGuardian'
  | 'NewPriceOracle';
export interface ComptrollerEventsContext {
  ActionPaused(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  ActionPaused(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  CompAccruedAdjusted(
    parameters: {
      filter?: { user?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  CompBorrowSpeedUpdated(
    parameters: {
      filter?: { cToken?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  CompGranted(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  CompReceivableUpdated(
    parameters: {
      filter?: { user?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  CompSupplySpeedUpdated(
    parameters: {
      filter?: { cToken?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  ContributorCompSpeedUpdated(
    parameters: {
      filter?: { contributor?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  DistributedBorrowerComp(
    parameters: {
      filter?: { cToken?: string | string[]; borrower?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  DistributedSupplierComp(
    parameters: {
      filter?: { cToken?: string | string[]; supplier?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Failure(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  MarketEntered(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  MarketExited(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  MarketListed(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewBorrowCap(
    parameters: {
      filter?: { cToken?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewBorrowCapGuardian(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewCloseFactor(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewCollateralFactor(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewLiquidationIncentive(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewPauseGuardian(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  NewPriceOracle(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type ComptrollerMethodNames =
  | 'new'
  | 'WethAddr'
  | '_become'
  | '_borrowGuardianPaused'
  | '_grantComp'
  | '_mintGuardianPaused'
  | '_setBorrowCapGuardian'
  | '_setBorrowPaused'
  | '_setCloseFactor'
  | '_setCollateralFactor'
  | '_setCompSpeeds'
  | '_setContributorCompSpeed'
  | '_setLiquidationIncentive'
  | '_setMarketBorrowCaps'
  | '_setMintPaused'
  | '_setPauseGuardian'
  | '_setPriceOracle'
  | '_setSeizePaused'
  | '_setTransferPaused'
  | '_supportMarket'
  | 'accountAssets'
  | 'admin'
  | 'allMarkets'
  | 'borrowAllowed'
  | 'borrowCapGuardian'
  | 'borrowCaps'
  | 'borrowGuardianPaused'
  | 'borrowVerify'
  | 'checkMembership'
  | 'claimComp'
  | 'claimComp'
  | 'claimComp'
  | 'closeFactorMantissa'
  | 'compAccrued'
  | 'compBorrowSpeeds'
  | 'compBorrowState'
  | 'compBorrowerIndex'
  | 'compContributorSpeeds'
  | 'compInitialIndex'
  | 'compRate'
  | 'compReceivable'
  | 'compSpeeds'
  | 'compSupplierIndex'
  | 'compSupplySpeeds'
  | 'compSupplyState'
  | 'comptrollerImplementation'
  | 'enterMarkets'
  | 'exitMarket'
  | 'fixBadAccruals'
  | 'getAccountLiquidity'
  | 'getAllMarkets'
  | 'getAssetsIn'
  | 'getBlockNumber'
  | 'getHypotheticalAccountLiquidity'
  | 'getWETHAddress'
  | 'isComptroller'
  | 'isDeprecated'
  | 'lastContributorBlock'
  | 'liquidateBorrowAllowed'
  | 'liquidateBorrowVerify'
  | 'liquidateCalculateSeizeTokens'
  | 'liquidationIncentiveMantissa'
  | 'markets'
  | 'maxAssets'
  | 'mintAllowed'
  | 'mintGuardianPaused'
  | 'mintVerify'
  | 'oracle'
  | 'pauseGuardian'
  | 'pendingAdmin'
  | 'pendingComptrollerImplementation'
  | 'proposal65FixExecuted'
  | 'redeemAllowed'
  | 'redeemVerify'
  | 'repayBorrowAllowed'
  | 'repayBorrowVerify'
  | 'seizeAllowed'
  | 'seizeGuardianPaused'
  | 'seizeVerify'
  | 'setWETHAddress'
  | 'transferAllowed'
  | 'transferGuardianPaused'
  | 'transferVerify'
  | 'updateContributorRewards';
export interface ActionPausedEventEmittedResponse {
  action: string;
  pauseState: boolean;
}
export interface CompAccruedAdjustedEventEmittedResponse {
  user: string;
  oldCompAccrued: string;
  newCompAccrued: string;
}
export interface CompBorrowSpeedUpdatedEventEmittedResponse {
  cToken: string;
  newSpeed: string;
}
export interface CompGrantedEventEmittedResponse {
  recipient: string;
  amount: string;
}
export interface CompReceivableUpdatedEventEmittedResponse {
  user: string;
  oldCompReceivable: string;
  newCompReceivable: string;
}
export interface CompSupplySpeedUpdatedEventEmittedResponse {
  cToken: string;
  newSpeed: string;
}
export interface ContributorCompSpeedUpdatedEventEmittedResponse {
  contributor: string;
  newSpeed: string;
}
export interface DistributedBorrowerCompEventEmittedResponse {
  cToken: string;
  borrower: string;
  compDelta: string;
  compBorrowIndex: string;
}
export interface DistributedSupplierCompEventEmittedResponse {
  cToken: string;
  supplier: string;
  compDelta: string;
  compSupplyIndex: string;
}
export interface FailureEventEmittedResponse {
  error: string;
  info: string;
  detail: string;
}
export interface MarketEnteredEventEmittedResponse {
  cToken: string;
  account: string;
}
export interface MarketExitedEventEmittedResponse {
  cToken: string;
  account: string;
}
export interface MarketListedEventEmittedResponse {
  cToken: string;
}
export interface NewBorrowCapEventEmittedResponse {
  cToken: string;
  newBorrowCap: string;
}
export interface NewBorrowCapGuardianEventEmittedResponse {
  oldBorrowCapGuardian: string;
  newBorrowCapGuardian: string;
}
export interface NewCloseFactorEventEmittedResponse {
  oldCloseFactorMantissa: string;
  newCloseFactorMantissa: string;
}
export interface NewCollateralFactorEventEmittedResponse {
  cToken: string;
  oldCollateralFactorMantissa: string;
  newCollateralFactorMantissa: string;
}
export interface NewLiquidationIncentiveEventEmittedResponse {
  oldLiquidationIncentiveMantissa: string;
  newLiquidationIncentiveMantissa: string;
}
export interface NewPauseGuardianEventEmittedResponse {
  oldPauseGuardian: string;
  newPauseGuardian: string;
}
export interface NewPriceOracleEventEmittedResponse {
  oldPriceOracle: string;
  newPriceOracle: string;
}
export interface CompBorrowStateResponse {
  index: string;
  block: string;
}
export interface CompSupplyStateResponse {
  index: string;
  block: string;
}
export interface GetAccountLiquidityResponse {
  result0: string;
  result1: string;
  result2: string;
}
export interface GetHypotheticalAccountLiquidityResponse {
  result0: string;
  result1: string;
  result2: string;
}
export interface LiquidateCalculateSeizeTokensResponse {
  result0: string;
  result1: string;
}
export interface MarketsResponse {
  isListed: boolean;
  collateralFactorMantissa: string;
  isComped: boolean;
}
export interface Comptroller {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   */
  'new'(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  WethAddr(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param unitroller Type: address, Indexed: false
   */
  _become(unitroller: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _borrowGuardianPaused(): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param recipient Type: address, Indexed: false
   * @param amount Type: uint256, Indexed: false
   */
  _grantComp(recipient: string, amount: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  _mintGuardianPaused(): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newBorrowCapGuardian Type: address, Indexed: false
   */
  _setBorrowCapGuardian(newBorrowCapGuardian: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param state Type: bool, Indexed: false
   */
  _setBorrowPaused(cToken: string, state: boolean): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newCloseFactorMantissa Type: uint256, Indexed: false
   */
  _setCloseFactor(newCloseFactorMantissa: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param newCollateralFactorMantissa Type: uint256, Indexed: false
   */
  _setCollateralFactor(
    cToken: string,
    newCollateralFactorMantissa: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokens Type: address[], Indexed: false
   * @param supplySpeeds Type: uint256[], Indexed: false
   * @param borrowSpeeds Type: uint256[], Indexed: false
   */
  _setCompSpeeds(
    cTokens: string[],
    supplySpeeds: string[],
    borrowSpeeds: string[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param contributor Type: address, Indexed: false
   * @param compSpeed Type: uint256, Indexed: false
   */
  _setContributorCompSpeed(
    contributor: string,
    compSpeed: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newLiquidationIncentiveMantissa Type: uint256, Indexed: false
   */
  _setLiquidationIncentive(
    newLiquidationIncentiveMantissa: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokens Type: address[], Indexed: false
   * @param newBorrowCaps Type: uint256[], Indexed: false
   */
  _setMarketBorrowCaps(
    cTokens: string[],
    newBorrowCaps: string[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param state Type: bool, Indexed: false
   */
  _setMintPaused(cToken: string, state: boolean): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newPauseGuardian Type: address, Indexed: false
   */
  _setPauseGuardian(newPauseGuardian: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOracle Type: address, Indexed: false
   */
  _setPriceOracle(newOracle: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param state Type: bool, Indexed: false
   */
  _setSeizePaused(state: boolean): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param state Type: bool, Indexed: false
   */
  _setTransferPaused(state: boolean): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   */
  _supportMarket(cToken: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: uint256, Indexed: false
   */
  accountAssets(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  admin(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  allMarkets(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param borrowAmount Type: uint256, Indexed: false
   */
  borrowAllowed(
    cToken: string,
    borrower: string,
    borrowAmount: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  borrowCapGuardian(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  borrowCaps(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  borrowGuardianPaused(
    parameter0: string
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param borrowAmount Type: uint256, Indexed: false
   */
  borrowVerify(
    cToken: string,
    borrower: string,
    borrowAmount: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   * @param cToken Type: address, Indexed: false
   */
  checkMembership(
    account: string,
    cToken: string
  ): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param holder Type: address, Indexed: false
   * @param cTokens Type: address[], Indexed: false
   */
  claimComp(holder: string, cTokens: string[]): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param holders Type: address[], Indexed: false
   * @param cTokens Type: address[], Indexed: false
   * @param borrowers Type: bool, Indexed: false
   * @param suppliers Type: bool, Indexed: false
   */
  claimComp(
    holders: string[],
    cTokens: string[],
    borrowers: boolean,
    suppliers: boolean
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param holder Type: address, Indexed: false
   */
  claimComp(holder: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  closeFactorMantissa(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compAccrued(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compBorrowSpeeds(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compBorrowState(
    parameter0: string
  ): MethodConstantReturnContext<CompBorrowStateResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  compBorrowerIndex(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compContributorSpeeds(
    parameter0: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  compInitialIndex(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  compRate(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compReceivable(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compSpeeds(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  compSupplierIndex(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compSupplySpeeds(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  compSupplyState(
    parameter0: string
  ): MethodConstantReturnContext<CompSupplyStateResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  comptrollerImplementation(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokens Type: address[], Indexed: false
   */
  enterMarkets(cTokens: string[]): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokenAddress Type: address, Indexed: false
   */
  exitMarket(cTokenAddress: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param affectedUsers Type: address[], Indexed: false
   * @param amounts Type: uint256[], Indexed: false
   */
  fixBadAccruals(
    affectedUsers: string[],
    amounts: string[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   */
  getAccountLiquidity(
    account: string
  ): MethodConstantReturnContext<GetAccountLiquidityResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getAllMarkets(): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   */
  getAssetsIn(account: string): MethodConstantReturnContext<string[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getBlockNumber(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   * @param cTokenModify Type: address, Indexed: false
   * @param redeemTokens Type: uint256, Indexed: false
   * @param borrowAmount Type: uint256, Indexed: false
   */
  getHypotheticalAccountLiquidity(
    account: string,
    cTokenModify: string,
    redeemTokens: string,
    borrowAmount: string
  ): MethodConstantReturnContext<GetHypotheticalAccountLiquidityResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getWETHAddress(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  isComptroller(): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param cToken Type: address, Indexed: false
   */
  isDeprecated(cToken: string): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  lastContributorBlock(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokenBorrowed Type: address, Indexed: false
   * @param cTokenCollateral Type: address, Indexed: false
   * @param liquidator Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param repayAmount Type: uint256, Indexed: false
   */
  liquidateBorrowAllowed(
    cTokenBorrowed: string,
    cTokenCollateral: string,
    liquidator: string,
    borrower: string,
    repayAmount: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokenBorrowed Type: address, Indexed: false
   * @param cTokenCollateral Type: address, Indexed: false
   * @param liquidator Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param actualRepayAmount Type: uint256, Indexed: false
   * @param seizeTokens Type: uint256, Indexed: false
   */
  liquidateBorrowVerify(
    cTokenBorrowed: string,
    cTokenCollateral: string,
    liquidator: string,
    borrower: string,
    actualRepayAmount: string,
    seizeTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param cTokenBorrowed Type: address, Indexed: false
   * @param cTokenCollateral Type: address, Indexed: false
   * @param actualRepayAmount Type: uint256, Indexed: false
   */
  liquidateCalculateSeizeTokens(
    cTokenBorrowed: string,
    cTokenCollateral: string,
    actualRepayAmount: string
  ): MethodConstantReturnContext<LiquidateCalculateSeizeTokensResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  liquidationIncentiveMantissa(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  markets(parameter0: string): MethodConstantReturnContext<MarketsResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  maxAssets(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param minter Type: address, Indexed: false
   * @param mintAmount Type: uint256, Indexed: false
   */
  mintAllowed(
    cToken: string,
    minter: string,
    mintAmount: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  mintGuardianPaused(parameter0: string): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param minter Type: address, Indexed: false
   * @param actualMintAmount Type: uint256, Indexed: false
   * @param mintTokens Type: uint256, Indexed: false
   */
  mintVerify(
    cToken: string,
    minter: string,
    actualMintAmount: string,
    mintTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  oracle(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  pauseGuardian(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  pendingAdmin(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  pendingComptrollerImplementation(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  proposal65FixExecuted(): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param redeemer Type: address, Indexed: false
   * @param redeemTokens Type: uint256, Indexed: false
   */
  redeemAllowed(
    cToken: string,
    redeemer: string,
    redeemTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param redeemer Type: address, Indexed: false
   * @param redeemAmount Type: uint256, Indexed: false
   * @param redeemTokens Type: uint256, Indexed: false
   */
  redeemVerify(
    cToken: string,
    redeemer: string,
    redeemAmount: string,
    redeemTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param payer Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param repayAmount Type: uint256, Indexed: false
   */
  repayBorrowAllowed(
    cToken: string,
    payer: string,
    borrower: string,
    repayAmount: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param payer Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param actualRepayAmount Type: uint256, Indexed: false
   * @param borrowerIndex Type: uint256, Indexed: false
   */
  repayBorrowVerify(
    cToken: string,
    payer: string,
    borrower: string,
    actualRepayAmount: string,
    borrowerIndex: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokenCollateral Type: address, Indexed: false
   * @param cTokenBorrowed Type: address, Indexed: false
   * @param liquidator Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param seizeTokens Type: uint256, Indexed: false
   */
  seizeAllowed(
    cTokenCollateral: string,
    cTokenBorrowed: string,
    liquidator: string,
    borrower: string,
    seizeTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  seizeGuardianPaused(): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cTokenCollateral Type: address, Indexed: false
   * @param cTokenBorrowed Type: address, Indexed: false
   * @param liquidator Type: address, Indexed: false
   * @param borrower Type: address, Indexed: false
   * @param seizeTokens Type: uint256, Indexed: false
   */
  seizeVerify(
    cTokenCollateral: string,
    cTokenBorrowed: string,
    liquidator: string,
    borrower: string,
    seizeTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param wethAddr Type: address, Indexed: false
   */
  setWETHAddress(wethAddr: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param src Type: address, Indexed: false
   * @param dst Type: address, Indexed: false
   * @param transferTokens Type: uint256, Indexed: false
   */
  transferAllowed(
    cToken: string,
    src: string,
    dst: string,
    transferTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  transferGuardianPaused(): MethodConstantReturnContext<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   * @param src Type: address, Indexed: false
   * @param dst Type: address, Indexed: false
   * @param transferTokens Type: uint256, Indexed: false
   */
  transferVerify(
    cToken: string,
    src: string,
    dst: string,
    transferTokens: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param contributor Type: address, Indexed: false
   */
  updateContributorRewards(contributor: string): MethodReturnContext;
}
