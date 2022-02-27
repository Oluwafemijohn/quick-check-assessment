import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as WP} from 'react-native-responsive-screen';
import common from '../constants/common';

interface Props {
  bottomSheetRef: React.RefObject<BottomSheetModal>;
  snapPointsShort: string[];
  onClose?: () => void;
  onBackPress?: () => void;
  title?: string;
  children: React.ReactNode;
}
function BottomSheetTemplate({
  bottomSheetRef,
  snapPointsShort,
  onClose,
  title,
  children,
}: Props) {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPointsShort}
        style={styles.bottomSheetModal}
        backgroundStyle={styles.bottomSheetModalBackground}
        enableDismissOnClose>
        {onClose && (
          <Text onPress={onClose} style={styles.closeModal}>
            Close
          </Text>
        )}
        <View style={styles.contentContainer}>
          {title && <Text style={styles.topGainersHeaderText}>{title}</Text>}
          {children}
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  bottomSheetModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // paddingLeft: WP(5),
    // paddingRight: WP(5),
  },
  bottomSheetModalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: WP(5),
  },
  closeModal: {
    fontSize: WP(4),
    fontWeight: 'bold',
    color: common.colors.white,
    marginTop: WP(5),
    alignSelf: 'flex-end',
    marginBottom: WP(2),
  },

  contentContainer: {
    flex: 1,
    backgroundColor: common.colors.primaryBlack,
  },
  topGainersHeaderText: {
    fontSize: WP(4.5),
    color: common.colors.white,
    marginTop: WP(5),
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default BottomSheetTemplate;
