import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Vibration,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { appTheme } from "../../utils/theme";
import { useStateContext } from "../../context/stateContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();
  const { showSnackbar } = useStateContext();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  useEffect(() => {
    navigation.setOptions({
      animation: "slide_from_bottom",
      headerShown: false,
    });
  }, []);
  function handleSubmit() {
    if (user.name === "" || user.password === "") {
      Vibration.vibrate(100);
      showSnackbar("Please enter all the required fields", "error");
      return;
    }
    navigation.navigate("Home");
    showSnackbar("Welcome to AChat! we are happy to have you.", "success");
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled>
      <SafeAreaView className="flex-1 bg-violet-100 items-center">
        <View className=" mt-10  flex-row items-end ">
          <Image
            source={require("../../assets/images/logo-zigma.svg")}
            className="h-50 w-50 "
          />
          <Text
            className=" text-[#213ae8] text-4xl"
            style={{ fontFamily: appTheme.fonts.alefBold }}
          >
            Chat
          </Text>
        </View>
        <View
          className="items-start mt-20 "
          style={{ width: Dimensions.get("window").width / 1.2 }}
        >
          <Text
            className="text-gray-500 text-lg font-semibold"
            style={{ fontFamily: appTheme.fonts.acmeReg }}
          >
            Create username
          </Text>
          <View className="bg-violet-200 w-full mt-2 rounded-md p-3 items-center flex-row">
            <FontAwesome name="user" size={20} color="#564592" />
            <TextInput
              className="ml-3 flex-1 "
              placeholder="create username"
              placeholderTextColor="#564592"
              keyboardType="numbers-and-punctuation"
              cursorColor="#b892ff"
              onChangeText={(text) => setUser({ ...user, name: text })}
            />
          </View>
          <Text
            className="text-gray-500 mt-4 text-lg font-semibold"
            style={{ fontFamily: appTheme.fonts.acmeReg }}
          >
            Create password
          </Text>
          <View className="bg-violet-200 w-full mt-2 rounded-md p-3 items-center flex-row ">
            <FontAwesome name="lock" size={20} color="#564592" />
            <TextInput
              className="ml-3 flex-1 "
              placeholder="create password"
              placeholderTextColor="#564592"
              keyboardType="numbers-and-punctuation"
              cursorColor="#b892ff"
              secureTextEntry={showPassword ? true : false}
              onChangeText={(text) => setUser({ ...user, password: text })}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Feather name="eye-off" size={24} color="#564592" />
              ) : (
                <Feather name="eye" size={24} color="#564592" />
              )}
            </TouchableOpacity>
          </View>
          <Button
            className="bg-violet-300 rounded-lg my-6"
            onPress={handleSubmit}
          >
            <Text className="text-[#702b9e] text-lg">Sign in</Text>
          </Button>
        </View>

        <Divider className="w-10/12 mt-10  bg-violet-600 " />
        <Text
          className="text text-3xl  mt-4 text-violet-500"
          style={{ fontFamily: appTheme.fonts.acmeReg }}
        >
          or
        </Text>
        <TouchableOpacity
          className=" bg-[#4f86eb] items-center flex-row mt-7  "
          style={{ padding: 2 }}
        >
          <Image
            source={require("../../assets/images/Google_g.jpeg")}
            className="h-10 w-10"
          />

          <Text className="text-white mx-4 text-lg py-1">
            Sign in with google
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
