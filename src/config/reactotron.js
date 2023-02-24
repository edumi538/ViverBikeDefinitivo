import Reactotron from "reactotron-react-native";
import { NativeModules } from "react-native";
import { reactotronRedux } from "reactotron-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

let bike;

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const hostName = scriptURL.split("://")[1].split(":")[0];

  bike = Reactotron.configure({
    name: "Viver Bike",
    host: hostName,
  });

  bike
    .useReactNative()
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.bike = bike;
  bike.clear();
}

export default bike;
