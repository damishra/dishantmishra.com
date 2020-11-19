import { PolarNight, SnowStorm, Frost } from './nord';

const Base = {
  accent: Frost.nord10,
  primary: Frost.nord9,
  secondary: Frost.nord8,
  tertiary: Frost.nord7,
  highlightBackground: PolarNight.nord3,
  highlightText: PolarNight.nord6,
};

export const Dark = {
  type: 'dark',
  ...Base,
  primaryText: SnowStorm.nord6,
  secondaryText: SnowStorm.nord5,
  tertiaryText: SnowStorm.nord4,
  primaryBackground: PolarNight.nord0,
  secondayBackground: PolarNight.nord1,
  tertiaryBackground: PolarNight.nord2,
};

export const Light = {
  type: 'light',
  ...Base,
  primaryText: PolarNight.nord0,
  secondaryText: PolarNight.nord1,
  tertiaryText: PolarNight.nord2,
  primaryBackground: SnowStorm.nord6,
  secondayBackground: SnowStorm.nord5,
  tertiaryBackground: SnowStorm.nord4,
};
