import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  ChatScreen,
  HomeScreen,
  Login,
  SplashScreen as SplashScreenComponent,
} from "./screens";
import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Snackbar from "./components/Snackbar";
import { ContextProvider, useStateContext } from "./context/stateContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appUser, setAppUser] = useState(true);
  const [fontsLoaded] = useFonts({
    "Acme-Regular": require("./assets/fonts/Acme-Regular.ttf"),
    "Alef-Regular": require("./assets/fonts/Alef/Alef-Regular.ttf"),
    "Alef-Bold": require("./assets/fonts/Alef/Alef-Bold.ttf"),
    "AdventPro-italic": require("./assets/fonts/Advent_Pro/AdventPro-Italic.ttf"),
    "AdventPro-variableFont": require("./assets/fonts/Advent_Pro/AdventPro-variable.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ContextProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator>
            {!appUser ? (
              <>
                <Stack.Screen name="Splash" component={SplashScreenComponent} />
                <Stack.Screen name="Login" component={Login} />
              </>
            ) : (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
        <Snackbar />
      </ContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
