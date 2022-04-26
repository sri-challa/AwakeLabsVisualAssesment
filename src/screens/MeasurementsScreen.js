import { View, Text, StyleSheet, ScrollView } from "react-native";
import VisualTile from "../components/VisualTile";
import { dateAndTime } from "../assets/utils/commonUtil";
import { Colors } from "../assets/utils/colors";

const MeasurementsScreen = ({ route }) => {
  const { data } = route.params;

  function displayDateAndTime() {
    const stringDateAndTime = dateAndTime(data.lastUpdate);
    return ` ${stringDateAndTime.updatedDate} at ${stringDateAndTime.updatedTime}`;
  }

  function Tile() {
    const tileContent = Object.entries(data).map(([key, val], index) => {
      if (
        key === "batteryLevel" ||
        key === "lastUpdate" ||
        key === "wearableDevice"
      ) {
        return;
      }
      return <VisualTile key={index} measureName={key} measureValue={val} />;
    });

    return tileContent;
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        {Tile()}
        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <Text style={styles.footerLeft}>Wearable Device:</Text>
            <Text style={styles.footerRight}>Apple Watch Series 6</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerLeft}>Battery Level:</Text>
            <Text style={styles.footerRight}>
              {`${data.batteryLevel * 100}%`}
            </Text>
          </View>
          <View>
            <Text>
              Last Updated on:
              <Text style={{ color: Colors.primaryRed }}>
                {displayDateAndTime()}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15,
  },
  heading: {
    fontSize: 10,
    color: Colors.primaryRed,
  },
  footerContainer: {
    alignItems: "center",
    bottom: 0,
    marginTop: 15,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "75%",
  },
  footerLeft: {
    flexGrow: 2,
  },
  footerRight: {
    color: Colors.primaryRed,
    flexGrow: 1,
  },
});

export default MeasurementsScreen;
