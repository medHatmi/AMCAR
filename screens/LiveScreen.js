import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function ComiteScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const CurrentDate=()=>{
    var month = new Date().getMonth() + 1;
   };
  return (
    <View style={{zIndex:2, position:'relative'}}>
      <Video
      style={{ zIndex:0, height: windowHeight+2, width:windowWidth+2, position:'absolute', top:-2, right:0, left:0, bottom:0}}
      shouldPlay
      repeat
      source={require('../Assets/Vid/LoopVid.mp4')}
      resizeMode="cover"
      isLooping
      />
      <View style={styles.container}>
        <Image source={require('../Assets/Img/Logo.png')} style={{bottom: 70, alignSelf: 'center', width: windowWidth * .8, height: windowHeight * .15,}} />
        <View style={{bottom: 50}}>
          <Text style={styles.title}>
            Diffusion en Direct de l'Event
          </Text>
        </View>
        <ScrollView>
        <YoutubePlayer
      height={216}
      play={true}
      videoId={'UZaCdENWTm4'}
      />
      <View style={{height: 50}} />
      <YoutubePlayer
      height={216}
      play={true}
      videoId={'UvFD459cOU8'}
      />
      <View style={{height: 50}} />
      <YoutubePlayer
      height={216}
      play={true}
      videoId={'TNhvu8Irxls'}
      />
      <View style={{height: 600}} />
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex:2,
    top: 100,
    padding:10,
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
      width:8,
      height:5
    },
  },
  title:{
    shadowOpacity: .8,
    shadowColor: '#000000',
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
      width:8,
      height:5
    },
    top: 10,
    fontSize:20,
    alignSelf: 'center',
    fontFamily: 'montserratsemibold',
    color: '#d60115',
  },
});
