import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, Pressable} from 'react-native';
import CreateListModal from '../../components/CreateListModal';
import AppButton from '../../components/form/AppButton';
import HeaderBar from '../../components/HeaderBar';
import ActionArrowSvgComponent from '../../components/svg/ActionArrowSvgComponent';
import ListItemIconSvgConponent from '../../components/svg/ListItemIconSvgConponent';
import ListPageSvgComponent from '../../components/svg/ListPageSvgComponent';
import common from '../../constants/common';
import Constants from '../../constants/Constants';
import {listArray} from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';

function ListScreen(props: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isListEmpty, setIsListEmpty] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderBar
        onPressActionText={() => {
          setIsModalVisible(true);
        }}
        title={TextConstant.List}
        actionText="Create+"
      />
      <CreateListModal
        onBackdropPress={() => {
          setIsModalVisible(false);
        }}
        onPress={listName => {
          console.log('Create List', listName);
          setIsModalVisible(false);
        }}
        isModalVisible={isModalVisible}
      />
      {isListEmpty ? (
        <>
          <View style={styles.listEmptyBodyContainer}>
            <ListPageSvgComponent style={styles.listPageIcon} />
            <Text style={styles.listPageTextDescription}>
              Don’t have a Shopping List?
            </Text>
            <AppButton
              style={styles.button}
              title="Create Now"
              onPress={() => {
                setIsModalVisible(true);
              }}
              width={60}
            />
          </View>
        </>
      ) : (
        <View style={styles.listItemContainer}>
          <View style={styles.listItemContainer}>
            <FlatList
              data={listArray}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    props.navigation.navigate(Constants.ListDetailsScreen);
                  }}
                  style={styles.listItemFlatlistContainer}>
                  <ListItemIconSvgConponent style={styles.listItemIcon} />
                  <Text style={styles.listItemText}>{item}</Text>
                  <Pressable
                    onPress={() => {}}
                    style={styles.rightActionContainer}>
                    <Text style={styles.rightActionText}>View</Text>
                    <ActionArrowSvgComponent style={styles.rightActionIcon} />
                  </Pressable>
                </Pressable>
              )}
              keyExtractor={index => `${index}`}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
  listEmptyBodyContainer: {
    alignItems: 'center',
    marginTop: common.W_10,
    backgroundColor: common.colors.white,
    marginHorizontal: common.W_15,
    borderRadius: common.W_3,
    paddingBottom: common.W_5,
  },
  listPageIcon: {
    marginTop: common.WP(10),
    alignSelf: 'center',
  },
  listPageTextDescription: {
    marginTop: common.WP(5),
    fontSize: common.W_4,
    width: common.W_30,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    marginTop: common.WP(5),
  },
  listItemContainer: {
    flex: 1,
    paddingHorizontal: common.W_3,
    backgroundColor: common.colors.background,
    marginTop: common.W_5,
  },
  listItemFlatlistContainer: {
    paddingVertical: common.W_3,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: common.colors.white,
    marginBottom: common.W_5,
    borderRadius: common.W_3,
  },
  listItemIcon: {
    marginHorizontal: common.W_5,
  },
  listItemText: {
    color: common.colors.black,
    flex: 1,
  },
  rightActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  rightActionText: {
    color: common.colors.lightPurple,
    fontSize: common.W_4,
  },
  rightActionIcon: {
    marginRight: common.W_5,
  },
});

export default ListScreen;
