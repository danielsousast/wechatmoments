import React, {ReactElement, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import { useGetProfile } from '../../../features/user/usecases/useGetProfile';
import { styles } from './Header.styles';

export function Header(): ReactElement {
  const {user, getProfile} = useGetProfile();

  useEffect(() => {
    getProfile()
  }, []);

  return (
    <View style={styles.container} testID="header-container">
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: user?.profileImage,
        }}>
        <View style={styles.userWrapper}>
          <Text testID="header-username" style={styles.text}>
            {user?.nick}
          </Text>
          <Image
            style={styles.image}
            source={{
              width: 64,
              height: 64,
              uri: user?.avatar,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}


