import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function AddEventScreen({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bring, setBring] = useState("");
  const [attire, setAttire] = useState("");
  const [notes, setNotes] = useState("");

  const event = route.params;
  return (
    // <View style={{ backgroundColor: "white" }}>
    //   <Text style={styles.screenTitle}>New Event</Text>
    <SafeAreaView style={styles.containerBody}>
      <ScrollView>
        <View>
          <Text style={styles.label}> Title: </Text>
          <TextInput
            style={styles.textInput}
            value={title}
            onChangeText={(newText) => setTitle(newText)}
          />
        </View>
        <View>
          <Text style={styles.label}> Location: </Text>
          <TextInput
            style={styles.textInput}
            value={location}
            onChangeText={(newText) => setLocation(newText)}
          />
        </View>
        <View>
          <Text style={styles.label}> Date: </Text>
          <TextInput
            style={styles.textInput}
            value={date}
            onChangeText={(newText) => setDate(newText)}
          />
        </View>
        <View>
          <Text style={styles.label}> Start Time: </Text>
          <TextInput
            style={styles.textInput}
            value={startTime}
            onChangeText={(newText) => setStartTime(newText)}
          />
        </View>
        <View>
          <Text style={styles.label}> End Time: </Text>
          <TextInput
            style={styles.textInput}
            value={endTime}
            onChangeText={(newText) => setEndTime(newText)}
          />
        </View>
        <View>
          <Text style={styles.label}> To Bring: </Text>
          <TextInput
            style={styles.textInput}
            value={bring}
            onChangeText={(newText) => setBring(newText)}
          />
        </View>
        <View>
          <Text style={styles.label}> Attire: </Text>
          <TextInput
            style={styles.textInput}
            value={attire}
            onChangeText={(newText) => setAttire(newText)}
          />
        </View>
        <View>
          <Text style={styles.label}> Notes: </Text>
          <TextInput
            style={styles.textInput}
            value={notes}
            onChangeText={(newText) => setNotes(newText)}
          />
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Events", { event: title, date: date })
          }
        >
          <Text style={styles.addButton}> Add Event </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  screenTitle: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  containerBody: {
    backgroundColor: "#E3EBEE",
  },
  textInput: {
    marginLeft: 30,
    borderWidth: 1,
    width: "83%",
    padding: 10,
    borderColor: "#ccc",
    height: 35,
  },
  label: {
    marginTop: 30,
    marginLeft: 30,
  },
  addButton: {
    backgroundColor: "#0D532F",
    color: "white",
    textAlign: "center",
    padding: 10,
    marginLeft: 130,
    marginRight: 130,
    marginTop: 30,
    borderRadius: 20,
    marginBottom: 30,
  },
});
