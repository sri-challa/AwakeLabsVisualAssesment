import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { anxietyStateColor } from "../assets/utils/commonUtil";
import { Colors } from "../assets/utils/colors";

const UserItem = (props) => {
  const { itemData } = props;
  const navigation = useNavigation();

  function visualOnePressed() {
    navigation.navigate("VisualOne", {
      data: {
        participantName: itemData.participantId,
        wearableDevice: itemData.wearableId,
        currentBPM: itemData.currentBpm,
        anxietyLevel: itemData.anxietyLevel,
        anxietyState: itemData.anxietyState,
        baselineProgress: itemData.baselineProgress,
        careTeamName: itemData.careTeamId,
        organizationName: itemData.organizationId,
        batteryLevel: itemData.state.batteryLevel,
        lastUpdate: itemData.updatedAt.$date,
      },
    });
  }

  const anxietyTextColor = {
    color: anxietyStateColor(itemData.anxietyState),
  };

  const anxietyContainerColor = {
    borderColor: anxietyStateColor(itemData.anxietyState),
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={visualOnePressed}>
        <View style={styles.container}>
          <Image
            style={styles.avatar}
            source={require("../assets/images/avatar.png")}
          />
          <Text style={styles.name}>Bob Marley</Text>
          <View style={styles.visualButtons}>
            <View style={[styles.anxietyContainer, anxietyContainerColor]}>
              <Text style={[styles.anxietyText, anxietyTextColor]}>
                {itemData.anxietyState}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    margin: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 75,
    width: "90%",
    backgroundColor: Colors.primaryGray,
    alignItems: "center",
    padding: 7.5,
    borderRadius: 10,
  },
  avatar: {
    width: 55,
    height: 55,
    borderColor: Colors.secondaryGray,
    borderWidth: 0.5,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
    flexGrow: 2,
    textAlign: "center",
  },
  visualButtons: {
    flexBasis: "22%",
  },
  anxietyContainer: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  anxietyText: {
    textAlign: "center",
    fontSize: 12,
  },
});

export default UserItem;
