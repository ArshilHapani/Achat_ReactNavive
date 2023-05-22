import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const MainScreenHeader = () => {
  return (
    <>
      <SafeAreaView className="bg-white flex-row justify-between items-center pt-5 px-6">
        <TouchableOpacity>
          <SimpleLineIcons name="menu" size={24} color="#4400ca" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-search-sharp" size={27} color="#4400ca" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.opacityClass} />
    </>
  );
};

export default MainScreenHeader;

const styles = StyleSheet.create({
  opacityClass: {
    backgroundColor: "rgba(255,255,255,0.5)",
    position: "relative",
    bottom: 0,
    zIndex: 10,
  },
});
