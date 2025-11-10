import { StyleSheet } from 'react-native';

import globalStyles from '@/src/common/styles/globals';
import { ScaledSize } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.flexContainer,
    gap: ScaledSize.SIZE_20,
  },
  resultContainer: {
    marginTop: ScaledSize.SIZE_30,
  },
});

export default styles;
