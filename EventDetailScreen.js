import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function EventDetailScreen() {
  return (
    <View>
      <View>
        <Text style={styles.screenTitle}>Event Details</Text>
      </View>
      <View style={styles.containterBody}>
        <Text style={styles.eventTitle}>IPPT Test</Text>
        <Text style={styles.eventInfo}>
          {`Thursday, 14 Jul 2022
From 12 PM to 1 PM`}
        </Text>

        <View>
          <Text> Location </Text>
          <Text> details..</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    alignItems: "center",
    marginTop: 60,
  },
  containerBody: {
    backgroundColor: "#40798C",
    margin: 30,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eventInfo: {
    fontsize: 15,
    color: "grey",
  },
});
