import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/form/AppButton';
import HeaderBar from '../../components/HeaderBar';
import SaveMarkSvgComponent from '../../components/svg/SaveMarkSvgComponent';
import common from '../../constants/common';
import {deliverySummary} from '../../constants/ConstantString';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ListSummaryScreen(props: any) {
  return (
    <View style={styles.container}>
      <HeaderBar
        onPressActionText={() => {}}
        title={TextConstant.listSummary}
        actionText=" "
      />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.deliveryDetails}>
            <Text style={styles.deliveryAddress}>Delivery Address</Text>
            <Text style={styles.address}>
              No 1, Benson Street, Gbagada, Lagos.
            </Text>
            <View style={styles.locationContainerAndDeliveryDay}>
              <View style={styles.locationContainer}>
                <Text style={styles.title}>Location</Text>
                <Text style={styles.locationDeliveryDayText}>Gbagada</Text>
              </View>
              <View style={styles.locationContainer}>
                <Text style={styles.title}>Delivery Day</Text>
                <Text style={styles.locationDeliveryDayText}>Monday</Text>
              </View>
            </View>
          </View>
          <View style={styles.list}>
            {deliverySummary.map((item, index: number) => {
              return (
                <View style={styles.listItem} key={index}>
                  <Text style={styles.listItemText}>{item.productName}</Text>
                  <View style={styles.row}>
                    <View style={styles.listItemColumn}>
                      <Text style={styles.listItemTwo}>Qty:</Text>
                      <Text style={styles.listItemValue}>{item.quantity}</Text>
                    </View>
                    <View style={styles.listItemColumn2}>
                      <Text style={styles.listItemTwo}>Member price</Text>
                      <Text style={styles.listItemValue}>
                        {item.membershipPrice}
                      </Text>
                    </View>
                    <View style={styles.listItemColumn2}>
                      <Text style={styles.total}>Total</Text>
                      <Text style={styles.listItemValue}>{item.total}</Text>
                    </View>
                    <View style={styles.listItemColumn3}>
                      <Text style={styles.retailPrice}>Retail price</Text>
                      <Text style={styles.listItemValue}>
                        {item.retailPrice}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalOrder}>Order Total</Text>
            <View style={styles.totalOrderRow}>
              <Text style={styles.totalOrderValue}>13,500</Text>
              <Text style={styles.totalOrderRetailer}>14,850</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.youSave}>You save</Text>
          <View style={styles.savedContainer}>
            <Text style={styles.savedBalance}>
              #1,350 <Text style={styles.perMonth}>/ month</Text>
            </Text>
            <SaveMarkSvgComponent style={styles.svg} />
          </View>
        </View>
        <AppButton
          style={styles.button}
          title="Confirm"
          onPress={() => {}}
          width={80}
          marginBottom={10}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.background,
  },
  content: {
    paddingVertical: common.W_6,
    paddingHorizontal: common.W_10,
    backgroundColor: common.colors.white,
    marginTop: common.W_5,
  },
  deliveryDetails: {
    borderBottomColor: common.colors.veryLighrGrey,
    borderBottomWidth: 1,
    borderTopColor: common.colors.veryLighrGrey,
    borderTopWidth: 1,
    paddingVertical: common.W_3,
  },
  deliveryAddress: {
    fontSize: common.W_4,
    color: common.colors.lightDarkText,
  },
  address: {
    color: common.colors.black,
    fontSize: common.WP(4.5),
    marginTop: common.W_2,
  },
  locationContainerAndDeliveryDay: {
    flexDirection: 'row',
    marginTop: common.W_6,
  },
  locationContainer: {
    width: common.WP(40),
  },
  title: {
    fontSize: common.WP(4),
    color: common.colors.lightDarkText,
  },
  locationDeliveryDayText: {
    fontSize: common.WP(4),
    color: common.colors.black,
    marginTop: common.W_3,
  },
  list: {
    marginTop: common.W_4,
    // paddingVertical: common.W_4,
    borderTopColor: common.colors.veryLighrGrey,
    borderTopWidth: 1,
  },
  listItem: {
    borderBottomColor: common.colors.veryLighrGrey,
    borderBottomWidth: 1,
    paddingBottom: common.W_3,
  },
  listItemText: {
    marginTop: common.W_4,
  },
  row: {
    flexDirection: 'row',
    marginTop: common.W_4,
  },
  listItemColumn: {
    width: common.WP(20),
    alignItems: 'flex-start',
  },
  listItemColumn2: {
    width: common.WP(20),
    alignItems: 'center',
  },
  listItemColumn3: {
    width: common.WP(20),
    alignItems: 'flex-end',
  },
  listItemTwo: {
    fontSize: common.WP(3),
    color: common.colors.lightDarkText,
  },
  total: {
    fontSize: common.WP(3),
    color: common.colors.lightPurple,
  },
  retailPrice: {
    fontSize: common.WP(3),
    color: common.colors.paleRed,
  },
  listItemValue: {
    fontSize: common.WP(4),
    color: common.colors.black,
    marginTop: common.W_3,
  },
  totalContainer: {
    flexDirection: 'row',
    marginTop: common.W_4,
  },
  totalOrder: {
    fontSize: common.WP(4),
    color: common.colors.lightGreen,
    width: common.WP(40),
  },
  totalOrderRow: {
    flexDirection: 'row',
  },
  totalOrderValue: {
    width: common.WP(20),
    textAlign: 'center',
    color: common.colors.lightGreen,
  },
  totalOrderRetailer: {
    width: common.WP(20),
    textAlign: 'right',
    color: common.colors.paleRed,
  },
  youSave: {
    fontSize: common.W_3,
    color: common.colors.lightDarkText,
  },
  bottomContainer: {
    marginTop: common.W_10,
    marginHorizontal: common.W_10,
    backgroundColor: common.colors.white,
    paddingVertical: common.W_5,
    marginBottom: common.W_10,
    paddingHorizontal: common.W_5,
    borderRadius: common.W_2,
  },
  savedContainer: {
    flexDirection: 'row',
  },
  savedBalance: {
    flex: 1,
    fontSize: common.W_5,
    marginTop: common.W_2,
  },
  perMonth: {
    fontSize: common.W_3,
  },
  button: {
    alignSelf: 'center',
  },
  svg: {
    marginTop: common.W_3,
  },
});

export default ListSummaryScreen;
