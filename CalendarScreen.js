import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import EventDetailScreen from "./EventDetailScreen";
import AddEventScreen from "./EventDetailScreen";
import * as SQLite from "expo-sqlite";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const db = SQLite.openDatabase("events.db");

const Stack = createStackNavigator();

export default function EventsStack({ navigation, route }) {
  const [events, setEvents] = useState(["IPPT"]);
  const [date, setDate] = useState(["12 June"]);

  function refreshEvents() {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT Title, Date FROM events",
        null,
        (txObj, { rows: { _array } }) => setEvents(_array),
        (txObj, error) => console.log("Error ", error)
      );
    });
  }

  useEffect(() => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `CREATE TABLE IF NOT EXISTS
				events
				(id INTEGER PRIMARY KEY AUTOINCREMENT,
				Title TEXT,
				Location TEXT,
				Date TEXT,
				Starts TEXT,
				Ends TEXT,
				To bring TEXT,
				Attire TEXT,
				Notes TEXT);`
        );
      },
      null,
      refreshEvents
    );
  }, []);

  function addEvent() {
    navigation.navigate("New Event");
  }

  function deleteEvent(id) {
    db.transaction(
      (tx) => {
        tx.executeSql(`DELETE FROM events WHERE id=${id}`);
      },
      null,
      refreshEvents
    );
  }

  useEffect(() => {
    if (route.params?.event) {
      db.transaction(
        (tx) => {
          tx.executeSql("INSERT INTO events (Title) VALUES (?)", [
            route.params.event,
          ]);
        },
        null,
        refreshEvents
      );
    }
  }, [route.params?.event]);

  // This adds the new event button in the header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addEvent} style={{ marginRight: 20 }}>
          <MaterialIcons name="add-alert" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });

  function renderItem({ item }) {
    return (
      //   <TouchableOpacity
      //     style={styles.eventStyle}
      //     onPress={() => navigation.navigate("Event Details", item.id)}
      //   >
      <View style={styles.eventStyle}>
        <Text style={{ fontSize: 16, textAlign: "left" }}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => deleteEvent(item.id)}
          //   style={{ marginRight: 10 }}
        >
          <Ionicons name="trash" size={20} color="#944" />
        </TouchableOpacity>
      </View>
      //   </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  eventStyle: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
