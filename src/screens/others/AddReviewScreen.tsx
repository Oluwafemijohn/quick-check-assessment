import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Rating} from 'react-native-ratings';
import common from '../../constants/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AddReviewScreen(props: any) {
  const [ratingValue, setRatingValue] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>Review</Text>
        <Rating
          fractions={1}
          startingValue={ratingValue}
          imageSize={22}
          style={styles.rating}
          ratingCount={5}
          onFinishRating={(rating: number) => setRatingValue(rating)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.colors.white,
  },
  ratingContainer: {},
  ratingText: {},
  rating: {},
});

export default AddReviewScreen;
