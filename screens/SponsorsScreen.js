import React from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { Video } from 'expo-av'

export default function ComiteScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
      <Text style={styles.title}>
        NOS REMERCIEMENTS POUR{"\n"}NOS PARTENAIRES
      </Text>
      <View style={{ marginTop: 25, marginBottom: 5, borderRadius: 50, height: 2, width: 100, backgroundColor: '#d31621', alignSelf: 'center'}} />
      <Text style={styles.mediumblack}>
        Cliquez sur le logo d'un sponsor{"\n"}pour visiter son e-stand
      </Text>
      <View style={{height: 25}}/>
      <ScrollView>
        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=33'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor00.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=48'
) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor01.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
<TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=41'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor02.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=44'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor03.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=50'
) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor10.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=43'
) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor11.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=47'
) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor12.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=36'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor13.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=32'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor20.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=34'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor21.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=40'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor30.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=45'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor31.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=35'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor32.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=49'
          ) .catch(err => console.error('Error', err))}>
            <View style={styles.button}>
              <Image source={require('../Assets/Sponsors/Sponsor33.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
            </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=51'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor34.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=42'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor40.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=37'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor41.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=38'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor42.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=52'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor43.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=54'
          ) .catch(err => console.error('Error', err))}>
            <View style={styles.button}>
              <Image source={require('../Assets/Sponsors/Sponsor44.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor50.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=53'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor51.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=55'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor52.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=57'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor53.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/congres/SponsorPage.php?PARA=56'
          ) .catch(err => console.error('Error', err))}>
              <View style={styles.button}>
                <Image source={require('../Assets/Sponsors/Sponsor54.png')} style={{width: windowWidth * .3, height: windowHeight * .1,}}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:500}} />
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
  parent2:{
    marginTop: 25,
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  parent0:{
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
},
  button: {
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
        width:8,
        height:5
    },
    justifyContent:"center",
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
    fontSize: 23,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'montserratbold',
    color: '#000000',
  },
  mediumblack:{
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
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'montserratmedium',
    color: '#000000',
  },
});
