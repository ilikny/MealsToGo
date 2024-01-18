import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform, TouchableOpacity } from "react-native";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  width: 120px;
  height:100px;
  border-radius: 10px;
`;

const CompactWebView = styled(WebView)`
  width: 120px;
  height:100px;
  border-radius: 10px;
`;

const Box = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {

  const Image = isAndroid ? CompactWebView : CompactImage;

  return (
    <TouchableOpacity>
    <Box>
    <Image source={{uri: restaurant.photos[0]}} />
    <Text center variant="caption" numberOfLines={3}>{restaurant.name}</Text>
    </Box>
    </TouchableOpacity>
  )

}