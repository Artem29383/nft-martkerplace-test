import {Platform} from 'react-native';

export enum EFontFamily {
  OpenSans = 'OpenSans',
  NotoSans = 'NotoSans',

  Roboto = 'Roboto',
  RobotoBold = 'Roboto-Bold',
  RobotoMedium = 'Roboto-Medium',
  RobotoRegular = 'Roboto-Regular',

  SFUIDisplay = 'SFUIDisplay',
  SFUIDisplayBold = 'SFUIDisplay-Bold',
  SFUIDisplayMedium = 'SFUIDisplay-Bold',
  SFUIDisplayRegular = 'SFUIDisplay-Regular',

  SFProDisplay = 'SFProDisplay',
  SFProDisplayRegular = 'SFProDisplay-Regular',
  SFProDisplayMedium = 'SFProDisplay-Medium',

  NotoSansBold = 'NotoSans-Bold',
  NotoSansRegular = 'NotoSans-Regular',
}

export enum EFontWeight {
  light = 'light',
  regular = 'regular',
  medium = 'medium',
  bold = 'bold',
}

const defaultFontFamily =
  Platform.OS === 'ios' ? EFontFamily.SFUIDisplay : EFontFamily.Roboto;
const defaultFontFamilyBold =
  Platform.OS === 'ios' ? EFontFamily.SFUIDisplayBold : EFontFamily.RobotoBold;
const defaultFontFamilyMedium =
  Platform.OS === 'ios'
    ? EFontFamily.SFUIDisplayMedium
    : EFontFamily.RobotoMedium;
const defaultFontFamilyRegular =
  Platform.OS === 'ios'
    ? EFontFamily.SFUIDisplayRegular
    : EFontFamily.RobotoRegular;

const defaultFontWeight = EFontWeight.regular;
const defaultFontColor = '#00041b';

const defaultChartFontFamily = EFontFamily.NotoSansRegular;
const defaultChartBoldFontFamily = EFontFamily.NotoSansBold;

export {
  defaultFontFamily,
  defaultFontFamilyBold,
  defaultFontFamilyMedium,
  defaultFontFamilyRegular,
  defaultFontColor,
  defaultFontWeight,
  defaultChartFontFamily,
  defaultChartBoldFontFamily,
};
