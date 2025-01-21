import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Header } from '../../components/Header/Header';
import { TweetList } from '../../components/TweetList/TweetList';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TweetList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
