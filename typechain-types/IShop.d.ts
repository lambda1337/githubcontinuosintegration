/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IShopInterface extends ethers.utils.Interface {
  functions: {
    "addItem(string,string,string,uint256,uint256,uint256)": FunctionFragment;
    "buy(bytes32,uint256,bool)": FunctionFragment;
    "disableItem(bytes32)": FunctionFragment;
    "editItem(bytes32,string,string,uint256,uint256)": FunctionFragment;
    "enableItem(bytes32)": FunctionFragment;
    "generateSku(string)": FunctionFragment;
    "getItem(bytes32)": FunctionFragment;
    "getPoints(address)": FunctionFragment;
    "restockItem(bytes32,uint256)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addItem",
    values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BytesLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "disableItem",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "editItem",
    values: [BytesLike, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "enableItem",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "generateSku", values: [string]): string;
  encodeFunctionData(functionFragment: "getItem", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "getPoints", values: [string]): string;
  encodeFunctionData(
    functionFragment: "restockItem",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "addItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "editItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enableItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateSku",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPoints", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "restockItem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ItemAdded(bytes32)": EventFragment;
    "ItemBought(bytes32,uint256,address)": EventFragment;
    "ItemDisabled(bytes32)": EventFragment;
    "ItemEdited(bytes32)": EventFragment;
    "ItemEnabled(bytes32)": EventFragment;
    "ItemRestocked(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ItemAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemBought"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemEdited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ItemRestocked"): EventFragment;
}

export class IShop extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IShopInterface;

  functions: {
    addItem(
      name: string,
      imageUrl: string,
      description: string,
      amount: BigNumberish,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      sku: BytesLike,
      amount: BigNumberish,
      usePoints: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disableItem(
      sku: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    editItem(
      sku: BytesLike,
      imageUrl: string,
      description: string,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableItem(
      sku: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    generateSku(name: string, overrides?: CallOverrides): Promise<[string]>;

    getItem(
      sku: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
        name: string;
        imageUrl: string;
        description: string;
        amount: BigNumber;
        price: BigNumber;
        points: BigNumber;
        disabled: boolean;
      }
    >;

    getPoints(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    restockItem(
      sku: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addItem(
    name: string,
    imageUrl: string,
    description: string,
    amount: BigNumberish,
    price: BigNumberish,
    points: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    sku: BytesLike,
    amount: BigNumberish,
    usePoints: boolean,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disableItem(
    sku: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  editItem(
    sku: BytesLike,
    imageUrl: string,
    description: string,
    price: BigNumberish,
    points: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableItem(
    sku: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  generateSku(name: string, overrides?: CallOverrides): Promise<string>;

  getItem(
    sku: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
      name: string;
      imageUrl: string;
      description: string;
      amount: BigNumber;
      price: BigNumber;
      points: BigNumber;
      disabled: boolean;
    }
  >;

  getPoints(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  restockItem(
    sku: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addItem(
      name: string,
      imageUrl: string,
      description: string,
      amount: BigNumberish,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(
      sku: BytesLike,
      amount: BigNumberish,
      usePoints: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    disableItem(sku: BytesLike, overrides?: CallOverrides): Promise<void>;

    editItem(
      sku: BytesLike,
      imageUrl: string,
      description: string,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    enableItem(sku: BytesLike, overrides?: CallOverrides): Promise<void>;

    generateSku(name: string, overrides?: CallOverrides): Promise<string>;

    getItem(
      sku: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
        name: string;
        imageUrl: string;
        description: string;
        amount: BigNumber;
        price: BigNumber;
        points: BigNumber;
        disabled: boolean;
      }
    >;

    getPoints(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    restockItem(
      sku: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    ItemAdded(sku?: null): TypedEventFilter<[string], { sku: string }>;

    ItemBought(
      sku?: null,
      amount?: null,
      buyer?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { sku: string; amount: BigNumber; buyer: string }
    >;

    ItemDisabled(sku?: null): TypedEventFilter<[string], { sku: string }>;

    ItemEdited(sku?: null): TypedEventFilter<[string], { sku: string }>;

    ItemEnabled(sku?: null): TypedEventFilter<[string], { sku: string }>;

    ItemRestocked(
      sku?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { sku: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    addItem(
      name: string,
      imageUrl: string,
      description: string,
      amount: BigNumberish,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      sku: BytesLike,
      amount: BigNumberish,
      usePoints: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disableItem(
      sku: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    editItem(
      sku: BytesLike,
      imageUrl: string,
      description: string,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableItem(
      sku: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    generateSku(name: string, overrides?: CallOverrides): Promise<BigNumber>;

    getItem(sku: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPoints(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    restockItem(
      sku: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addItem(
      name: string,
      imageUrl: string,
      description: string,
      amount: BigNumberish,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      sku: BytesLike,
      amount: BigNumberish,
      usePoints: boolean,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableItem(
      sku: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    editItem(
      sku: BytesLike,
      imageUrl: string,
      description: string,
      price: BigNumberish,
      points: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableItem(
      sku: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    generateSku(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getItem(
      sku: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoints(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    restockItem(
      sku: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
