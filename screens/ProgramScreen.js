import React from 'react';
import { Dimensions, StyleSheet, Text, View, Platform, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av'
import { ceil } from 'react-native-reanimated';

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

{/* --------------------------------------------------------- Page 1 --------------------------------------------------------- */}


          <View style={styles.parent1}>
            <Text style={{marginLeft: 30, marginTop: 5}}>
              <Text style={styles.titlebold}>
                Jeudi{" "}
              </Text>
              <Text style={styles.titlemedium}>
                02 Septembre 2021
              </Text>
            </Text>
          <View style={styles.line1}/>
          </View>

          <View style={styles.parent1}>
            <View style={styles.titleboxorange} />
              <View style={styles.timeboxorange}>
                <Text style={styles.titleboldwhite}>
                  14h00 - 15h00
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Inscription au congrès
              </Text>
            </View>
          </View>

          <View style={styles.parent1}>
            <View style={styles.titleboxred} />
              <View style={styles.timeboxred}>
                <Text style={styles.titleboldwhite}>
                  15h00 – 16h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Ateliers pratiques
              </Text>
            </View>
          </View>

          <View style={styles.parent1}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 90, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 1
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Echocardiographie - Les veines pulmonaires : une fenêtre sur les pathologies du coeur gauche.
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 100, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 129, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 90, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/MOHTY.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  D. MOHTY{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Ryadh
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 240}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 2
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Echo Doppler Vasculaire des TSA
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/KOWTANOR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  S. KOWTANOR{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Thionville
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 3
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Quizz ECG
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 45, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 74, left: 92.5, alignSelf: 'center', width: 200, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 35, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/MOUSTAGHFIR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    A. MOUSTAGHFIR{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/ECHAHIDI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    N. ECHAHIDI{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Ryadh
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 180}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 4
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                HTAP : Cas cliniques
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 170, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 74, left: 92.5, alignSelf: 'center', width: 200, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 199, left: 92.5, alignSelf: 'center', width: 200, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 35, left: 115, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/ALAOUI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    F.Z. ALAOUI{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 35}}>
                <Image source={require('../Assets/Avatars/DRIGHIL.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    A. DRIGHIL{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 160, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/HATTAOUI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    M. EL HATTAOUI{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Marrakech
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/CHRAIBI.png')} style={{width: windowWidth * .2, height: windowHeight * .095, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    S. CHRAÏBI{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 290, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/ACTELION.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}ACTELION JANSSEN
              </Text>
            </View>
          </View>

          <View style={{marginTop: 360}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 5
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .66, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Gestion du patient diabétique à risque cardiovasculaire
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENOMAR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  K. BENOMAR{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
            <View style={{top: 180, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/NOVONORDISK.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}NOVONORDISK
              </Text>
            </View>
          </View>
          
          <View style={{marginTop: 250}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  16h30 – 17h00
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Pause café
              </Text>
            </View>
          </View>


{/* --------------------------------------------------------- Page 2 --------------------------------------------------------- */}


          <View style={{marginTop: 50}}>
            <View style={styles.titleboxred} />
              <View style={styles.timeboxred}>
                <Text style={styles.titleboldwhite}>
                  17h00 – 18h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Séance Rythmologie
              </Text>
            </View>
          </View>

          <View style={{marginTop: 50}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Abdelali.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    S. Abdelali{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 55}}>
                <Image source={require('../Assets/Avatars/Yahyaoui.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    Y. El Yahyaoui{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Marrakech
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 170, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Benchekroune.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    D. Benchekroune{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Agoumi.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    J. Agoumi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>
          
          <View style={{marginTop: 320}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h00 - 17h15
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Premier accès de FA : Que faire ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BOUHOUCH.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  R. BOUHOUCH{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h15 - 17h30
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Prise en charge des ESV : Quand s’inquiéter ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/MOUSTAGHFIR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. MOUSTAGHFIR{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h30 - 17h45
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                L’ablation des troubles du rythme en dehors de la FA
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/CHAIB.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. CHAIB{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h45 - 18h00
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Pronostic et traitement des WPW
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ECHAHIDI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  N. ECHAHIDI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Ryadh
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h00 - 18h30
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion : 30 min
              </Text>
            </View>
          </View>

          <View style={{marginTop: 60}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#d31621', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h30 – 19h00
                </Text>
            </View>
            <View style={{left: 140, width: windowWidth * .67 , position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14.5, fontFamily: 'montserratbold', color: '#000000',}}>
                Prise en charge du syndrome coronaire aigü : Quoi de neuf ?
              </Text>
            </View>
            <View style={{top: 30, left: 67.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50,}}/>
            <View style={{top: 94, left: 67.5, alignSelf: 'center', width: 170, height: 1, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/HATTAOUI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  M. EL HATTAOUI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Marrakech
                </Text>
              </Text>     
            </View>
            <View style={{top: 180, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/ASTRA.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}ASTRA ZENECA
              </Text>
            </View>
          </View>

          <View style={{marginTop: 250}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                19h00 – 19h30
                </Text>
            </View>
            <View style={{left: 140, width: windowWidth * .67 , position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                LA CONFÉRENCE DE L’ANNÉE
              </Text>
            </View>
            <View style={{top: 30, left: 67.5, alignSelf: 'center', width: 1, height: 230, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 250, left: -60, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/PATHAK.png')} style={{width: windowWidth * .25, height: windowHeight * .12, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. PATHAK{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Monaco
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 60}}>
          <View style={{left: 90, justifyContent: 'center', width: windowWidth * 1.5, height: 170, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 110, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/MIR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    H. Mir{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 55}}>
                <Image source={require('../Assets/Avatars/Rafai.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    M.A. Rafai{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>    
          </View>

          <View style={{marginTop: 170}}>
          <View style={{left: 140, justifyContent: 'center', width: windowWidth * 1.5, height: 75, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, alignItems: 'center'}}/>
            <Text style={{marginLeft: 180, marginTop: 10, fontSize: 16, fontFamily: 'montserratbold', color: '#ffffff',}}>
              Au Cœur du Cerveau : Comment ces deux organes se parlent ?
            </Text>
          </View>

          <View style={{marginTop: 80}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  20h 30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Dîner
              </Text>
            </View>
          </View>


{/* --------------------------------------------------------- Page 3 --------------------------------------------------------- */}


          <View style={{marginTop: 100, flexWrap: 'wrap'}}>
            <Text style={{marginLeft: 30, marginTop: 5}}>
              <Text style={styles.titlebold}>
                Vendredi{" "}
              </Text>
              <Text style={{shadowOpacity: .8, shadowColor: '#000000', shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5}, fontSize: 23, fontFamily: 'montserratmedium', color: '#d60115',}}>
                03 Septembre 2021
              </Text>
            </Text>
          <View style={styles.line1}/>
          </View>

          <View style={styles.parent1}>
            <View style={styles.titleboxorange} />
              <View style={styles.timeboxorange}>
                <Text style={styles.titleboldwhite}>
                  08h30 – 10h00
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={{fontSize: 12.4, fontFamily: 'montserratbold', color: '#000000',}}>
                Séances Cardiologie Pédiatrique
              </Text>
            </View>
          </View>

          <View style={{marginTop: 50}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Fadouach.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    S. Fadouach{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Marrakech
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 55}}>
                <Image source={require('../Assets/Avatars/ZAIMI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    S. Zaimi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 170, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Cherkaoui.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    K. Cherkaoui{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Boumzebra.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    D. Boumzebra{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Marrakech
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 320}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                08h30 - 08h45
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .58, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13.4, fontFamily: 'montserratbold', color: '#000000',}}>
                L’atteinte cardiaque au cours de la maladie de Kawasaki
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENSEMLALI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  M. BENSEMLALI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 110, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                08h45 - 08h50
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                08h50 - 09h05
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .62, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13, fontFamily: 'montserratbold', color: '#000000',}}>
                L’Échocardiographie Doppler dans la tétralogie de Fallot
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/KARIMI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  S. EL KARIMI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Marrakech
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h05 - 09h10
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h10 - 09h25
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .62, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                La fermeture percutanée du canal artériel
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/CHRAIBI.png')} style={{width: windowWidth * .2, height: windowHeight * .09, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  S. CHRAÏBI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h25 - 09h30
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h30 - 09h45
                </Text>
            </View>
            <View style={{left: 145, width: windowWidth * .62, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                La chirurgie des sténoses aortiques congénitales
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ABIDALLAH.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  M. ABIDALLAH{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h45 - 09h50
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                10h00 - 10h30
              </Text>
            </View>
            <View style={{left: 135, width: windowWidth * .66, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13.2, fontFamily: 'montserratbold', color: '#293881',}}>
                Traitement anti thrombotique en 2021 : Standard ou personnalisé ?
              </Text>
            </View>
            <View style={{top: 30, left: 72.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 94, left: 72.5, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/HATTAOUI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  M. EL HATTAOUI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Marrakech
                </Text>
              </Text>     
            </View>
            <View style={{top: 180, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/SANOFI.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}SANOFI
              </Text>
            </View>
          </View>

          <View style={{marginTop: 260}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  10h30 – 11h00
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={{marginLeft: -10, fontSize: 13.5, fontFamily: 'montserratbold', color: '#000000',}}>
                Pause café - Visite des stands
              </Text>
            </View>
          </View>

{/* --------------------------------------------------------- Page 4 --------------------------------------------------------- */}


          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#ec732f', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ec732f', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h00 – 12h30
              </Text>
            </View>
            <View style={{left: 150, width: windowWidth * .66, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13.5, fontFamily: 'montserratbold', color: '#000000',}}>
                  Séances prévention du risque cardiovasculaire
              </Text>
            </View>
          </View>

          <View style={{marginTop: 80}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Abir.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    S. Abir{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 55}}>
                <Image source={require('../Assets/Avatars/Chraibi2.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    N. Chraïbi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 170, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Benjelloun.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    H. Benjelloun{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/BENNOUNA.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    H. Bennouna{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 320}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h00 - 11h15
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .62, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Les hyper uricémies : Quand faut-t-il les traiter ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/LAOUAD.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  I. LAOUAD{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Marrakech
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h15 - 11h20
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 80, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h20 - 11h35
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .62, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Les dyslipidémies : Quelles cibles ? Comment les atteindre pour prévenir le risque cardiovasculaire ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 90, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 119, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 80, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/DIEVART.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  F. DIEVART{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Dunkerque
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 215}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h35 - 11h40
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h40 - 11h55
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .58, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Hypertension artérielle et outils numériques
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/GIRERD.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  X. GIRERD{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Paris
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h55 - 12h00
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                12h00 - 12h15
                </Text>
            </View>
            <View style={{left: 155, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13.3, fontFamily: 'montserratbold', color: '#000000',}}>
                Place des nouveaux antidiabétiques en cardiologie
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/DIEVART.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  F. DIEVART{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Dunkerque
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                12h15 - 12h20
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                12h30 – 13h00
              </Text>
            </View>
            <View style={{left: 140, width: windowWidth * .69, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Place des AOD dans la vraie vie
              </Text>
            </View>
            <View style={{top: 30, left: 72.5, alignSelf: 'center', width: 1, height: 45, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 74, left: 72.5, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 35, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENNIS.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. BENNIS{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
            <View style={{top: 160, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/PFIZER.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}PFIZER
              </Text>
            </View>
          </View>

          <View style={{marginTop: 240}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  13h00 – 14h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Déjeuner
              </Text>
            </View>
          </View>


{/* --------------------------------------------------------- Page 5 --------------------------------------------------------- */}


          <View style={{marginTop: 50}}>
            <View style={styles.titleboxred} />
              <View style={styles.timeboxred}>
                <Text style={styles.titleboldwhite}>
                  13h00 – 14h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Atelier - Déjeuner
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 1
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Neuro-cardio-vasculaire
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/Rafai.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  MA. RAFAI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 200}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 2
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                L’échographie dans les cardiopathies congénitales :
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 190, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 200, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 219, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 115, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Fadouach.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    S. FADOUACH{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Marrakech
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 35}}>
                <Image source={require('../Assets/Avatars/ZAIMI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    S. ZAIMI{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 180, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 80}}>
                <Image source={require('../Assets/Avatars/CHRAIBI.png')} style={{width: windowWidth * .2, height: windowHeight * .095, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    S. CHRAÏBI{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 320}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 3
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                L’apport du holter rythmique en pratique (cas cliniques)
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 200, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/MOUSTAGHFIR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    A. MOUSTAGHFIR{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/ECHAHIDI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                    N. ECHAHIDI{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                    Ryadh
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 220, flexWrap: 'wrap',}}>
            <View style={styles.titleboxorange} />
              <View style={styles.timeboxorange}>
                <Text style={styles.titleboldwhite}>
                  14h30 – 16h00
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={{fontSize: 15, fontFamily: 'montserratbold', color: '#d60115',}}>
                Séances coronaires
              </Text>
            </View>
          </View>

          <View style={{marginTop: 50}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/HATTAOUI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    M. El Hattaoui{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Marrakech
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 45}}>
                <Image source={require('../Assets/Avatars/Lakhal.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    Z. Lakhal{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 170, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Bencheikh.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    Kh. Bencheikh{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Agadir
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/LAMRANI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    Z. Lamrani{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 330}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 80, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                14h30 - 14h45
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .62, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Faut-il revasculariser tous les syndromes coronaires chroniques ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 90, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 119, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 80, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENNOUNA2.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  G. BENNOUNA{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 220}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 80, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                14h45 - 15h00
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .62, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Le SCA ST + du multitronculaire : Quelle revascularisation ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 90, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 119, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 80, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ABDELKHIRANE.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  C. ABDELKHIRANE{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 220}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h00 - 15h15
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .58, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Angioplastie coronaire et TAVI
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ZTOT.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  S. ZTOT{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h15 - 15h30
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .61, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 16, fontFamily: 'montserratbold', color: '#000000',}}>
                Les innovations dans la maladie coronaire
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/LEURENT.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  G. LEURENT{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rennes
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 210}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h30 - 16h00
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>


{/* --------------------------------------------------------- Page 6 --------------------------------------------------------- */}


          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                16h00 – 16h30
              </Text>
            </View>
            <View style={{left: 135, width: windowWidth * .7, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13.5, fontFamily: 'montserratbold', color: '#000000',}}>
                Le traitement antithrombotique : Nouvelle vision ?
              </Text>
            </View>
            <View style={{top: 30, left: 72.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 94, left: 72.5, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENNIS.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. BENNIS{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
            <View style={{top: 180, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/Atlas.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}Atlas Pharm - Groupe Tecnimed
              </Text>
            </View>
          </View>

          <View style={{marginTop: 260}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  16h30 – 17h00
                </Text>
              </View>
            <View style={styles.boxblank}>
            <Text style={{marginLeft: -10, fontSize: 13.5, fontFamily: 'montserratbold', color: '#000000',}}>
                Pause café - Visite des stands
              </Text>
            </View>
          </View>

          <View style={{marginTop: 60, flexWrap: 'wrap',}}>
            <View style={styles.titleboxorange} />
              <View style={styles.timeboxorange}>
                <Text style={styles.titleboldwhite}>
                  17h00 – 18h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={{fontSize: 15, fontFamily: 'montserratbold', color: '#d60115',}}>
                Séances valvulopathies
              </Text>
            </View>
          </View>

          <View style={{marginTop: 50}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Aouad.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    A. Aouad{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 45}}>
                <Image source={require('../Assets/Avatars/Masbahi.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    R. El Masbahi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text>
              </View>
            </View>
            <View style={{top: 170, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/SAHER.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    L. Saher{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text>
              </View>
              <View style={{left: 30}}>
                <Image source={require('../Assets/Avatars/Khatouri.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    A. Khatouri{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Marrakech
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 320}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h00 - 17h15
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .58, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Le rétrécissement aortique en situations difficiles
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/MOHTY.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  D. MOHTY{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Ryadh
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h15 - 17h20
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 80, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h20 - 17h35
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .57, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Rôle du cardiologue dans la préparation et le suivi du TAVI
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 90, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 119, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 80, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/SOUFIANI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. SOUFIANI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 210}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h35 - 17h40
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h40 - 17h55
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .58, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Traitement percutané des fuites mitrales
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/LEURENT.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  G. LEURENT{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rennes
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h55 - 18h00
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h00 - 18h15
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .58, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                La dégénérescence des bio prothèses
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/MOUGHIL.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  S. MOUGHIL{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 180}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h15 - 18h20
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h30 – 19h00
              </Text>
            </View>
            <View style={{left: 135, width: windowWidth * .73, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Insuffisance cardiaque : Quel traitement bradycardisant ?
              </Text>
            </View>
            <View style={{top: 30, left: 72.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 94, left: 72.5, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/MOUSTAGHFIR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. MOUSTAGHFIR{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
            <View style={{top: 180, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/SERVIER.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}SERVIER
              </Text>
            </View>
          </View>

          <View style={{marginTop: 260}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  20h 30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Dîner
              </Text>
            </View>
          </View>


{/* --------------------------------------------------------- Page 7 --------------------------------------------------------- */}



          <View style={{marginTop: 100, flexWrap: 'wrap'}}>
            <Text style={{marginLeft: 30, marginTop: 5}}>
              <Text style={styles.titlebold}>
                Samedi{" "}
              </Text>
              <Text style={styles.titlemedium}>
                04 Septembre 2021
              </Text>
            </Text>
          <View style={styles.line1}/>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#ec732f', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ec732f', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
              08h30 – 10h00
              </Text>
            </View>
            <View style={{left: 150, width: windowWidth * .66, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 16, fontFamily: 'montserratbold', color: '#000000',}}>
                La parole aux jeunes cardiologues
              </Text>
            </View>
          </View>

          <View style={{marginTop: 80}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Tahiri.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    A. Tahiri{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 75}}>
                <Image source={require('../Assets/Avatars/Doughmi.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    N. Doughmi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 170, left: 90, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Begdouri.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    A. Achkari Begdouri{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Tanger
                  </Text>
                </Text> 
              </View>  
              <View style={{left: 30}}>
                <Image source={require('../Assets/Avatars/ABIDI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    G. Abidi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 320}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                08h30 - 08h50
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Les dissections coronaires
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 45, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 74, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 35, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/AROUS.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  S. AROUS{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 170}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                08h50 - 09h00
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h00 - 09h20
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Que faire devant la découverte d’un FOP ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/CHAARA.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  J. CHAARA{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h20 - 09h30
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>
          
          <View style={{marginTop: 70}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h30 - 09h50
                </Text>
            </View>
            <View style={{left: 155, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14.5, fontFamily: 'montserratbold', color: '#000000',}}>
                Le TAVI : Quelles indications pour quels résultats ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/SEGHROUCHNI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. SEGHROUCHNI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                09h50 - 10h00
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                10h00 – 10h30
              </Text>
            </View>
            <View style={{left: 140, width: windowWidth * .73, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13.5, fontFamily: 'montserratbold', color: '#000000',}}>
                La FA chez le patient diabétique
              </Text>
            </View>
            <View style={{top: 30, left: 72.5, alignSelf: 'center', width: 1, height: 45, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 74, left: 72.5, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 35, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/GACH.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  O. GACH{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Liège
                </Text>
              </Text>     
            </View>
            <View style={{top: 160, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/BAYER.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}BAYER
              </Text>
            </View>
          </View>

          <View style={{marginTop: 240}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  10h30 – 11h00
                </Text>
              </View>
            <View style={styles.boxblank}>
            <Text style={{marginLeft: -10, fontSize: 13.5, fontFamily: 'montserratbold', color: '#000000',}}>
                Pause café - Visite des stands
              </Text>
            </View>
          </View>


{/* --------------------------------------------------------- Page 8 --------------------------------------------------------- */}


          <View style={{marginTop: 60, flexWrap: 'wrap',}}>
            <View style={styles.titleboxorange} />
              <View style={styles.timeboxorange}>
                <Text style={styles.titleboldwhite}>
                  11h00 – 12h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={{marginLeft: -20, fontSize: 13.5, fontFamily: 'montserratbold', color: '#d60115',}}>
              Séances Insuffisance Cardiaque
              </Text>
            </View>
          </View>

          <View style={{marginTop: 80}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Habbal.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    R. Habbal{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 75}}>
                <Image source={require('../Assets/Avatars/Cherti.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    M. Cherti{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 170, left: 125, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Benyass.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    A. Benyass{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text>
              </View>
              <View style={{left: 50}}>
                <Image source={require('../Assets/Avatars/NAJI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    A. Naji{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 310}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h00 - 11h20
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Quelle imagerie pour quelle insuffisance cardiaque ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ALOS.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  B. ALOS{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Poitiers
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h20 - 11h40
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .66, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Prise en charge du choc cardiogénique
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/LOGEART.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  D. LOGEART{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Paris
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                11h40 - 12h00
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .66, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Comment optimiser le traitement de l’IC ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENNIS.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. BENNIS{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                12h00 - 12h20
                </Text>
            </View>
            <View style={{left: 150, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                12h30 – 13h00
              </Text>
            </View>
            <View style={{left: 140, width: windowWidth * .64, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Les ISGLT2 : Pour être au coeur du diabète
              </Text>
            </View>
            <View style={{top: 30, left: 72.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 94, left: 72.5, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ADDAD.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  F. ADDAD{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Ariana, Tunisie
                </Text>
              </Text>     
            </View>
            <View style={{top: 180, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/BOEHRINGER.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}BOEHRINGER
              </Text>
            </View>
          </View>

          <View style={{marginTop: 260}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  13h00 – 14h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Déjeuner
              </Text>
            </View>
          </View>
          


{/* --------------------------------------------------------- Page 8 --------------------------------------------------------- */}


          <View style={{marginTop: 50}}>
            <View style={styles.titleboxred} />
              <View style={styles.timeboxred}>
                <Text style={styles.titleboldwhite}>
                  13h00 – 14h30
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={styles.titleboldblack}>
                Atelier - Déjeuner
              </Text>
            </View>
          </View>
          
          <View style={{marginTop: 80}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 1
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Le Strain en pratique
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 45, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 74, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 35, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BELGHITI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  H. BELGHITI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 170}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 70, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 2
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Comment lire une coronarographie ? A propos de cas cliniques
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 80, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 109, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 70, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENNOUNA2.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  G. BENNOUNA{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 205}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 70, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 3
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .67, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Comment interpréter les biomarqueurs en cardiologie ? A propos de cas cliniques
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 80, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 109, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 70, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/LOGEART.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  D. LOGEART{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Paris
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 210}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 70, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 60, width: windowWidth * .18, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                Salle 4
                </Text>
            </View>
            <View style={{left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#293881',}}>
                Écho Doppler vasculaire des membres inférieurs : Cas cliniques
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 80, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 109, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 70, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/DETRICHE.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  G. DETRICHE{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Paris
                </Text>
              </Text>     
            </View>
          </View>


{/* --------------------------------------------------------- Page 9 --------------------------------------------------------- */}


          <View style={{marginTop: 200, flexWrap: 'wrap',}}>
            <View style={styles.titleboxorange} />
              <View style={styles.timeboxorange}>
                <Text style={styles.titleboldwhite}>
                  14h30 - 16h00
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={{marginLeft: -10, fontSize: 16, fontFamily: 'montserratbold', color: '#d60115',}}>
                Séances à thèmes
              </Text>
            </View>
          </View>

          <View style={{marginTop: 80}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 40, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/Arharbi.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    M. Arharbi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 75}}>
                <Image source={require('../Assets/Avatars/Alami.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    M. Alami{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>    
            </View>
            <View style={{top: 170, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Mezalek.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    Z. Tazi Mezalek{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text>
              </View>
              <View style={{left: 45}}>
                <Image source={require('../Assets/Avatars/SCADI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    E. Scadi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Khouribga
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 310}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                14h30 - 14h45
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .66, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Gestion des AOD en situations complexes
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ELALAMY.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  I. ELALAMY{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Paris
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                14h45 - 14h50
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 80}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                14h50 - 15h05
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Les aortites inflammatoires
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 45, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 74, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 35, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/HARMOUCH.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  H. HARMOUCH{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Rabat
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 170}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h05 - 15h10
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 80}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 75, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h10 - 15h25
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Contribution de l’imagerie à l’évaluation du risque cardiovasculaire
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 85, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 114, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 75, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/KOWTANOR.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  S. KOWNATOR{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Thionville
                </Text>
              </Text>
            </View>
          </View>

          <View style={{marginTop: 210}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h25 - 15h30
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 80}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h30 - 15h45
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 13, fontFamily: 'montserratbold', color: '#000000',}}>
                Le point sur les grands essais actuels en cardiologie
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/BENNIS.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  A. BENNIS{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                15h45 - 15h50
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44a33c', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                16h00 – 16h30
              </Text>
            </View>
            <View style={{left: 140, width: windowWidth * .67, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Nouveautés dans la prise en charge de l’HTA
              </Text>
            </View>
            <View style={{top: 30, left: 72.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 94, left: 72.5, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#44a33c', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/GIRERD.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  X. GIRERD{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Paris
                </Text>
              </Text>     
            </View>
            <View style={{top: 180, left: 40, width: windowWidth * .7, position: 'absolute', borderRadius: 50, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{top: 10,left: 65, alignSelf: 'center', width: 1, height: 40, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <Image source={require('../Assets/Sponsors/MERCK.png')} style={{width: windowWidth * .15, height: windowHeight * .07, alignSelf: 'center'}}/>
              <Text style={{marginLeft: 20, fontSize: 15, fontFamily: 'montserratsemibold', color: '#000000',}}>
                Avec le soutien des laboratoires{"\n"}MERCK
              </Text>
            </View>
          </View>

          <View style={{marginTop: 260}}>
            <View style={styles.titleboxpurple} />
              <View style={styles.timeboxpurple}>
                <Text style={styles.titleboldwhite}>
                  16h30 – 17h00
                </Text>
              </View>
            <View style={styles.boxblank}>
              <Text style={{marginLeft: -10, fontSize: 13.5, fontFamily: 'montserratbold', color: '#000000',}}>
                Pause café - Visite des stands
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 65, position: 'absolute', backgroundColor: '#ec732f', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ec732f', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h00 – 18h30
              </Text>
            </View>
            <View style={{left: 155, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{marginTop: 5,}}>
                <Text style={{fontSize: 14, fontFamily: 'montserratmedium', color: '#d31621',}}>
                  LE DÉBAT DES JOURNÉES :{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#d31621',}}>
                  LE PROLAPSUS MITRAL DANS TOUS SES ÉTATS
                </Text>
              </Text>  
            </View>
          </View>

          <View style={{marginTop: 80}}>
          <View style={{left: 60, justifyContent: 'center', width: windowWidth * 1.5, height: 320, position: 'absolute', backgroundColor: '#d31621', borderRadius: 50, alignItems: 'center',
        justifyContent: 'center',}}/>
          <Text style={{marginLeft: 70, textAlign: 'center', margin: 8, fontSize: 18, fontFamily: 'montserratbold', color: '#ffffff',}}>
            Modérateurs
          </Text>
          <View style={{top: 50, left: 100, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View style={{left: 20}}>
                <Image source={require('../Assets/Avatars/CHRAIBI.png')} style={{width: windowWidth * .19, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 10, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    S. Chraïbi{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View> 
              <View style={{left: 60}}>
                <Image source={require('../Assets/Avatars/BENSAFIDDINE.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    S. Bensafiddine{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Casablanca
                  </Text>
                </Text> 
              </View>
            </View>
            <View style={{top: 170, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50, flexDirection: 'row',}}>
              <View>
                <Image source={require('../Assets/Avatars/Raissouni.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    Z. Raissouni{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Tanger
                  </Text>
                </Text>
              </View>
              <View style={{left: 55}}>
                <Image source={require('../Assets/Avatars/Aouad.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
                <Text style={{textAlign: 'center'}}>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#ffffff',}}>
                    A. Aouad{"\n"}
                  </Text>
                  <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#ffffff',}}>
                    Rabat
                  </Text>
                </Text> 
              </View>    
            </View>
          </View>

          <View style={{marginTop: 320}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 75, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h00 - 17h15
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .58, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 14, fontFamily: 'montserratbold', color: '#000000',}}>
                Difficultés et pièges lors de la quantification de l’IM dans le prolapsus mitral
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 85, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 114, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 75, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/ABERGEL.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  E. ABERGEL{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Bordeaux
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 210}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h15 - 17h30
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Le prolapsus mitral et risque de mort subite
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/TOURNEAU.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  T. LE TOURNEAU{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Nantes
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 95, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h30 - 17h45
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .6, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Les indications opératoires dans les IM importantes asymptomatiques par prolapsus mitral
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 105, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 134, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 95, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/MALERGUE.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  M.C. MALERGUE{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Paris
                </Text>
              </Text>   
            </View>
          </View>

          <View style={{marginTop: 230}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                17h45 - 18h05
                </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .61, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Chirurgie conservatrice ou techniques percutanées ?
              </Text>
            </View>
            <View style={{top: 30, left: 92.5, alignSelf: 'center', width: 1, height: 65, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 94, left: 92.5, alignSelf: 'center', width: 150, height: 1, position: 'absolute', backgroundColor: '#293881', borderRadius: 50,}}/>
            <View style={{top: 55, left: 130, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/VILLEMOT.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  J.P. VILLEMOT{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Nancy
                </Text>
              </Text>     
            </View>
          </View>

          <View style={{marginTop: 190}}>
            <View style={{left: 100, justifyContent: 'center', width: windowWidth * 1.5, height: 35, position: 'absolute', backgroundColor: '#293881', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 30, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293881', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h00 - 18h30
                </Text>
            </View>
            <View style={{left: 170, width: windowWidth * .63, position: 'absolute', borderRadius: 50,}}>
              <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                Discussion
              </Text>
            </View>
          </View>

          <View style={{marginTop: 70}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 55, position: 'absolute', backgroundColor: '#ec732f', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ec732f', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h30 – 18h45
              </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Text style={{marginTop: 5,}}>
                <Text style={{fontSize: 15, fontFamily: 'montserratmedium', color: '#d31621',}}>
                  Hommage au{" "}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#d31621',}}>
                  Professeur{"\n"}Abdesslam Srairi
                </Text>
              </Text>
            </View>
            <View style={{top: 30, left: 70, alignSelf: 'center', width: 1, height: 190, position: 'absolute', backgroundColor: '#ec732f', borderRadius: 50,}}/>
            <View style={{top: 94, left: 70, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#ec732f', borderRadius: 50,}}/>
            <View style={{top: 219, left: 70, alignSelf: 'center', width: 160, height: 1, position: 'absolute', backgroundColor: '#ec732f', borderRadius: 50,}}/>
            <View style={{top: 55, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/SRAIRI.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  Pr. A. SRAÏRI{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>   
            </View>
            <View style={{top: 180, left: 120, width: windowWidth * .65, position: 'absolute', borderRadius: 50,}}>
              <Image source={require('../Assets/Avatars/Soulami.png')} style={{width: windowWidth * .2, height: windowHeight * .1, alignSelf: 'center'}}/>
              <Text style={{textAlign: 'center'}}>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  Présenté par S. Soulami{"\n"}
                </Text>
                <Text style={{margin: 9, fontSize: 15, fontFamily: 'montserratmedium', color: '#000000',}}>
                  Casablanca
                </Text>
              </Text>   
            </View>
          </View>

          <View style={{marginTop: 320}}>
            <View style={{left: 80, justifyContent: 'center', width: windowWidth * 1.5, height: 75, position: 'absolute', backgroundColor: '#e3007e', borderRadius: 50, opacity: .4,}}/>
            <View style={{left: 10, width: windowWidth * .32, height: 30, position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e3007e', borderRadius: 50,}}>
              <Text style={styles.titleboldwhite}>
                18h45 – 19h00
              </Text>
            </View>
            <View style={{left: 160, width: windowWidth * .56, position: 'absolute', borderRadius: 50,}}>
                <Text style={{marginTop: 10, fontSize: 15, fontFamily: 'montserratbold', color: '#000000',}}>
                  Remise des prix des posters de l’AMCAR et du Prix Actelion sur l’HTAP.
                </Text>
            </View>
          </View>

          <View style={{height:400}} />
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
  parent1:{
    marginTop: 50,
    flexWrap: 'wrap',
  },
  line1:{
    top: 35,
    left: 30,
    alignSelf: 'center',
    width: windowWidth,
    height: 1.5,
    position: 'absolute',
    backgroundColor: '#d60115',
    borderRadius: 50,
  },
  boxblank:{
    left: 170,
    justifyContent: 'center',
    width: windowWidth * 1.5,
    height: 30,
    color: '#ffffff',
    position: 'absolute',
  },
  titleboxorange:{
    left :10,
    justifyContent: 'center',
    width: windowWidth * 1.5,
    height: 30,
    position: 'absolute',
    backgroundColor: '#ec732f',
    borderRadius: 50,
    opacity: .4,
  },
  timeboxorange:{
    left :10,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * .33,
    height: 30,
    position: 'absolute',
    backgroundColor: '#ec732f',
    borderRadius: 50,
    opacity: 1,
  },
  titleboxred:{
    left: 10,
    justifyContent: 'center',
    width: windowWidth * 1.5,
    height: 30,
    position: 'absolute',
    backgroundColor: '#d31621',
    borderRadius: 50,
    opacity: .4,
  },
  timeboxred:{
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * .33,
    height: 30,
    position: 'absolute',
    backgroundColor: '#d31621',
    borderRadius: 50,
    opacity: 1,
  },
  titleboxpurple:{
    left: 10,
    justifyContent: 'center',
    width: windowWidth * 1.5,
    height: 30,
    position: 'absolute',
    backgroundColor: '#61245f',
    borderRadius: 50,
    opacity: .4,
  },
  timeboxpurple:{
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth * .33,
    height: 30,
    position: 'absolute',
    backgroundColor: '#61245f',
    borderRadius: 50,
    opacity: 1,
  },
  titlebold:{
    shadowOpacity: .8,
    shadowColor: '#000000',
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
      width:8,
      height:5
    },
    fontSize:25,
    fontFamily: 'montserratbold',
    color: '#d60115',
  },
  titleboldwhite:{
    fontSize: 15,
    fontFamily: 'montserratbold',
    color: '#ffffff',
  },
  titleboldblack:{
    fontSize: 15,
    fontFamily: 'montserratbold',
    color: '#000000',
  },
  titlemedium:{
    shadowOpacity: .8,
    shadowColor: '#000000',
    shadowColor:'#838383',
    shadowOpacity:0.8,
    shadowRadius:7,
    shadowOffset:{
      width:8,
      height:5
    },
    fontSize: 25,
    fontFamily: 'montserratmedium',
    color: '#d60115',
  },
});
