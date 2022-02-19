import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Rating} from 'react-native-ratings';
import AppButton from '../../components/form/AppButton';
import AppTextInputTextArea from '../../components/form/AppTextInputTextArea';
import common from '../../constants/common';
import TextConstant from '../../constants/TextConstant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AddReviewScreen(props: any) {
  const [ratingValue, setRatingValue] = useState(1);
  const [review, setReview] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <View style={styles.line} />
        <Text style={[styles.ratingText, {alignSelf: 'center'}]}>
          {TextConstant.overallRating}
        </Text>
        <Rating
          fractions={1}
          startingValue={ratingValue}
          imageSize={40}
          style={styles.rating}
          ratingCount={5}
          onFinishRating={(rating: number) => setRatingValue(rating)}
        />
        <View style={styles.line} />
        <Text style={styles.ratingText}>{TextConstant.likeOrDislike}</Text>
        <AppTextInputTextArea
          placeholder={TextConstant.addReview}
          style={styles.textArea}
          onChangeText={text => setReview(text as string)}
          value={review}
          width={common.WP('80%')}
          numberOfLines={10}
          multiline={true}
        />
        <View style={styles.line} />
        <AppButton
          style={styles.button}
          title="Submit Review"
          onPress={() => {}}
          width={80}
          marginTop={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.white,
    paddingHorizontal: common.W_10,
  },
  ratingContainer: {},
  ratingText: {
    color: common.colors.black,
    fontSize: common.W_4,
    fontWeight: 'bold',
    marginTop: common.W_5,
  },
  rating: {
    alignSelf: 'flex-start',
    width: '100%',
    marginTop: common.W_5,
  },
  textArea: {
    alignSelf: 'center',
    height: common.WP(30),
  },
  button: {},
  line: {
    borderBottomWidth: 1,
    borderBottomColor: common.colors.veryLighrGrey,
    marginTop: common.W_5,
  },
});

export default AddReviewScreen;
