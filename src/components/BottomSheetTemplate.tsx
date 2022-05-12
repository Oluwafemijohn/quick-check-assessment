import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Keyboard, Pressable } from 'react-native';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';
import common from '../constants/common';
import ModalCloseIcon from './svg/ModalCloseIcon';

interface Props {
  bottomSheetRef?: React.RefObject<BottomSheetModal>;
  snapPointsShort?: string[];
  onClose?: () => void;
  onBackPress?: () => void;
  title?: string;
  children: React.ReactNode;
  isVisible?: boolean;
  onChange?: (index: number) => void;
}
function BottomSheetTemplate({
  bottomSheetRef,
  snapPointsShort,
  onClose,
  title,
  children,
  isVisible,
  onChange,
}: Props) {
  const snapPoints = snapPointsShort ? snapPointsShort : useMemo(() => ['60%', '80%'], []);
  const _bottomSheetRef = useRef<BottomSheetModal>(null);


  useEffect(() => {

    if (isVisible) {
      _bottomSheetRef.current?.present();
    } else {
      _bottomSheetRef.current?.close();
    }
  }, [isVisible])






  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={isVisible !== undefined ? _bottomSheetRef : bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={onChange}
        keyboardBlurBehavior='restore'
        keyboardBehavior="interactive"
        style={[styles.bottomSheetModal, { backgroundColor: common.colors.activeTabText }]}
        backgroundStyle={[styles.bottomSheetModalBackground, { backgroundColor: common.colors.activeTabText }]}
        enableDismissOnClose>
        {onClose && (
          <Pressable onPress={onClose} >
            {/* <Text style={[styles.closeModal, { color: common.colors.black }]}>
              Close
            </Text> */}
            <ModalCloseIcon style={styles.closeModal} />
          </Pressable>
        )}
        <View style={[styles.contentContainer, { backgroundColor: common.colors.activeTabText }]}>
          {title && <Text style={[styles.title, { color: common.colors.black }]}>{title}</Text>}
          {children}
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  bottomSheetModal: {
    // paddingLeft: WP(5),
    // paddingRight: WP(5),
    backgroundColor: common.colors.activeTabText,
  },
  bottomSheetModalBackground: {
    borderRadius: WP(5),
    backgroundColor: common.colors.activeTabText,

  },
  closeModal: {
    fontSize: WP(4),
    fontWeight: 'bold',
    marginTop: WP(5),
    alignSelf: 'flex-end',
    marginBottom: WP(2),
    marginRight: WP(5),
  },

  contentContainer: {
    flex: 1,
    backgroundColor: common.colors.activeTabText,
  },
  title: {
    fontSize: WP(4.5),
    marginTop: WP(5),
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

export default BottomSheetTemplate;
