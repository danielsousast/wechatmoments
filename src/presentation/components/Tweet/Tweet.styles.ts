import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { BasicStyle } from "../../../types";

interface AdditionalStyle {
    imagesWrapper: ViewStyle;
    tweetContainer: ViewStyle;
    sender: TextStyle;
  }
  

export const styles: Partial<BasicStyle> & AdditionalStyle = StyleSheet.create<
  Partial<BasicStyle> & AdditionalStyle
>({
  container: {
    flex: 1,
    alignContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 8,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  image: {
    marginRight: 16,
    backgroundColor: '#e4f0f5',
  },
  imagesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 8,
    paddingBottom: 8,
  },
  tweetContainer: {
    flexShrink: 1,
  },
  text: {
    flexWrap: 'wrap',
    flexShrink: 1,
    color: '#a1a1a1',
  },
  sender: {
    color: '#4152c9',
    fontWeight: '600',
  },
});