import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import MeasurementsScreen from "./src/screens/MeasurementsScreen";
import { Colors } from "./src/assets/utils/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: Colors.white,
            },
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Measurements"
            component={MeasurementsScreen}
            options={{
              title: "Measurements",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
