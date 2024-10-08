import { Link } from "expo-router";
import React, { useState } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
const travelNews = [
  {
    id: "1",
    img: "https://masterpiecer-images.s3.yandex.net/34e974e177bb11ee9ad5ceda526c50ab:upscaled",
    title: "Test news 1",
    description: "Test description 1",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    id: "2",
    img: "https://avatars.mds.yandex.net/get-shedevrum/12802896/img_1c9cb71284e411efa330f636562e75f7/orig",
    title: "Test news 2",
    description: "Test description 2",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    id: "3",
    img: "https://avatars.mds.yandex.net/get-shedevrum/14279540/img_095c32aa852311efbf59c6c9289df30b/orig",
    title: "Test news 3",
    description: "Test description 3",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
];
const App = () => {
  const [data, setData] = useState(travelNews);
  const [refreshing, setRefreshing] = useState(false);

  const Item = ({ id, title, description, img }) => (
    <View style={styles.item}>
      <Link href={{ pathname: "/item/[id]", params: { id } }}>
        <View>
          <Text style={styles.title}> {title}</Text>
          <Image
            source={{ uri: img }}
            style={styles.img}
          />
        </View>
      </Link>
      <Text
        numberOfLines={3}
        style={styles.description}
      >
        {description}
      </Text>
    </View>
  );

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setData(travelNews);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>news</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemsContainer}>
            <Item
              id={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 50,
    overflow: "hidden",
  },
  itemsContainer: {
    marginBottom: "50px",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    rowGap: "50px",
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "50px",
  },
  description: {
    fontSize: 18,
    color: "#fefefe",
  },
  img: {
    width: "500px",
    objectFit: "cover",
    height: "200px",
    borderRadius: 5,
  },
  containerTitle: {
    textAlign: "center",
    fontSize: 42,
    textTransform: "uppercase",
    color: "#fff",
  },
});
