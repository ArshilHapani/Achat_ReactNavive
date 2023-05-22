import {
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Provider } from "react-native-paper";
import ChatBubble from "../../components/ChatBubble";
import ChatScreenHeader from "../../components/ChatScreenHeader";
import { getCurrentTime } from "../../utils/functions/getFormattedCurrentTime";

const ChatScreen = () => {
  const navigator = useNavigation();
  const router = useRoute();
  const scrollEndRef = useRef();
  const { name, message, image, time } = router.params;
  const [senderMessage, setSenderMessage] = useState("");
  const [chatMessage, setChatMessage] = useState([
    {
      message: message,
      time: time,
      fromMe: false,
    },
  ]);
  useLayoutEffect(() => {
    navigator.setOptions({
      headerShown: false,
      animation: "slide_from_bottom",
    });
  }, []);
  function handleMessageSend() {
    setChatMessage((prev) => [
      ...prev,
      {
        fromMe: true,
        message: senderMessage,
        time: getCurrentTime(),
      },
    ]);
    setSenderMessage("");
    scrollEndRef.current.scrollToEnd({ animate: true });
  }
  return (
    <Provider>
      {/* Heder */}
      <ChatScreenHeader image={image} name={name} />
      {/* Messages container view */}
      <View className="flex-1 bg-[#f2f2f2]" onPress={Keyboard.dismiss}>
        <View className="flex-1">
          <FlatList
            ref={scrollEndRef}
            data={chatMessage}
            keyExtractor={(item) =>
              item.time + Math.random() * new Date().getTime()
            }
            renderItem={({ item }) => <ChatBubble item={item} />}
            contentContainerStyle={{
              paddingHorizontal: 10,
            }}
          />
        </View>
        {/* send message text input */}
        <View
          style={{
            shadowColor: "#000000",
            shadowOffset: {
              width: 10,
              height: 70,
            },
            shadowOpacity: 0.21,
            shadowRadius: 7.68,
            elevation: 40,
          }}
          className="bg-white pl-4 pr-1 py-2 rounded-3xl rounded-tr-lg mx-3 mb-3 shadow-2xl flex-row items-center"
        >
          <TouchableOpacity>
            <Ionicons name="add" size={24} color="#4002ca" />
          </TouchableOpacity>
          <TextInput
            className="flex-1 mx-2"
            multiline
            placeholder="Type your message here"
            cursorColor="#4002ca"
            onChangeText={(text) => setSenderMessage(text)}
            value={senderMessage}
          />
          <TouchableOpacity
            className="bg-[#4002ca]  w-14 h-11 items-center justify-center"
            style={{ borderRadius: 20, borderTopRightRadius: 10 }}
            onPress={handleMessageSend}
          >
            <FontAwesome name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
};

export default ChatScreen;
