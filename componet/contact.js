import {
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/profile.jpg";
const Contact = ({name, phone}) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.Image} />
      <View style={styles.containerInfo}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text>{phone}</Text>
      </View>
      <View>
        <MaterialIcons name="local-phone" size={25}  color='#009cf5' style={styles.icons}/>
      </View>
      <View>
        <MaterialCommunityIcons name="message-processing" size={25} color='#009cf5' style={styles.icons}/>
      </View>
      <View>
        <SimpleLineIcons name="options-vertical" size={25} color='#a8a8a8' style={styles.icons}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
        alignItems:'center',
        marginVertical:20,
    },
  Image: {
    height: 50,
    width: 50,
    borderRadius:50,
  },
  containerInfo:{
    justifyContent:'center',
    marginHorizontal:15,
    flex:4,
  },
  name:{
    fontWeight:'bold',
    fontSize:17,
  },
  icons:{
     flex:1,
     marginHorizontal:5,
  }
});

export default Contact;
