import React from 'react';
import { View } from 'react-native';

import { ScaledSize } from '@/src/common/theme/sizes';

interface IProps {
  height?: ScaledSize;
}

const Separator: React.FC<IProps> = ({ height = ScaledSize.SIZE_20 }) => {
  return <View style={{ height }} />;
};

export default Separator;
