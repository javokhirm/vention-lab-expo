import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const travelNews = [
  {
    id: "1",
    img: "https://masterpiecer-images.s3.yandex.net/34e974e177bb11ee9ad5ceda526c50ab:upscaled",
    title: "test title 1",
    text: "test text 1",
  },
  {
    id: "2",
    img: "https://avatars.mds.yandex.net/get-shedevrum/12802896/img_1c9cb71284e411efa330f636562e75f7/orig",
    title: "test title 2",
    text: "test text 2",
  },
  {
    id: "3",
    img: "https://avatars.mds.yandex.net/get-shedevrum/14279540/img_095c32aa852311efbf59c6c9289df30b/orig",
    title: "test title 3",
    text: "test text 3 test text 3 test text 3 test text 3 test text 3 test text 3test text 3 test text 3test text 3test text 3test text 3",
  },
];

function newsItem() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const newsItem = travelNews.find((item) => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: newsItem ? newsItem.title : "News Item",
    });
  }, [navigation, newsItem]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}> {newsItem?.title}</Text>
        <Image
          source={{ uri: newsItem?.img }}
          style={styles.img}
        />
        <Text style={styles.description}> {newsItem?.text} </Text>
        <Text style={styles.description}> {newsItem?.footer} </Text>
      </View>
    </ScrollView>
  );
}

export default newsItem;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2e2",
  },
  item: {
    margin: "50px 0",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    paddingBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#000",
    paddingTop: 20,
  },
  img: {
    width: "100%",
    height: 400,
    borderRadius: 5,
  },
  heading: {
    textAlign: "center",
    fontSize: 34,
    color: "#fff",
    fontWeight: "bold",
  },
});
