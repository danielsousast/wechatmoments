import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { BasicStyle } from "../../../types";

interface AdditionalStyles {
    backgroundImage: ImageStyle;
    userWrapper: ViewStyle;
  }
  
 export const styles: Partial<BasicStyle> & AdditionalStyles = StyleSheet.create<
    Partial<BasicStyle> & AdditionalStyles
  >({
    container: {
      height: 230,
      backgroundColor: 'white',
    },
    image: {
      marginBottom: -24,
      marginRight: 24,
      backgroundColor: '#e4f0f5',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18,
      marginRight: 20,
    },
    backgroundImage: {
      width: '100%',
      height: 200,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      backgroundColor: '#f5f5f5',
    },
    userWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });