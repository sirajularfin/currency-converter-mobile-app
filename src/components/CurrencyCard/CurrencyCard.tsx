import React from 'react';
import { Image, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Colors } from '@/src/common/theme/colors';
import { ScaledSize } from '@/src/common/theme/sizes';
import logger from '@/src/common/utils/logger.util';
import Typography, { Variant } from '@/src/components/Typography/Typography';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface IProps {
  amount: string;
  currencyCode: string;
  currencyName: string;
  countryName: string;
  flagUri: string;
  onDelete?: () => void;
}

const CurrencyCard: React.FC<IProps> = ({
  amount,
  currencyCode,
  currencyName,
  countryName,
  flagUri,
  onDelete,
}) => {
  const { t } = useTranslation();
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const height = useSharedValue(100); // Initial height of card
  const opacity = useSharedValue(1);
  const SWIPE_THRESHOLD = -100;
  const DELETE_THRESHOLD = -150;

  const handleDelete = () => {
    if (onDelete) {
      logger(
        `[CurrencyCard] Deleted ${currencyCode} ${amount} on swipe`,
        'info',
      );
      onDelete();
    }
  };

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scale.value = withTiming(0.9, { duration: 100 });
    })
    .onUpdate(event => {
      if (event.translationX < 0) {
        translateX.value = event.translationX;
      }
    })
    .onEnd(event => {
      scale.value = withTiming(1, { duration: 100 });
      const velocity = event.velocityX;
      const distance = event.translationX;

      const shouldDelete =
        distance < DELETE_THRESHOLD ||
        (distance < SWIPE_THRESHOLD && velocity < -500);

      if (shouldDelete) {
        // Animate card off screen
        translateX.value = withTiming(-500, { duration: 300 });
        opacity.value = withTiming(0, { duration: 300 });
        height.value = withTiming(0, { duration: 300 }, () => {
          // Call delete after animation completes
          runOnJS(handleDelete)();
        });
      } else {
        translateX.value = withTiming(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const isPastDeleteThreshold = translateX.value < DELETE_THRESHOLD;

    return {
      height: height.value,
      opacity: opacity.value,
      overflow: 'hidden',
      transform: [{ translateX: translateX.value }, { scale: scale.value }],
      borderColor: isPastDeleteThreshold ? Colors.RED_400 : Colors.GREY_300,
      backgroundColor: isPastDeleteThreshold ? Colors.RED_50 : Colors.GREY_100,
      borderWidth: isPastDeleteThreshold ? ScaledSize.SIZE_2 : ScaledSize.ZERO,
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <View style={styles.container}>
          <View style={styles.rowOne}>
            <Typography
              useLineHeight
              variant={Variant.titleLarge}
              color={Colors.GREY_900}
            >
              {amount} {t(currencyName)} ({currencyCode})
            </Typography>
          </View>
          <View style={styles.rowTwo}>
            <Image source={{ uri: flagUri }} style={styles.flagImage} />
            <Typography
              useLineHeight
              variant={Variant.bodyMedium}
              color={Colors.GREY_800}
            >
              {countryName}
            </Typography>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default CurrencyCard;
