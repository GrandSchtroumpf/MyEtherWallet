// @flow
import BaseWallet from 'libs/wallet/base';
import Big from 'bignumber.js';
import type { HDKey } from 'hdkey';

/*** Unlock Private Key ***/
export type PrivateKeyUnlockParams = {
  key: string,
  password: string
};

export type UnlockPrivateKeyAction = {
  type: 'WALLET_UNLOCK_PRIVATE_KEY',
  payload: PrivateKeyUnlockParams
};

export function unlockPrivateKey(
  value: PrivateKeyUnlockParams
): UnlockPrivateKeyAction {
  return {
    type: 'WALLET_UNLOCK_PRIVATE_KEY',
    payload: value
  };
}

/*** Set Wallet ***/
export type SetWalletAction = {
  type: 'WALLET_SET',
  payload: BaseWallet
};

export function setWallet(value: BaseWallet): SetWalletAction {
  return {
    type: 'WALLET_SET',
    payload: value
  };
}

/*** Set Balance ***/
export type SetBalanceAction = {
  type: 'WALLET_SET_BALANCE',
  payload: Big
};

export function setBalance(value: Big): SetBalanceAction {
  return {
    type: 'WALLET_SET_BALANCE',
    payload: value
  };
}

/*** Set Token Balance ***/
export type SetTokenBalancesAction = {
  type: 'WALLET_SET_TOKEN_BALANCES',
  payload: {
    [string]: Big
  }
};

export function setTokenBalances(payload: {
  [string]: Big
}): SetTokenBalancesAction {
  return {
    type: 'WALLET_SET_TOKEN_BALANCES',
    payload
  };
}

/*** Get derived wallets ***/
export type GetDerivedWalletsAction = {
  type: 'WALLET_GET_DERIVED_WALLETS',
  payload: {
    dPath: string,
    publicKey: string,
    chainCode: string
  }
};

export function getDerivedWallets(
  dPath: string,
  publicKey: string,
  chainCode: string
) {
  return {
    type: 'WALLET_GET_DERIVED_WALLETS',
    payload: { dPath, publicKey, chainCode }
  };
}

/*** Union Type ***/
export type WalletAction =
  | UnlockPrivateKeyAction
  | SetWalletAction
  | SetBalanceAction
  | SetTokenBalancesAction
  | GetDerivedWalletsAction;
