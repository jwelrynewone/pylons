import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "Pylonstech.pylons.pylons";
export interface EventCreateAccount {
    address: string;
}
export interface EventCreateCookbook {
    creator: string;
    id: string;
}
export interface EventUpdateCookbook {
    id: string;
}
export interface EventTransferCookbook {
    sender: string;
    receiver: string;
    id: string;
}
export interface EventCreateRecipe {
    creator: string;
    id: string;
}
export interface EventUpdateRecipe {
    creator: string;
    id: string;
}
export interface EventCreateExecution {
    creator: string;
    id: string;
}
export interface EventCompleteExecution {
    creator: string;
    id: string;
}
export interface EventCompleteExecutionEarly {
    creator: string;
    id: string;
}
export interface EventSendItems {
    sender: string;
    receiver: string;
    IDs: string[];
}
export interface EventSetIemString {
    creator: string;
    id: string;
}
export interface GooglePurchase {
    creator: string;
    id: string;
}
export interface StripePurchase {
    creator: string;
    id: string;
}
export declare const EventCreateAccount: {
    encode(message: EventCreateAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCreateAccount;
    fromJSON(object: any): EventCreateAccount;
    toJSON(message: EventCreateAccount): unknown;
    fromPartial(object: DeepPartial<EventCreateAccount>): EventCreateAccount;
};
export declare const EventCreateCookbook: {
    encode(message: EventCreateCookbook, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCreateCookbook;
    fromJSON(object: any): EventCreateCookbook;
    toJSON(message: EventCreateCookbook): unknown;
    fromPartial(object: DeepPartial<EventCreateCookbook>): EventCreateCookbook;
};
export declare const EventUpdateCookbook: {
    encode(message: EventUpdateCookbook, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventUpdateCookbook;
    fromJSON(object: any): EventUpdateCookbook;
    toJSON(message: EventUpdateCookbook): unknown;
    fromPartial(object: DeepPartial<EventUpdateCookbook>): EventUpdateCookbook;
};
export declare const EventTransferCookbook: {
    encode(message: EventTransferCookbook, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventTransferCookbook;
    fromJSON(object: any): EventTransferCookbook;
    toJSON(message: EventTransferCookbook): unknown;
    fromPartial(object: DeepPartial<EventTransferCookbook>): EventTransferCookbook;
};
export declare const EventCreateRecipe: {
    encode(message: EventCreateRecipe, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCreateRecipe;
    fromJSON(object: any): EventCreateRecipe;
    toJSON(message: EventCreateRecipe): unknown;
    fromPartial(object: DeepPartial<EventCreateRecipe>): EventCreateRecipe;
};
export declare const EventUpdateRecipe: {
    encode(message: EventUpdateRecipe, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventUpdateRecipe;
    fromJSON(object: any): EventUpdateRecipe;
    toJSON(message: EventUpdateRecipe): unknown;
    fromPartial(object: DeepPartial<EventUpdateRecipe>): EventUpdateRecipe;
};
export declare const EventCreateExecution: {
    encode(message: EventCreateExecution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCreateExecution;
    fromJSON(object: any): EventCreateExecution;
    toJSON(message: EventCreateExecution): unknown;
    fromPartial(object: DeepPartial<EventCreateExecution>): EventCreateExecution;
};
export declare const EventCompleteExecution: {
    encode(message: EventCompleteExecution, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCompleteExecution;
    fromJSON(object: any): EventCompleteExecution;
    toJSON(message: EventCompleteExecution): unknown;
    fromPartial(object: DeepPartial<EventCompleteExecution>): EventCompleteExecution;
};
export declare const EventCompleteExecutionEarly: {
    encode(message: EventCompleteExecutionEarly, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventCompleteExecutionEarly;
    fromJSON(object: any): EventCompleteExecutionEarly;
    toJSON(message: EventCompleteExecutionEarly): unknown;
    fromPartial(object: DeepPartial<EventCompleteExecutionEarly>): EventCompleteExecutionEarly;
};
export declare const EventSendItems: {
    encode(message: EventSendItems, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventSendItems;
    fromJSON(object: any): EventSendItems;
    toJSON(message: EventSendItems): unknown;
    fromPartial(object: DeepPartial<EventSendItems>): EventSendItems;
};
export declare const EventSetIemString: {
    encode(message: EventSetIemString, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EventSetIemString;
    fromJSON(object: any): EventSetIemString;
    toJSON(message: EventSetIemString): unknown;
    fromPartial(object: DeepPartial<EventSetIemString>): EventSetIemString;
};
export declare const GooglePurchase: {
    encode(message: GooglePurchase, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GooglePurchase;
    fromJSON(object: any): GooglePurchase;
    toJSON(message: GooglePurchase): unknown;
    fromPartial(object: DeepPartial<GooglePurchase>): GooglePurchase;
};
export declare const StripePurchase: {
    encode(message: StripePurchase, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): StripePurchase;
    fromJSON(object: any): StripePurchase;
    toJSON(message: StripePurchase): unknown;
    fromPartial(object: DeepPartial<StripePurchase>): StripePurchase;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
