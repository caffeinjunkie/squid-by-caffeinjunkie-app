import { Color } from '../../../themes';

const MenuOptions = {
  TOP_UP: {
    name: 'addIncome',
    iconName: 'download',
    color: Color.tertiary,
    backgroundColor: Color.transparentTertiaryPoint1
  },
  TRANSFER: {
    name: 'transfer',
    iconName: 'repeat',
    color: Color.secondary,
    backgroundColor: Color.transparentSecondaryPoint1
  },
  WITHDRAW: {
    name: 'withdraw',
    iconName: 'upload',
    color: Color.quaternary,
    backgroundColor: Color.transparentQuaternaryPoint1
  },
  PAY: {
    name: 'addExpenses',
    iconName: 'credit-card',
    color: Color.primary,
    backgroundColor: Color.transparentPrimaryPoint1
  }
};

export default {
  MenuOptions
};
