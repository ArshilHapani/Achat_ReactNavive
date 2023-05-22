import { View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { userStripeChatDummy } from "../../utils/dummy";
import { IconButton } from "react-native-paper";
import MainScreenHeader from "../../components/MainScreenHeader";
import ChatLabelHomeScreen from "../../components/ChatLabelHomeScreen";

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      animation: "slide_from_right",
    });
  }, []);
  return (
    <View className="p-2 bg-white">
      <MainScreenHeader />
      <SafeAreaView className="bg-white">
        <ScrollView>
          <View>
            {userStripeChatDummy.map((item, index) => (
              <ChatLabelHomeScreen
                key={
                  item.messageTime +
                  item.name +
                  item.image.toString() +
                  Math.random() +
                  Date.now() +
                  index
                }
                item={item}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
      <IconButton
        icon="plus"
        style={{
          position: "relative",
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
