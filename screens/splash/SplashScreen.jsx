import { View, Text, Animated, TouchableOpacity } from "react-native";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { appTheme } from "../../utils/theme";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import PagerView from "react-native-pager-view";

const SplashScreen = () => {
  const ref = useRef();
  const navigate = useNavigation();
  useEffect(() => {
    navigate.setOptions({
      headerStyle: {
        backgroundColor: "#4c1c95",
      },
      headerShown: false,
    });
  }, []);
  return (
    <>
      <PagerView ref={ref} className="flex-1 bg-violet-900">
        <View className={`items-center justify-center `} key={1}>
          <Lottie
            style={{ marginTop: -70 }}
            source={require("../../lotties/splash-2.json")}
            autoPlay
            loop
          />
          <View className="absolute items-start">
            <View>
              <Text
                className="text-white relative bottom-0 text-4xl mr-20"
                style={{ fontFamily: appTheme.fonts.acmeReg, marginTop: 350 }}
              >
                Get the rich feel
              </Text>
              <Text
                className="text-gray-100 text-sm"
                style={{ fontFamily: appTheme.fonts.alefBold }}
              >
                getting started with A.chat
              </Text>
            </View>
          </View>
        </View>
        {/* ------------------------- */}
        <View className={` items-center justify-center`} key={2}>
          <Lottie
            style={{ marginTop: -70 }}
            source={require("../../lotties/splash-3.json")}
            autoPlay
            loop
          />
          <View className="absolute items-start">
            <View>
              <Text
                className="text-white relative bottom-0 text-4xl mr-20"
                style={{ fontFamily: appTheme.fonts.acmeReg, marginTop: 350 }}
              >
                real time chat updating
              </Text>
              <Text
                className="text-gray-100 text-sm"
                style={{ fontFamily: appTheme.fonts.alefBold }}
              >
                experience the preciousness
              </Text>
            </View>
          </View>
        </View>
        {/* --------------------------------------------------- */}
        <View className={` items-center justify-center `} key={3}>
          <Lottie
            style={{ marginTop: -70 }}
            source={require("../../lotties/splash-1.json")}
            autoPlay
            loop
          />
          <View className="absolute items-start">
            <View>
              <Text
                className="text-white relative bottom-0 text-4xl mr-20"
                style={{ fontFamily: appTheme.fonts.acmeReg, marginTop: 350 }}
              >
                Maintain privacy
              </Text>
              <Text
                className="text-gray-100 text-sm"
                style={{ fontFamily: appTheme.fonts.alefBold }}
              >
                end to end chat encryption
              </Text>
            </View>
            <View>
              <Button
                style={{ borderRadius: 10 }}
                className="bg-gray-200 mt-5 p-1"
                onPress={() => navigate.navigate("Login")}
              >
                <Text
                  style={{
                    fontFamily: appTheme.fonts.alefReg,
                    fontSize: 14,
                  }}
                >
                  Sign up for free
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </PagerView>
      <View className="w-full p-4 bg-violet-900 bottom-0 items-center  justify-between flex-row">
        <TouchableOpacity onPress={() => navigate.navigate("Login")}>
          <Text
            style={{
              fontFamily: appTheme.fonts.alefBold,
              letterSpacing: 2,
              color: "#edede9",
              fontSize: 14,
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row gap-2 items-center">
          <Text
            style={{
              fontFamily: appTheme.fonts.alefBold,
              letterSpacing: 2,
              color: "#edede9",
              fontSize: 14,
            }}
          >
            Swipe
          </Text>
          <AntDesign name="right" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SplashScreen;
