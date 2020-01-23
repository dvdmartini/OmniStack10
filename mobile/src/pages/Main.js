import React, { useEffect, useState } from "react";
import {  StyleSheet,  Image,  View,  Text,  TextInput,  TouchableOpacity} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {  requestPermissionsAsync,  getCurrentPositionAsync} from "expo-location";

import { MaterialIcons } from "@expo/vector-icons";
function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }
    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }
  return (
    <>
      <MapView initialRegion={currentRegion} style={styles.map}>
        <Marker coordinate={{ latitude: -29.1546836, longitude: -51.1899153 }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://avatars2.githubusercontent.com/u/49644607?s=460&v=4"
            }}
          />
          <Callout
            onPress={() => {
              navigation.navigate("Profile", { github_username: "dvdmartini" });
            }}
          >
            <View style={styles.callout}>
              <Text style={styles.devName}>David Martini</Text>
              <Text style={styles.devBio}>
                Estudande de Ciências da Computação
              </Text>
              <Text style={styles.devTechs}>
                ReactJS, React Native, Node.js
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.searchForm}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <TouchableOpacity onPress={() => {}} style={styles.loadButtom}>
          <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#FFF"
  },
  callout: {
    width: 260
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    color: "#666",
    marginTop: 5
  },
  devTechs: {
    marginTop: 5
  },
  searchForm: {
      position: 'absolute',
      top: 20,
      left: 20,
      right: 20,
      zIndex: 5,
      display: 'flex',
      flexDirection: 'row'
  },
  searchInput:{
      flex: 1,
      height: 50,
      backgroundColor: '#FFF',
      color: '#333',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
          width: 4,
          height: 4,
      },
      elevation: 2,
      
  },
  loadButtom: {
      width: 50,
      height: 50,
      backgroundColor: '#8E4Dff',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:15,
  },

});

export default Main;
