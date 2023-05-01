import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { appTheme } from "../../utils/theme";
import { ScrollView } from "react-native";
import { userStripeChatDummy, userStripeDummyData } from "../../utils/dummy";
import { IconButton } from "react-native-paper";

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      animation: "slide_from_right",
    });
  }, []);
  return (
    <View className="bg-[#4002ca]">
      <SafeAreaView>
        <ScrollView>
          <View className="m-4 flex-row items-center px-2">
            <Text
              className="text-white flex-1 text-2xl"
              style={{ fontFamily: appTheme.fonts.alefBold }}
            >
              Messages
            </Text>
            <TouchableOpacity>
              <Ionicons name="options" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View className=" my-2 items-center px-4 ">
            <FlatList
              contentContainerStyle={{ marginTop: 10 }}
              keyExtractor={(item, index) => Math.random() + item.name + index}
              data={userStripeDummyData}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onLongPress={() => alert(`Delete ${item.name}`)}
                  key={item.name + index}
                  className="pr-5"
                >
                  <Image
                    source={item.image}
                    className="h-16 w-16 bg-violet-500 rounded-lg "
                  />
                  <Text className="text-white text-center my-2 font-semibold tracking-wider">
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* -------------------------------------------------------------------------------------- */}
          <View>
            <View
              className="bg-white mt-1 w-full "
              style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            >
              <View className="mt-6 p-2">
                {userStripeChatDummy.map((item, index) => (
                  <View
                    key={
                      item.messageTime +
                      item.name +
                      item.image.toString() +
                      Math.random() +
                      Date.now() +
                      index
                    }
                    className="flex-row items-center"
                  >
                    <Image
                      source={item.image}
                      className="h-16 w-16 m-4 ml-3 rounded-full"
                    />
                    <TouchableOpacity
                      onLongPress={() => alert(`Delete ${item.name}`)}
                      style={{ width: Dimensions.get("screen").width - 120 }}
                      onPress={() =>
                        navigation.navigate("Chat", {
                          name: item.name,
                          message: item.message,
                          image: item.image,
                          time: item.messageTime,
                        })
                      }
                    >
                      <View className="flex-row items-center">
                        <Text className=" flex-1  font-semibold text-lg">
                          {item.name}
                        </Text>
                        <Text className="right-0 text-gray-700">
                          {item.messageTime}
                        </Text>
                      </View>
                      <Text>{item.message}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <IconButton
        icon="plus"
        style={{
          position: "absolute",
          right: 3,
          bottom: 3,
          height: 50,
          width: 50,
          borderRadius: 100,
          backgroundColor: "#4002ca",
          alignItems: "center",
          justifyContent: "center",
        }}
        iconColor="white"
        size={35}
      />
    </View>
  );
};

export default HomeScreen;
