import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ChatLabelHomeScreen = ({ item }) => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      animation: "slide_from_right",
    });
  }, []);
  return (
    <View className="flex-row items-center">
      <Image source={item.image} className="h-16 w-16 m-4 ml-3 rounded-full" />
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
          <Text className=" flex-1  font-semibold text-lg">{item.name}</Text>
          <Text className="right-0 text-gray-700">{item.messageTime}</Text>
        </View>
        <Text>
          {item.message.length > 25
            ? item.message.slice(0, 25) + "..."
            : item.message}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatLabelHomeScreen;
