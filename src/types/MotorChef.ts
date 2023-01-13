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
  MotorChef,
  MotorChefMethodNames,
  MotorChefEventsContext,
  MotorChefEvents
>;
export type MotorChefEvents =
  | 'Deposit'
  | 'EmergencyWithdraw'
  | 'OwnershipTransferred'
  | 'Withdraw';
export interface MotorChefEventsContext {
  Deposit(
    parameters: {
      filter?: { user?: string | string[]; pid?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  EmergencyWithdraw(
    parameters: {
      filter?: { user?: string | string[]; pid?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  OwnershipTransferred(
    parameters: {
      filter?: { user?: string | string[]; newOwner?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Withdraw(
    parameters: {
      filter?: { user?: string | string[]; pid?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type MotorChefMethodNames =
  | 'new'
  | 'add'
  | 'addCToken'
  | 'cTokenInfo'
  | 'claimLPFees'
  | 'comptroller'
  | 'deposit'
  | 'emergencyWithdraw'
  | 'getPendingWCANTO'
  | 'lpPair'
  | 'massUpdatePools'
  | 'owner'
  | 'pendingCanto'
  | 'poolInfo'
  | 'poolLength'
  | 'retrieveCToken'
  | 'set'
  | 'startBlock'
  | 'totalAllocPoint'
  | 'transferOwnership'
  | 'updatePool'
  | 'userInfo'
  | 'weth'
  | 'withdraw';
export interface DepositEventEmittedResponse {
  user: string;
  pid: string;
  amount: string;
}
export interface EmergencyWithdrawEventEmittedResponse {
  user: string;
  pid: string;
  amount: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  user: string;
  newOwner: string;
}
export interface WithdrawEventEmittedResponse {
  user: string;
  pid: string;
  amount: string;
}
export interface PoolInfoResponse {
  lpToken: string;
  allocPoint: string;
  lastRewardBlock: string;
  accCantoPerShare: string;
}
export interface UserInfoResponse {
  amount: string;
  rewardDebt: string;
}
export interface MotorChef {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _startBlock Type: uint256, Indexed: false
   */
  'new'(_startBlock: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _allocPoint Type: uint256, Indexed: false
   * @param _lpToken Type: address, Indexed: false
   * @param _withUpdate Type: bool, Indexed: false
   */
  add(
    _allocPoint: string,
    _lpToken: string,
    _withUpdate: boolean
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   */
  addCToken(cToken: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  cTokenInfo(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param pid Type: uint256, Indexed: false
   */
  claimLPFees(pid: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  comptroller(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   */
  deposit(_pid: string, _amount: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   */
  emergencyWithdraw(_pid: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param cToken Type: address, Indexed: false
   */
  getPendingWCANTO(cToken: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  lpPair(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  massUpdatePools(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   * @param _user Type: address, Indexed: false
   * @param _cTokenIdx Type: uint256, Indexed: false
   */
  pendingCanto(
    _pid: string,
    _user: string,
    _cTokenIdx: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  poolInfo(parameter0: string): MethodConstantReturnContext<PoolInfoResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  poolLength(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param cToken Type: address, Indexed: false
   */
  retrieveCToken(cToken: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   * @param _allocPoint Type: uint256, Indexed: false
   * @param _withUpdate Type: bool, Indexed: false
   */
  set(
    _pid: string,
    _allocPoint: string,
    _withUpdate: boolean
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  startBlock(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalAllocPoint(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(newOwner: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   */
  updatePool(_pid: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  userInfo(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<UserInfoResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  weth(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   */
  withdraw(_pid: string, _amount: string): MethodReturnContext;
}
