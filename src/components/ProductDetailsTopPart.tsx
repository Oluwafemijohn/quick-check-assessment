import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Pressable } from 'react-native';
import { Rating } from 'react-native-ratings';
import common from '../constants/common';
import Constants from '../constants/Constants';
import { getProductReview } from '../network/Server';
import { IProduct, IReview, IReviews, ISingleProductObject } from '../types/Type';
import { nullOrUndefineCheck } from '../utilities';
import EmptyList from './EmptyList';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.',
    rating: 4,
    time: '5Hrs ago',
  },
  {
    id: 2,
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.',
    rating: 4,
    time: '5Hrs ago',
  },
  {
    id: 3,
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.',
    rating: 4,
    time: '5Hrs ago',
  },
];

function ProductDetailsTopPart({
  item,
  rating,
  onFinishRating,
  onPressIncrease,
  onPressDecrease,
  count,
}: {
  item: ISingleProductObject;
  rating: number;
  onFinishRating: (rating: number) => void;
  onPressIncrease: () => void;
  onPressDecrease: () => void;
  count: number;
}) {
  const navigation = useNavigation();
  const [isDescription, setIsDescription] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [reviews, setReviews] = useState<IReview[]>([]);

  const _getProductReview = async () => {
    await getProductReview()
      .then((res) => {
        if (res.statusCode === 200) {
          setReviews((res.payload as unknown as IReviews).reviews as IReview[])
        }
      })
      .catch(() => {

      })
  }

  useEffect(() => {
    _getProductReview();
  }, [])

  return (
    <View style={styles.topContainer}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.image}
      />
      <View style={styles.countCountainer}>
        <Pressable onPress={onPressDecrease} style={styles.countPress}>
          <Text style={styles.countPressText}>-</Text>
        </Pressable>
        <Text style={styles.count}>{count}</Text>
        <Pressable onPress={onPressIncrease} style={styles.countPress}>
          <Text style={styles.countPressText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.foodStyleContainer}>
          <Text style={styles.foodType}>Dairy</Text>
          <Rating
            startingValue={item.averageRating}
            imageSize={15}
            style={styles.rating}
            ratingCount={5}
            onFinishRating={onFinishRating}
          />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.productPriceBodyContainer}>
          <View style={styles.priceContainer}>
            <View style={styles.sherzAndMarketPriceContainer}>
              <Text style={styles.sherzPrice}>
                N{nullOrUndefineCheck(item ? item.price : '')}
              </Text>
              <View style={styles.sherzPriceLine}>
                <Text style={styles.sherzPriceText}>SHERZ PRICE</Text>
              </View>
            </View>
            <View style={styles.sherzAndMarketPriceContainer}>
              <Text style={styles.marketPrice}>
                N{nullOrUndefineCheck(item ? item.market_price : '')}
              </Text>
              <View style={styles.marketPriceLine}>
                <Text style={styles.sherzPriceText}>MARKET PRICE</Text>
              </View>
            </View>
          </View>
          <Image
            source={require('../../assets/Icon_love.png')}
            style={styles.favouritIcon}
          />
        </View>

        <View style={styles.productDescriptionContainer}>
          <Pressable
            onPress={() => {
              setIsDescription(!isDescription);
            }}
            style={styles.productDescriptionButton}>
            <Text style={styles.productDescriptionButtonText}>Description</Text>
            <Image
              source={
                isDescription
                  ? require('../../assets/Icon_close.png')
                  : require('../../assets/Icon_open.png')
              }
            />
          </Pressable>
          {isDescription && (
            <Text style={styles.productDescription}>
              {nullOrUndefineCheck(item ? item.description : '')}
            </Text>
          )}
        </View>
        <View style={styles.productReviewContainer}>
          <Pressable
            onPress={() => {
              setIsReview(!isReview);
            }}
            style={styles.productDescriptionButton}>
            <Text style={styles.productDescriptionButtonText}>
              Reviews and ratings
            </Text>
            <Image
              source={
                isReview
                  ? require('../../assets/Icon_close.png')
                  : require('../../assets/Icon_open.png')
              }
            />
          </Pressable>
          <Pressable
            onPress={() => {
              //@ts-ignore
              navigation.navigate(Constants.AddReviewScreen, item);
            }}
            style={styles.addReviewButton}>
            <Text style={styles.addReview}>Add review</Text>
            <Image
              source={require('../../assets/plus-icon.png')}
              style={styles.plusIcon}
            />
          </Pressable>
          {item.reviews.length !== 0 ? (
            <>
              {isReview && (
                <View style={styles.containerForReview}>
                  {reviews.map((review, index) => (
                    <View key={index}>
                      <View style={styles.reviewContainer}>
                        <View style={styles.nameAndRatingContainer}>
                          <View style={styles.nameContainer}>
                            <Text style={styles.reviewName}>
                              {review.product.name}
                              {'   '}
                              <Text style={styles.reviewTime}>
                                {moment(review.createdAt, 'YYYY-MM-DD').fromNow()}
                              </Text>
                            </Text>
                          </View>
                          <View style={styles.ratingContainer} >
                            <Image
                              source={require('../../assets/star.png')}
                              style={styles.star}
                            />
                            <Text style={styles.reviewRating}>{review.rating}</Text>
                          </View>
                        </View>
                        <Text style={styles.content}>
                          {review.comment}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}
            </>
          ) : (
            <>{isReview && <EmptyList />}</>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.7,
  },
  image: {
    width: common.W_100_PERCENT,
    height: common.HP('30%'),
    resizeMode: 'stretch',
  },
  detailsContainer: {
    flex: 1,
    // marginTop: common.W_10,
    backgroundColor: common.colors.white,
    borderTopLeftRadius: common.W_10,
    borderTopRightRadius: common.W_10,
    paddingHorizontal: common.W_10,
  },
  foodStyleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodType: {
    fontSize: common.WP('4%'),
    marginTop: common.W_5,
    color: common.colors.black,
  },
  rating: {
    marginTop: common.W_5,
  },
  productDescriptionContainer: {
    paddingVertical: common.W_5,
    borderTopColor: common.colors.lightGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: common.colors.lightGrey,
    marginTop: common.W_5,
  },
  productReviewContainer: {
    paddingVertical: common.W_5,
    borderBottomWidth: 1,
    borderBottomColor: common.colors.lightGrey,
  },
  productPriceBodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favouritIcon: {
    marginLeft: common.W_5,
    marginVertical: common.W_2,
  },
  productName: {
    marginVertical: common.W_2,
    fontSize: common.W_5,
    fontWeight: 'bold',
    color: common.colors.black,
  },
  sherzAndMarketPriceContainer: {
    marginRight: common.W_5,
  },
  sherzPrice: {
    color: common.colors.paleYellow,
    fontSize: common.W_6,
  },
  marketPrice: {
    color: common.colors.red,
    fontSize: common.W_6,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  sherzPriceLine: {
    paddingVertical: common.W_1,
    paddingHorizontal: common.W_2,
    backgroundColor: common.colors.lightGreen,
    borderRadius: common.W_4,
  },
  marketPriceLine: {
    paddingVertical: common.W_1,
    paddingHorizontal: common.W_2,
    backgroundColor: common.colors.black,
    borderRadius: common.W_4,
  },
  sherzPriceText: {
    fontSize: common.WP(2.5),
    color: common.colors.white,
  },
  productDescriptionButton: {
    flexDirection: 'row',
  },
  productDescriptionButtonText: {
    fontSize: common.W_4,
    fontWeight: 'bold',
    flex: 1,
  },
  productDescription: {
    marginTop: common.W_5,
  },
  reviewFlatlistContainer: {
    marginTop: common.W_1,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  reviewContainer: {
    marginTop: common.W_3,
    paddingVertical: common.W_5,
    backgroundColor: common.colors.lightLightGrey,
    paddingHorizontal: common.W_5,
    borderRadius: common.W_2,
  },
  nameAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerForReview: {},
  addReviewButton: {
    flexDirection: 'row',
    width: common.W_30,
    alignItems: 'center',
    paddingVertical: common.W_2,
    justifyContent: 'center',
    marginTop: common.W_2,
    borderWidth: 1,
    borderColor: common.colors.lightPurple,
    borderRadius: common.W_3,
  },
  reviewName: {
    fontSize: common.W_4,
    fontWeight: 'bold',
  },
  addReview: {
    fontSize: common.W_4,
    color: common.colors.lightPurple,
  },
  plusIcon: {
    width: common.W_4,
    height: common.W_4,
    marginLeft: common.W_2,
  },
  reviewRating: {
    fontSize: common.W_3,
    marginRight: common.WP(-14),
    marginTop: common.W_1,
  },
  star: {
    width: common.W_5,
    height: common.W_5,
  },
  content: {
    fontSize: common.W_3,
    marginTop: common.W_2,
  },
  countCountainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: common.W_10,
  },
  reviewTime: {
    fontSize: common.W_3,
    color: common.colors.lightGrey,
    marginLeft: common.W_10,
  },
  countPress: {
    paddingHorizontal: common.W_4,
    paddingVertical: common.W_5,
    borderWidth: 1,
    borderColor: common.colors.paleYellow,
    borderRadius: common.W_2,
  },
  count: {
    fontSize: common.W_4,
    marginHorizontal: common.W_5,
  },
  countPressText: {
    fontSize: common.W_3,
  },
});

export default ProductDetailsTopPart;
