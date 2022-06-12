import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import EventDetailScreen from "./EventDetailScreen";
import AddEventScreen from "./AddEventScreen";
import CalendarScreen from "./CalendarScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Events"
        component={CalendarScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="New Event"
        component={AddEventScreen}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen name="Event Details" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}
