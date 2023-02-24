import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, extendTheme } from "native-base";

import BgImage from "./assets/Bg/BgImage.png";
import Interceptor from "./src/services/servicesBase.interceptor";
import NativeStack from "./src/routes/nativeStack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { useEffect } from "react";

export default function App() {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: (props) => {
          return {
            _light: { color: "red.300" },
            _dark: { color: "blue.300" },
          };
        },
      },
    },
  });
  useEffect(() => {
    Interceptor.interceptor(store);
  }, [store.getState()]);

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <NativeStack bgImage={BgImage} />
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({});
