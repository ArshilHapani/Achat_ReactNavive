import { View, Text } from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { appTheme } from "../utils/theme";

const ChatBubble = ({ item }) => {
  const messageContainerRef = useRef();
  return (
    <View>
      <View>
        {item.fromMe ? (
          <View className="flex-row h-fit w-full  py-5 flex  justify-between px-4 items-center">
            {/* Message status container */}
            <View className="flex items-center ">
              <Ionicons name="checkmark-done" size={24} color="#05BFDB" />
              <Text className="text-gray-400">{item.time}</Text>
            </View>
            {/* Sender's message container  */}
            <View
              ref={messageContainerRef}
              className="bg-[#C4DFDF] py-5 px-4"
              style={{
                borderRadius: 20,
                borderTopRightRadius: 0,
                width: appTheme.width.chatBubbleMaxWidth(item.message.length),
              }}
            >
              <Text className="text-justify">{item.message}</Text>
            </View>
          </View>
        ) : (
          <View className="w-full flex-row h-fit py-5 flex  justify-between px-4  items-center">
            {/* Receiver's message container  */}
            <View
              ref={messageContainerRef}
              className="bg-[#19A7CE] py-5 px-4 shadow-md"
              style={{
                borderRadius: 20,
                borderTopLeftRadius: 0,
                width: appTheme.width.chatBubbleMaxWidth(item.message.length),
                maxWidth: 250,
              }}
            >
              <Text
                className="text-white"
                style={{
                  fontSize: appTheme.mediumFontSize,
                  lineHeight: 20,
                  fontFamily: appTheme.fonts.acmeReg,
                }}
              >
                {item.message}
              </Text>
            </View>
            {/* Message status container */}
            <View className="flex  h-full items-start">
              <Text className="text-gray-400">{item.time}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ChatBubble;
