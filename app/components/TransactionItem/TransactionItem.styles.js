import { StyleSheet } from 'react-native';

import { Color, Fonts } from '../../themes';

const imageContainerSize = 48;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14
  },
  imageContainer: (backgroundColor) => ({
    height: imageContainerSize,
    width: imageContainerSize,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: imageContainerSize / 2,
    borderWidth: 1,
    borderColor: Color.grayContainer,
    backgroundColor: backgroundColor
  }),
  infoContainer: {
    marginLeft: 12,
    maxWidth: '45%',
    justifyContent: 'center'
  },
  descriptionText: {
    ...Fonts.style.mediumSemiBold,
    marginVertical: 3,
    color: Color.AppTheme.textDark
  },
  timeText: {
    ...Fonts.style.normalMedium,
    marginVertical: 3,
    color: Color.AppTheme.textLight
  },
  amountText: (type) => ({
    flex: 1,
    ...Fonts.style.mediumRegular,
    color: type === 'INCOME' ? Color.darkerGreen : Color.lightRed,
    marginLeft: 8,
    textAlign: 'right',
    alignSelf: 'center'
  })
});
