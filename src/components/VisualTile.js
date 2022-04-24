import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { anxietyStateColor, heartRateColor } from "../assets/utils/commonUtil";
import { Colors } from "../assets/utils/colors";

const VisualTile = (props) => {
  const { measureName, measureValue } = props;

  const images = {
    participant: require("../assets/images/avatar.png"),
    wearable: require("../assets/images/watch.png"),
    currentBPM: require("../assets/images/heart.png"),
    anxietyLevel: require("../assets/images/anxietyLevel.png"),
    anxietyState: require("../assets/images/anxietyState.png"),
    baselineProgress: require("../assets/images/baseLine.jpeg"),
    careTeam: require("../assets/images/careTeam.jpeg"),
    organization: require("../assets/images/organization.png"),
  };

  function content() {
    let contents = {
      name: "",
      value: "",
      image: "",
    };
    switch (measureName) {
      case "participantName":
        contents.name = "Bob Marley";
        contents.image = images.participant;
        break;
      case "currentBPM":
        contents.name = "Heart rate";
        contents.image = images.currentBPM;
        contents.value = measureValue;
        break;
      case "anxietyLevel":
        contents.name = "Anxiety Level";
        contents.image = images.anxietyLevel;
        contents.value = `${measureValue}`;
        break;
      case "anxietyState":
        contents.name = "Anxiety State";
        contents.image = images.anxietyState;
        contents.value = measureValue;
        break;
      case "baselineProgress":
        contents.name = "Baseline Progress";
        contents.image = images.baselineProgress;
        contents.value = `${measureValue}%`;
        break;
      case "careTeamName":
        contents.name = "Team Prime";
        contents.image = images.careTeam;
        break;
      case "organizationName":
        contents.name = "24hr HomeCare";
        contents.image = images.organization;
        break;
      default:
        contents.image = "";
        contents.value = "";
        contents.name = "";
    }
    return contents;
  }

  function getContent(getName, getValue) {
    if (getName) {
      const names = content();
      return names.name;
    } else if (getValue) {
      const values = content();
      return values.value;
    } else {
      const images = content();
      return images.image;
    }
  }

  function getTextStyle(measureValue, measureName) {
    if (measureName === "anxietyState") {
      const color = anxietyStateColor(measureValue);
      return { color: color };
    } else if (measureName === "currentBPM") {
      const color = heartRateColor(measureValue);
      return { color: color };
    }
  }

  function rightSideContent() {
    const displayContent = getContent(false, true);
    if (displayContent) {
      return (
        <Text style={[styles.value, getTextStyle(measureValue, measureName)]}>
          {displayContent}
        </Text>
      );
    } else {
      return (
        <Image
          style={styles.rightArrow}
          source={require("../assets/images/rightArrow.png")}
        />
      );
    }
  }

  return (
    <View>
      <View style={styles.main}>
        <TouchableOpacity>
          <View style={styles.container}>
            <Image style={styles.avatar} source={getContent(false, false)} />
            <Text style={styles.name}>{getContent(true, false)}</Text>
            {rightSideContent()}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const devicewidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    margin: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 75,
    width: (90 / 100) * devicewidth,
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
    marginLeft: 20,
  },
  value: {
    fontSize: 20,
    marginLeft: "auto",
    fontWeight: "800",
  },
  rightArrow: {
    width: 25,
    height: 25,
    marginLeft: "auto",
  },
});

export default VisualTile;
