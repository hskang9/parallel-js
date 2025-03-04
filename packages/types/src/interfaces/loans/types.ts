// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CurrencyId, Rate, Ratio } from '@parallel-finance/types/interfaces/primitives';
import type { AccountId, Balance, FixedU128 } from '@parallel-finance/types/interfaces/runtime';
import type { Enum, Option, Struct, Text, Vec, bool, u128 } from '@polkadot/types-codec';

/** @name BorrowSnapshot */
export interface BorrowSnapshot extends Struct {
  readonly principal: Balance;
  readonly borrowIndex: u128;
}

/** @name CurveModel */
export interface CurveModel extends Struct {
  readonly baseRate: Rate;
}

/** @name Deposits */
export interface Deposits extends Struct {
  readonly voucherBalance: Balance;
  readonly isCollateral: bool;
}

/** @name EarnedSnapshot */
export interface EarnedSnapshot extends Struct {
  readonly totalEarnedPrior: Balance;
  readonly exchangeRatePrior: u128;
}

/** @name InterestRateModel */
export interface InterestRateModel extends Enum {
  readonly isJumpModel: boolean;
  readonly asJumpModel: JumpModel;
  readonly isCurveModel: boolean;
  readonly asCurveModel: CurveModel;
  readonly type: 'JumpModel' | 'CurveModel';
}

/** @name JumpModel */
export interface JumpModel extends Struct {
  readonly baseRate: Rate;
  readonly jumpRate: Rate;
  readonly fullRate: Rate;
  readonly jumpUtilization: Ratio;
}

/** @name Liquidity */
export interface Liquidity extends FixedU128 {}

/** @name Market */
export interface Market extends Struct {
  readonly collateralFactor: Ratio;
  readonly reserveFactor: Ratio;
  readonly closeFactor: Ratio;
  readonly liquidateIncentive: Rate;
  readonly rateModel: InterestRateModel;
  readonly state: MarketState;
  readonly cap: Balance;
  readonly ptokenId: CurrencyId;
}

/** @name MarketState */
export interface MarketState extends Enum {
  readonly isActive: boolean;
  readonly isPending: boolean;
  readonly isSupervision: boolean;
  readonly type: 'Active' | 'Pending' | 'Supervision';
}

/** @name Shortfall */
export interface Shortfall extends FixedU128 {}

/** @name ValidatorInfo */
export interface ValidatorInfo extends Struct {
  readonly name: Option<Text>;
  readonly address: AccountId;
  readonly stakes: u128;
  readonly score: u128;
}

/** @name ValidatorSet */
export interface ValidatorSet extends Vec<ValidatorInfo> {}

export type PHANTOM_LOANS = 'loans';
