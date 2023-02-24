import { IS_LOGGED_IN, UPDATE_USER_LOGIN } from "../../redux/slice/AuthSlice";
import { ImageBackground, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Center } from "native-base";
import FormSignin from "./components/Form";
import Header from "./components/Header";
import { LoginUser } from "../../api/Auth";

const LoginScreen = ({ Background, navigation }) => {
  const [_loading, setloading] = useState(false);
  const [_errorAlert, set_errorAlert] = useState(false);
  const [_titleError, set_titleError] = useState("");
  const UserSelector = useSelector((state) => state.AuthSlice);
  const dispatch = useDispatch();

  function SetErrorData(title) {
    set_errorAlert(true);
    set_titleError(title);
    setTimeout(() => {
      set_errorAlert(false);
    }, 4000);
  }

  useEffect(() => {
    dispatch([UPDATE_USER_LOGIN({}), IS_LOGGED_IN(false)]);
  }, []);

  const { user } = UserSelector;

  async function Signin(data) {
    if (!user.token) {
      setloading(true);
      const resp = await LoginUser(data);
      if (resp == undefined) {
        setloading(false);
        SetErrorData(
          "Não foi possível logar!\nUsuário ou senha estão incorretos"
        );
      } else {
        dispatch([
          UPDATE_USER_LOGIN({
            id: resp.id,
            email: resp.email,
            roles: resp.roles,
            token: resp.accessToken,
          }),
          IS_LOGGED_IN(resp.isLogged),
        ]);
      }
      setloading(false);
      navigation.navigate("Dashboard");
    } else {
      SetErrorData("Oops bugou aqui!\nEste usuário já se encontra logado.");
    }
  }
  return (
    <ImageBackground style={styles.BackgroundImage} source={Background}>
      <Center w={"100%"} h={"100%"}>
        <Header />
        <FormSignin
          _loading={_loading}
          _errorAlert={_errorAlert}
          _titleError={_titleError}
          navigation={navigation}
          Signin={Signin}
        />
      </Center>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  BackgroundImage: {
    width: "100%",
    height: "100%",
  },
});

export default LoginScreen;
