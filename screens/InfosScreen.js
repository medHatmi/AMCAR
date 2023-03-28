import React from 'react';
import { Dimensions, StyleSheet, Text, View, Platform, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av'

export default function ComiteScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const plat = Platform.OS === 'ios';
  const winheight = plat ? windowHeight+2 : windowHeight+50 ;
  return (
    <View style={{zIndex:2, position:'relative'}}>
      <Video
      style={{ zIndex:0, height: winheight, width:windowWidth+2, position:'absolute', top:-2, right:0, left:0, bottom:0}}
      shouldPlay
      repeat
      source={require('../Assets/Vid/LoopVid.mp4')}
      resizeMode="cover"
      isLooping
      />
      <View style={styles.container}>
        <ScrollView>
      <Image source={require('../Assets/Img/Map.png')} style={{left: -30, top: -50, width: windowWidth * 1.5, height: windowHeight * .6,}} />
        <View style={styles.box}>
          <Text style={styles.titleboldwhite}>Dates</Text>
        </View>
        <Text style={styles.titlebold}>Du 02 au 04 Septembre 2021</Text>
        <View style={{height: 25}} />
        <View style={styles.box}>
          <Text style={styles.titleboldwhite}>Lieu</Text>
        </View>
        <Text style={styles.titlebold}>Hôtel The View - Royal Atlas{"\n"}Agadir</Text>
        <View style={{height: 25}} />
        <View style={{left: 20,
    flexDirection: 'row',
    width: windowWidth * .8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 25,
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
        width:8,
        height:5
    },
    backgroundColor: '#03269d',
  }}>
          <Text style={styles.titleboldwhite}>Agence Organisatrice</Text>
        </View>
        <Text style={styles.titlemedium}>
          Pour toutes informations, merci de contacter l’agence
          <Text style={styles.titlebold}> SIGMACO</Text>
          {"\n"}{"\n"}
          Tel. :
          {"\n"}
          <Text style={styles.titlebold}>
            00212 522 20 90 92 - 96
            {"\n"}
            00212 661 19 15 25
          </Text>
          {"\n"}{"\n"}
          ou
          <Text style={styles.titlebold}> l’AMCAR </Text>
          par e-mail sur
          {"\n"}
          <Text style={styles.titlebold}>amcarcontact@gmail.com</Text>
          </Text>
        <View style={{height:150}} />
      </ScrollView>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex:2,
  },
  titlebold:{
    marginTop: 15,
    marginLeft: 25,
    shadowOpacity: .8,
    shadowColor: '#000000',
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
      width:8,
      height:5
    },
    fontSize:22,
    fontFamily: 'montserratbold',
    color: '#000000',
  },
  titlemedium:{
    marginTop: 15,
    marginLeft: 25,
    shadowOpacity: .8,
    shadowColor: '#000000',
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
      width:8,
      height:5
    },
    fontSize:22,
    fontFamily: 'montserratmedium',
    color: '#000000',
  },
  titleboldwhite:{
    fontSize: 20,
    fontFamily: 'montserratbold',
    color: '#ffffff',
  },
  box: {
    left: 20,
    flexDirection: 'row',
    width: windowWidth * .5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 25,
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
        width:8,
        height:5
    },
    backgroundColor: '#03269d',
  },
});
