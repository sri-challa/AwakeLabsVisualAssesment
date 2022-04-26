import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import React from "react";
import UserItem from "./UserItem";
import data from "../assets/data/data.json";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };

    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.setState({ userData: data.slice(0, 15) });
  }

  renderItem({ item }) {
    return <UserItem itemData={item} />;
  }

  render() {
    return (
      <View style={styles.flatlist}>
        <FlatList
          data={this.state.userData}
          renderItem={this.renderItem}
          keyExtractor={(item) => item._id.$oid}
        />
      </View>
    );
  }
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  heading: {
    fontSize: 100,
  },
  flatlist: {
    height: (85 / 100) * deviceHeight,
    marginTop: 10,
  },
});

export default UsersList;
