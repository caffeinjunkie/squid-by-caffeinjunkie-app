import { StyleSheet } from 'react-native';

import { Color, Fonts } from '../../themes';

const imageContainerSize = 48;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14
  },
  imageContainer: {
    height: imageContainerSize,
    width: imageContainerSize,
    alignSelf: 'center',
    borderRadius: imageContainerSize / 2,
    backgroundColor: Color.grayContainer
  },
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
  amountText: {
    flex: 1,
    ...Fonts.style.mediumRegular,
    color: Color.lightRed,
    marginLeft: 8,
    textAlign: 'right',
    alignSelf: 'center'
  }
});
