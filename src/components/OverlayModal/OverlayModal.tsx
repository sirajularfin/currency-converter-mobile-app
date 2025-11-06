import React, { PropsWithChildren } from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';

import { ScaledSize } from '@/src/common/theme/sizes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

interface IProps extends React.ComponentProps<typeof Modal> {}

const OverlayModal: React.FC<PropsWithChildren<IProps>> = ({
  children,
  ...props
}) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...props}>
      <TouchableWithoutFeedback onPress={props.onRequestClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
            <View
              style={[
                styles.container,
                { paddingBottom: bottom + ScaledSize.SIZE_20 },
              ]}
            >
              <View style={styles.dropdownIndicator} />
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default OverlayModal;
