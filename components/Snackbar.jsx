import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Lottie from "lottie-react-native";
import { IconButton } from "react-native-paper";
import { useStateContext } from "../context/stateContext";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const Snackbar = () => {
  const { snackbar, setSnackbar } = useStateContext();
  const { message, type, show } = snackbar;
  if (!show) return null;
  return (
    <TouchableWithoutFeedback
      onPress={() => setSnackbar({ ...snackbar, show: false })}
    >
      <ImageBackground
        style={{
          height,
          width,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 100,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
        }}
        blurRadius={90}
        source={require("../assets/images/semiTransparent.png")}
      >
        <View
          style={{
            borderBottomWidth: 5,
            borderBottomColor:
              type === "error"
                ? "#d84646"
                : type === "warning"
                ? "#f68a1c"
                : type === "info"
                ? "#1e95d6"
                : type === "success"
                ? "#4e9a51"
                : "#fff",
            backgroundColor: "#fff",
            marginTop: 70,
            marginHorizontal: 20,
          }}
          className="flex-row items-center rounded-md p-2 "
        >
          {type === "error" ? (
            <Lottie
              source={require("../lotties/error.json")}
              autoPlay
              style={{ height: 35, width: 35 }}
              loop={false}
            />
          ) : type === "warning" ? (
            <Lottie
              source={require("../lotties/warning.json")}
              autoPlay
              style={{ height: 40, width: 40 }}
              loop={false}
            />
          ) : type === "info" ? (
            <Lottie
              source={require("../lotties/info.json")}
              autoPlay
              style={{ height: 38, width: 38 }}
              loop={false}
            />
          ) : type === "success" ? (
            <Lottie
              source={require("../lotties/success.json")}
              autoPlay
              style={{ height: 35, width: 35 }}
              loop={false}
            />
          ) : (
            <AntDesign name="question" size={24} color="black" />
          )}
          <Text
            className="flex-1 ml-3 text-sm font-semibold "
            style={{
              color:
                type === "error"
                  ? "#d84646"
                  : type === "warning"
                  ? "#f68a1c"
                  : type === "info"
                  ? "#1e95d6"
                  : type === "success"
                  ? "#4e9a51"
                  : "#fff",
            }}
          >
            {message}
          </Text>
          <IconButton
            icon="close"
            onPress={() => setSnackbar({ ...snackbar, show: false })}
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Snackbar;
