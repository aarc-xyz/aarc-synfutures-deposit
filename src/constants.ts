export enum SupportedChainId {
    BASE = 8453
}

export type AddressMap = {
    [chainId: number]: string;
};

export const SYNFUTURES_DEPOSIT_ADDRESS: AddressMap = {
    [SupportedChainId.BASE]: '0x208B443983D8BcC8578e9D86Db23FbA547071270'
};

export const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

export const USDC_ADDRESS_WITHOUT_0X = "833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";

export const BASE_RPC_URL = "https://mainnet.base.org";