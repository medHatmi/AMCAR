import React from 'react';
import { Dimensions, StyleSheet, Text, View, Platform, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av'

export default function SpeakersScreen() {
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Abdelali.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Abdelali
              </Text>
              <Text style={styles.medium}>
                Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ABDELKHIRANE.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              C. Abdelkhirane
              </Text>
              <Text style={styles.medium}>
                Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ABERGEL.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              E. Abergel
              </Text>
              <Text style={styles.medium}>
                Bordeaux
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ABIDALLAH.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              M. Abidallah
              </Text>
              <Text style={styles.medium}>
                Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ABIDI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              G. Abidi
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Abir.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Abir
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Begdouri.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Achkari Begdouri
              </Text>
              <Text style={styles.medium}>
              Tanger
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ADDAD.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              F. Addad
              </Text>
              <Text style={styles.medium}>
              Ariana
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Agoumi.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              J. Agoumy
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Alami.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              M. Alami
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ALAOUI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              F.Z Alaoui
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ALOS.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              B. Alos
              </Text>
              <Text style={styles.medium}>
              Poitiers
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Aouad.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Aouad
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Arharbi.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              M. Arharbi
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/AROUS.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Arous
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BELGHITI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              H. Belghiti
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Bencheikh.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              Kh. Bencheikh
              </Text>
              <Text style={styles.medium}>
              Agadir
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Benchekroune.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              D. Benchekroun
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Benjelloun.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              H. Benjelloun
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BENNIS.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Bennis
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BENNOUNA2.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              G. Bennouna
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BENNOUNA.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              H. Bennouna
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BENOMAR.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              K. Benomar
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BENSAFIDDINE.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Bensafiddine
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BENSEMLALI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              M. Bensemlali
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/BOUHOUCH.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              R. Bouhouch
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Boumzebra.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              D. Boumzebra
              </Text>
              <Text style={styles.medium}>
              Marrakech
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/CHAARA.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              J. Chaara
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/CHAIB.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Chaib
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Cherkaoui.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              K. Cherkaoui
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/CHRAIBI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Chraibi
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/DETRICHE.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              G. Detriche
              </Text>
              <Text style={styles.medium}>
              Paris
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/DIEVART.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              F. Dievart
              </Text>
              <Text style={styles.medium}>
              Dunkerque
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Doughmi.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              N. Doughmi
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/DRIGHIL.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Drighil
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ECHAHIDI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              N. Echahidi
              </Text>
              <Text style={styles.medium}>
              Ryadh
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/HATTAOUI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              M. El Hattaoui
              </Text>
              <Text style={styles.medium}>
              Marrakech
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/KARIMI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. El Karimi
              </Text>
              <Text style={styles.medium}>
              Marrakech
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Masbahi.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              R. El Masbahi
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Yahyaoui.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              Y. El Yahyaoui
              </Text>
              <Text style={styles.medium}>
              Marrakech
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ELALAMY.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              I. El Alamy
              </Text>
              <Text style={styles.medium}>
              Paris
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Fadouach.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Fadouach
              </Text>
              <Text style={styles.medium}>
              Marrakech
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/GACH.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              O. Gach
              </Text>
              <Text style={styles.medium}>
              Liege
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/GIRERD.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              X. Girerd
              </Text>
              <Text style={styles.medium}>
              Paris
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/HARMOUCH.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              H. Harmouch
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Khatouri.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Khatouri
              </Text>
              <Text style={styles.medium}>
              Marrakech
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/KOWTANOR.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Kownator
              </Text>
              <Text style={styles.medium}>
              Thionville
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Lakhal.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              Z. Lakhal
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/LAMRANI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              Z. Lamrani
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/LAOUAD.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              I. Laouad
              </Text>
              <Text style={styles.medium}>
              Marrakech
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/TOURNEAU.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              T. Le Tourneau
              </Text>
              <Text style={styles.medium}>
              Nantes
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/LEURENT.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              G. Leurent
              </Text>
              <Text style={styles.medium}>
              Rennes
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/LOGEART.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              D. Logeart
              </Text>
              <Text style={styles.medium}>
              Paris
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/MALERGUE.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              M.C. Malergue
              </Text>
              <Text style={styles.medium}>
              Paris
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/MIR.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              H. Mir
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/MOHTY.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              D. Mohty
              </Text>
              <Text style={styles.medium}>
              Ryadh
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/MOUGHIL.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Moughil
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/MOUSTAGHFIR.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Moustaghfir
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/PATHAK.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Pathak
              </Text>
              <Text style={styles.medium}>
              Monaco
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Rafai.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              M.A. Rafai
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Raissouni.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              Z. Raissouni
              </Text>
              <Text style={styles.medium}>
              Tanger
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/SAHER.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              L. Saher
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/SCADI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              E. Scadi
              </Text>
              <Text style={styles.medium}>
              Khouribga
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/SEGHROUCHNI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Serghouchni
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/SOUFIANI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Soufiani
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Soulami.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Soulami
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/SRAIRI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Srairi
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Tahiri.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              A. Tahiri
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/Mezalek.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              Z. Tazi Mezalek
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/VILLEMOT.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              J.P. Villemot
              </Text>
              <Text style={styles.medium}>
              Nancy
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ZAIMI.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Zaimi
              </Text>
              <Text style={styles.medium}>
              Casablanca
              </Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image source={require('../Assets/Avatars/ZTOT.png')} style={{width: windowWidth * .19, height: windowHeight * .09,}}/>
            <View style={styles.line} />
            <View style={styles.innerbox}>
              <Text style={styles.bold}>
              S. Ztot
              </Text>
              <Text style={styles.medium}>
              Rabat
              </Text>
            </View>
          </View>

          <View style={{height: 200}} />
        </View>
      </ScrollView>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex:2,
    marginTop: 75,
    alignItems: 'center',
  },
  line: {
    borderRadius: 50,
    left: 15,
    height: 40,
    width: 1.5,
    backgroundColor: '#d31621',
  },
  bold :{
    marginBottom: 10,
    fontFamily: 'montserratbold',
    fontSize: 18,
  },
  medium :{
    color: '#03269d',
    opacity: .7,
    fontFamily: 'montserratmedium',
    fontSize: 18,
  },
  box: {
    marginTop: 25,
    flexDirection: 'row',
    width: windowWidth * .9,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    borderRadius: 25,
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
        width:8,
        height:5
    },
    backgroundColor: '#ffffff',
  },
  innerbox: {
    left: 30,
    width: windowWidth * .6,
    justifyContent: 'center',
    height: 80,
  },
});
