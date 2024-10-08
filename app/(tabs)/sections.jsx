import React, { useState } from "react";
import { Text, View, SectionList, Image, StyleSheet } from "react-native";

export const news = [
  {
    data: [
      {
        title: "title 1",
        img: "https://avatars.mds.yandex.net/get-shedevrum/14515781/img_01bb4e2484ec11ef9dfde64959f934a7/orig",
        description: "data description text 1",
      },
      {
        title: "title 2",
        img: "https://avatars.mds.yandex.net/get-shedevrum/14515781/img_01bb4e2484ec11ef9dfde64959f934a7/orig",
        description: "data description text 2",
      },
    ],
  },
];
const Sections = () => {
  const [data, setData] = useState(news);
  const [refreshing, setRefreshing] = useState(false);

  const Item = ({ title, description, img }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={{ uri: img }}
        style={styles.img}
      />
      <Text style={styles.description}>{description}</Text>
    </View>
  );

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setData(news);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item.title + index}
        renderItem={({ item }) => (
          <Item
            description={item.description}
            img={item.img}
            title={item.title}
          />
        )}
        renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    rowGap: "50px",
    backgroundColor: "#2E2E2E",
    overflow: "visible",
    padding: "50px 0",
    width: "100%",
    alignItems: "center",
  },
  item: {
    padding: "50px 0",
    width: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#fff",
  },
  img: {
    width: 350,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
});
