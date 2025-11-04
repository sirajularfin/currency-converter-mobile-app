import { StyleSheet } from 'react-native';

import { Colors } from '@/src/common/theme/colors';
import { Size } from '@/src/common/theme/sizes';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  tabBar: {
    borderRadius: Size.XXS_8,
    backgroundColor: Colors.blue[500](),
    borderTopColor: '#ddd',
    height: 60,
    paddingBottom: 8,
    cursor: 'pointer',
  },
  tabBarLabel: {
    fontSize: 12,
  },
});

export default styles;
