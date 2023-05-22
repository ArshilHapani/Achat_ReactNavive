import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Divider, Menu } from "react-native-paper";
import { appTheme } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";

const ChatScreenHeader = ({ name, image }) => {
  const navigation = useNavigation();
  const [popUpMenu, setPopUpMenu] = useState(false);

  return (
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
      <View className="flex-row mx-3 my-6 mb-3  items-center">
        <TouchableOpacity>
          <Ionicons
            name="chevron-back"
            onPress={() => navigation.goBack()}
            size={23}
            color="#e5e5e5"
          />
        </TouchableOpacity>
        <View className="flex-row flex-1  items-center">
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
        <View className="flex-row items-center">
          <TouchableOpacity className="mx-4">
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
          <Menu
            visible={popUpMenu}
            onDismiss={() => setPopUpMenu(false)}
            anchor={
              <TouchableOpacity onPress={() => setPopUpMenu(true)}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" trailingIcon="cross" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreenHeader;
