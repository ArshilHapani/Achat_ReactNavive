import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { appTheme } from "../../utils/theme";

const ChatScreen = () => {
  const navigator = useNavigation();
  const router = useRoute();
  const { name, message, image, time } = router.params;
  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: false,
      animation: "slide_from_bottom",
    });
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1">
        {/* Heder */}
        <View className="bg-white w-full">
          <View className="flex-row mx-3 mt-6 mb-2 items-start justify-between">
            <TouchableOpacity>
              <Ionicons
                name="ios-arrow-back"
                onPress={() => navigator.goBack()}
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <View className="justify-center items-center">
              <Image
                source={image}
                style={{ width: 50, height: 50, borderRadius: 100 }}
              />
              <Text
                className="text-xl"
                style={{ fontFamily: appTheme.fonts.alefReg }}
              >
                {name}
              </Text>
              <Text className="text-gray-500">Active now</Text>
            </View>
            <TouchableOpacity>
              <SimpleLineIcons name="options" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          className="h-full w-full"
          source={require("../../assets/images/purpleBg.jpg")}
        >
          <View
            className="bg-white h-[55%] w-full relative "
            style={{ borderBottomRightRadius: 40, borderBottomLeftRadius: 40 }}
          >
            <View className="flex-row w-full ">
              <Image source={image} className="h-8 w-8 rounded-full ml-3 " />
              <View
                className="bg-gray-300 p-4 w-[30%] ml-2 rounded-lg"
                style={{
                  borderTopLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopRightRadius: 30,
                }}
              >
                <Text>Hey boy!</Text>
              </View>
            </View>

            <View className="flex-row right-[-26%] w-full absolute mt-20">
              <View className="p-4 rounded-lg ">
                <View
                  className="bg-purple-800 p-4"
                  style={{
                    borderTopRightRadius: 30,
                    borderBottomLeftRadius: 30,
                    borderTopLeftRadius: 30,
                  }}
                >
                  <Text className="text-white">{message}</Text>
                </View>
                <Text className="text-right text-gray-400">Delivered</Text>
              </View>
              <Image
                source={require("../../assets/images/naruto.jpg")}
                className="h-8 w-8 rounded-full "
              />
            </View>

            <View className="bottom-4 w-full absolute">
              <View className="bg-gray-200 mx-4 flex-row pl-8 py-2 rounded-full">
                <TextInput
                  placeholder="Type your message here"
                  className="flex-1"
                  cursorColor="#c670ff"
                />
                <TouchableOpacity className="bg-pink-700 h-10 w-10 items-center mx-2 justify-center rounded-full ">
                  <Ionicons name="send" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Bottom tabs */}
          <View className="w-full ">
            <View className="flex-row gap-4 mt-2 justify-center  ">
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <Feather name="camera" size={24} color="#f7ebfd" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <Feather name="image" size={24} color="#f7ebfd" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <Feather name="video" size={24} color="#f7ebfd" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color="#f7ebfd"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row gap-4 my-2 justify-center">
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <Ionicons name="location-outline" size={24} color="#f7ebfc" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <AntDesign name="contacts" size={24} color="#f7ebfc" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
              >
                <Feather name="mic" size={24} color="#f7ebfd" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-20 w-20 rounded-full items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
              >
                <SimpleLineIcons name="options" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatScreen;
