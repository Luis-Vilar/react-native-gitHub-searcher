import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { getUserData } from "../util/fechData";
import InputUser from "./InputUser";

const Separator = () => <View style={styles.separator} />;

export default function Avatar() {
  const [text, setText] = useState("Luis-Vilar");
  const [userData, setUserData] = useState({});

  const avatar_url = {
    uri: userData.avatar_url,
  };
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <Text style={styles.title}>Buscador de usuário en GitHub</Text>
      <Text style={styles.subtitle}>Ingrese un Nombre de usuario</Text>
      <View style={styles.row}>
        <InputUser text={text} setText={setText} />
        <Button
          style={styles.button}
          title="Buscar"
          onPress={() => {
            getUserData(text).then((data) => {
              setUserData(data);
            });
          }}
        />
      </View>
      <Separator />
      <View style={styles.descripcion}>
        <Image style={styles.avatarImage} source={avatar_url}></Image>
        <Separator />
        {userData?.login && (
          <View>
            <Text style={styles.title}>{userData.login}</Text>
            <Text style={styles.subtitle}>
              Seguidores: {userData.followers}
            </Text>
            <Text style={styles.subtitle}>
              Siguiendo : {userData.following}
            </Text>
            <Text style={styles.subtitle}>
              Repositorios : {userData.public_repos}
            </Text>
          </View>
        )}
      </View>
      <Separator />
      <ScrollView style={styles.scroll}>
        {Object.entries(userData).map(([key, value]) => {
          if (value)
            return (
              <Text
                style={styles.subtitle}
                key={key}
              >{` ${key} : ${value}`}</Text>
            );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const sizeImage = 80;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 2,
  },
  title: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 8,
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    margin: 2,
  },
  button: {
    borderRadius: 10,
    width: 100,
    height: 50,
    marginTop: 20,
  },
  scroll: {
    marginTop: 25,
    padding: 5,
    margin: 5,
  },
  avatarImage: {
    width: sizeImage,
    height: sizeImage,
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 2,
    padding: 5,
    margin: 5,
  },
  descripcion: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 2,
    padding: 5,
  },
  separator: {
    marginVertical: 2,
    borderBottomColor: "#636363",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
