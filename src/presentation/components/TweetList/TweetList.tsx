import React, {ReactElement, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { useGetTweets } from '../../../features/tweet/usecases/useGetTweets';
import { BasicStyle } from '../../../types';
import { Tweet } from '../Tweet/Tweet';

export function TweetList() {
  const {getTweets, tweets} = useGetTweets();

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        renderItem={tweet => <Tweet tweet={tweet.item} />}
      />
    </View>
  );
}

const styles: Partial<BasicStyle> = StyleSheet.create<Partial<BasicStyle>>({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
