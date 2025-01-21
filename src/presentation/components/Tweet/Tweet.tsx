import React, {ReactElement} from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import { ITweet } from '../../../features/tweet/interfaces';
import { styles } from './Tweet.styles';

interface ITweetProps {
  tweet: ITweet;
}

export function Tweet({tweet}: ITweetProps): ReactElement {
  if (!tweet.sender) {
    return <></>;
  }
  return (
    <View testID="tweet-wrapper" style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: tweet?.sender?.avatar || '',
          width: 40,
          height: 40,
        }}
      />
      <View style={styles.tweetContainer}>
        <View>
          <Text style={styles.sender}>
            {tweet?.sender?.nick || tweet?.sender?.username}
          </Text>
          {tweet?.content && (
            <Text testID="tweet-content" style={styles.text}>
              {tweet.content}
            </Text>
          )}
        </View>
        {tweet?.images?.length && (
          <View testID="tweet-images-wrapper" style={styles.imagesWrapper}>
            {tweet.images.map((image, index) => (
              <Image
                testID="tweet-image"
                key={image?.url || `image-${index}`}
                style={styles.image}
                source={{
                  uri: image?.url || '',
                  width: 64,
                  height: 64,
                }}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

