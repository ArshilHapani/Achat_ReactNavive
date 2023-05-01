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
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { appTheme } from "../../utils/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  const navigator = useNavigation();
  const router = useRoute();
  const { name, message, image, time } = router.params;
  const [chatMessage, setChatMessage] = useState([
    {
      message: "",
      time: "",
      fromMe: true,
    },
  ]);
  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: false,
      animation: "slide_from_bottom",
    });
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <>
        {/* Heder */}
        <SafeAreaView
          className="bg-[#4002ca] w-full py-3"
          style={{
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.21,
            shadowRadius: 7.68,
            elevation: 10,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          <View className="flex-row mx-3 my-6 mb-3 items-center">
            <TouchableOpacity>
              <Ionicons
                name="chevron-back"
                onPress={() => navigator.goBack()}
                size={23}
                color="#e5e5e5"
              />
            </TouchableOpacity>
            <View className="flex-row flex-1 items-center">
              <View className="shadow-lg">
                <Image
                  source={image}
                  style={{
                    marginHorizontal: 8,
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                  }}
                />
              </View>
              <View className="ml-2 justify-start">
                <Text
                  className="text-xl text-white"
                  style={{ fontFamily: appTheme.fonts.alefReg }}
                >
                  {name}
                </Text>
                <Text className="text-gray-300">Active now</Text>
              </View>
            </View>
            <View className="flex-row gap-6">
              <TouchableOpacity>
                <Ionicons name="call" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <View className="flex-1" onPress={Keyboard.dismiss}>
          <View className="flex-1">
            {chatMessage.map((message, index) => (
              <View key={message.time + index + Math.random()}>
                <Text>{message}</Text>
              </View>
            ))}
          </View>

          {/* send message text input */}
          <View
            style={{
              shadowColor: "#000000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.21,
              shadowRadius: 7.68,
              elevation: 10,
            }}
            className="bg-white pl-4 pr-1 py-2 rounded-3xl rounded-tr-lg mx-3 mb-3 shadow-2xl flex-row items-center"
          >
            <TouchableOpacity className="mr-3">
              <Ionicons name="add" size={24} color="#4002ca" />
            </TouchableOpacity>
            <TextInput
              className="flex-1"
              placeholder="Type your message here"
              cursorColor="#4002ca"
            />
            <TouchableOpacity
              className="bg-[#4002ca]  w-14 h-11 items-center justify-center"
              style={{ borderRadius: 20, borderTopRightRadius: 10 }}
            >
              <FontAwesome name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};

export default ChatScreen;
