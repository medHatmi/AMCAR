import React from 'react';
import { Dimensions, StyleSheet, Text, View, Platform , ScrollView, Image, TouchableOpacity, Linking} from 'react-native';
import { Video } from 'expo-av';

export default function ComScreen() {
  
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
        <TouchableOpacity onPress={()=>Linking .openURL(
          'https://www.amcar.ma/../../../ressources/att/posters/2021/488/488-2021-Communication.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 330, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  1  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Is there any Correlation between pulmonary hypertension severity and left ventricular diastolic function indices in hypertensive patients? Prospective study about 150 hypertensive patients
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                Y. Ikejder - M. Mouadili
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                S. El Karimi - M. El Hattaoui
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Cardiology Department - Mohammed VI University Hospital - Marrakesh
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/221/221-2021-Hypertension Artérielle pulmonaire héritable poster AMCAR.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 270, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  3  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Hypertension Artérielle Pulmonaire Héritable, une Maladie… deux Destins
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                M. Boumaaz - M. Malki - S. Ahchouch
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                A. Zaimi - I. Asfalou - A. Benyass
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Centre de Cardiologie - Hôpital Militaire d’Instruction Med V - Rabat Maroc
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/256/256-2021-PROFIL ENDOCARDITE.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 350, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  4  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Profil échocardiographique de l’endocardite infectieuse : Expérience du service de cardiologie de l’hôpital militaire d’instruction Mohamed V de rabat (à propos de 42 cas)
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                M. Nadif - S. Kaddaf - S. Faid
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                A. Zaimi - N.Loudiyi - I. Asfalou
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                A. Benyass
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service des explorations non invasifs en cardiologie - Hôpital Militaire d’Instruction Mohamed V Rabat Maroc
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/256/256-2021-TCNP (1).pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 340, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  5  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                ASPECTS CLINIQUES, ELECTRIQUES, ECHOCARDIOGRAPHIQUES ET ANGIOGRAPHIQUES DE L’ATTEINTE DU TCG (à propos de 100 cas)
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                M. Nadif - S. Faid - S. Kaddaf
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                M. Ait Houssa - I.Asfalou - A. Benyass
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Services de cardiologie - Hôpital Militaire d’Instruction Mohamed V Rabat Maroc
                Services de chirurgie cardio-vasculaire - Hôpital Militaire d’Instruction Mohamed V Rabat Maroc
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/443/443-2021-coarctation of the aorta during takayasu syndrome.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  6  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Coarctation of the aorta during takaysu syndrome in a 10 year old patient (case report)
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                O. Hdioud - A. Maliki
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                F.Z. Fikrat - N. Fellat - R.Fellat
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Cardiology A - Mohammed V University - Rabat - Morocco
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/439/439-2021-takotsubo post avc.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 320, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  7  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
              Syndrome de Tako Tsubo post Accident vasculaire cérébrale ischémique chez une patiente en fibrillation atriale : à propos d’un cas
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                K. Zniber - P. Goube
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                Y. Benchekroun - D. Srifi
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie Hôpital sud Francilien - Corbeil Essonnes - France
                {"\n"}
                Service de cardiologie CHU Avicenne - Rabat Maroc
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/439/439-2021-découverte fortuite dune arteria lusoria.pdf'
          ) .catch(err => console.error('Error', err))}>
           <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  8  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Découverte fortuite d’une Arteria Lusoria durant une coronarographie par voie radiale : A propos d’un cas
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                K. Zniber - M. Gabsi
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                Y. Benchekroun - N. Fellat
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie - Centre Hospitalier Avicenne - Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/439/439-2021-PDA fermeture .pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  9  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                A Challenging Case of Patent Ductus Arteriosus Device Closure in an Adult with Unconventional Views.
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                K. Zniber - Y. Benchekroun - N. Fellat
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Centre Hospitalier Universitaire Ibn Sina - Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/456/456-2021-Syndrome de Meodows à propos de 4 cas-converti.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  10  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Syndrome de Meadows : à propos de 4 un cas.
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                K.Manouri - Y. Oussou - D. Srifi
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                H. Kharbouch - N. Doghimi - M. Cherti
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Cardiologie B Hôpital Ibn Sina RABAT
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/456/456-2021-Dysfonction sinusale nourisson-converti.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  11  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Dysfonction sinusale sur cœur sain chez le nourrisson. A propos d’un cas.
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                K.Manouri - H. Kharbouch - Y. Oussou
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                D. Srifi - M. Cherti
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Chirurgie Cardiovasculaire B - CHU Avicenne - Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/456/456-2021-Anévrysme géant de l’artère pulmonaire-converti.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 220, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  12  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Anévrysme géant de l’artère pulmonaire
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                K. Manouri - H. Kharbouch - Y. Oussou
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                N. SNOUSSI - M. Cherti
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/303/303-2021-Opportunistic Screening for atrial fibrillation in hypertensive patients.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  13  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Opportunistic Screening for atrial fibrillation in hypertensive patients using a mobile application (Prospective study of 160 cases)
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                A. El Adaoui - H. Zahidi - R. Habbal
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Cardiolgy departement - Ibn Rochd University Hospital
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/493/493-2021-MOUHIBZaynab14.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 400, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  14  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                La spondylodiscite dans l’endocardite infectieuse, une métastase septique peu commune, à propos de 2 cas
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                Z. Mouhib - N. Laktib - M. Boumaaz
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                A. Zaimi - N. Mouine - I. Asfalou
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                A. Benyass
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie clinique au centre de cardiologie à l’hopital militaire d’instruction Mohammed V
                {"\n"}
                Service des explorations non invasives au centre de cardiologie à l’hopital militaire d’instruction Mohammed V
                {"\n"}
                Centre de cardiologie à l’hopital militaire d’instruction Mohammed V
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/494/494-2021-Phostoxin or Aluminium Phosphide poisoning.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 260, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  15  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Phostoxin or Aluminium Phosphide poisoning: ECG roller coaster pattern
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                N. Belharty - G. Ziani - C. Kitihoum
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                R. El Azouzi - N. Fellat
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Department of Cardiology A, Ibn Sina Hospital, Rabat, Morocco
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/407/407-2021-CMH et grossesse POSTER.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  17  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Is it possible to bring 4 pregnancies to term with obstructive HCM without maternal or fetla complications ? (A case report and literature review)
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                Y. Oussou - R. Jennane - N. Snoussi
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                N. Doghimi - M. Cherti
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Department of Cardiology B, IBN SINA HOSPITAL CENTER, Ratat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/407/407-2021-CMH simulant un SCA POSTER.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  18  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                CMH simulant un syndrome coronarien aigu avec sus-décalage du segment ST!
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                Y. Oussou - M. Nadif
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                Z. Lakhal, A. Benyass
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie de l’Hôpital Militaire d'Instruction Mohamed V HMIMV RABAT
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/495/495-2021-Particularités ECG et ANGIO chez le diabétique.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 420, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  19  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Particularités électrique et coronarographique du syndrome coronarien aigue chez le diabétique type II
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14, }}>
                B. Phany - M. Issanga - FB.E. Othende
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14, }}>
                JR.I. Onguema - I. Ganse - M. EL Jamili
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14, }}>
                D. Benzaroual - S. Karimi - A. Bouzerda
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                L. Bendriss - M. EL Hattaoui - A. Khatouri
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie - Chu Med VI - Marrakech
                {"\n"}
                Service de cardiologie - Hôpital Militaire Avicenne - Marrakech
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/480/480-2021-poster amcar maladie de fabry.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 380, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  20  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Maladie de Fabry-Anderson : une maladie avec atteinte cardiaque polymorphe
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                Y. Benchekroun - A. El Blidi
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                M. Bennani - J. Kheyi
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                H. Bouzelmat - A. Chaib - A. Benyass
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de rythmologie du centre de cardiologie de l’HMIMV Rabat, Maroc
                {"\n"}
                Service des explorations non invasives du centre de cardiologie de l’HMIMV Rabat, Maroc
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/496/496-2021-poster finale allergie protamine.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 380, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  21  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                A propos d’un cas d’Allergie à la protamine chez un patient opéré pour un remplacement valvulaire.
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                A. Aden - R. Mounir - A. Seghrouchni
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                N. Atmani - A. Ayad - A. Moujahid
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                Y. Moutakillah
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Chirurgie Cardiaque - Hôpital Militaire d'Instruction Mohamed V - Rabat
                {"\n"}
                Service de Cardiologie - Hôpital Militaire d'Instruction Mohamed V - Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/496/496-2021-poster finale FAP.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 380, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  22  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                A propos d’un cas, d’un nourrisson présentant une cardiopathie congénitale à type de Fenêtre Aorto-Pulmonaire
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                A. Aden - N. Atmani - R. Mounir
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15, }}>
                 S. El Manir - A. El Idrissi - A. Moujahid
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                Y. Moutakillah
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Chirurgie Cardiaque - Hôpital Militaire d'Instruction Mohamed V - Rabat
                {"\n"}
                Service de Cardiologie - Hôpital Militaire d'Instruction Mohamed V - Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/415/415-2021-POSTER ANOMALIE CORONAIRE.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  23  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Anomalies de naissance et de trajet des artères coronaires : Apport du coroscanner au diagnostic et à l’angioplastie
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                Y. Serroukh - P. Goube
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie centre hospitalier sud francilien, France
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/415/415-2021-posters strain D CMH.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  24  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Intérêt de speckle tracking dans la stratification du risque de mort Subite dans la CMH : à propos de 13 cas
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                Y. Serroukh - F. Ait Yahya - P. Goube
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie centre hospitalier sud francilien, France
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/474/474-2021-lead fracture EP.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  26  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Lead fracture : a threatening pacemaker malfunction.
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                A.M. Alaoui - J. Ngadi - M. Bennani
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                A. Benelmekki - H. Bouzelmat - A. Chaib
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de rythmologie de l’hôpital militaire d’instruction Mohamed V - Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/477/477-2021-COMMUNITY-ACQUIRED CULTURE-NEGATIVE ENDOCARDITIS.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  27  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Community-acquired culture-negative endocarditis: an echocardiographic study
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                H.A. Zahidi - A. Maaroufi - S. Arous
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                G. Bennouna - L. Azzouzi - R. Habbal
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de CARDIOLOGIE, CHU IBN ROCHD, CASABLANCA
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/370/370-2021-AMCAR 1-pdf (1).pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  28  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Rapidly progressive extensive valvular calcification in systemic sclerosis
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                S. Scadi - C.S. Suty - MP.N. Mottoh
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                L. Filippetti - N. Pace - O. Huttin
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                DEPARTMENT OF CARDIOLOGY, UNIVERSITY HOSPITAL OF NANCY, VANDOEUVRE-LÈS-NANCY, FRANCE
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/370/370-2021-AMCAR 2-pdf (1).pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 340, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  29  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Malignant mitral valve prolapse, more pieces to the « perfect storm »: from static fibrosis to dynamic stretch
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                S. Scadi - O. Huttin - N. Hammache
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                MP.N. Mottoh - L. Filippetti - N. Pace
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                A. Fraix - L. Trousselle - C.S. Suty
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                C. De Chillou
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Department of Cardiology, University Hospital of NANCY, Vandoeuvre-lès-Nancy, FRANCE
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/477/477-2021-RIKS FACTORS PPCM.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 330, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  30  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                RISK FACTORS of MEADOWS CARDIOMYOPATHY: CASABLANCA UNIVERSITY HOSPITAL
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                H.A. Zahidi - Y. Ettagmouti - A. Maaroufi
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
               S. Arous - G. Bennouna - L. Azzouzi
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                R. Habbal
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de CARDIOLOGIE, CHU IBN ROCHD, CASABLANCA
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/477/477-2021-OBSERVANCE THERAPEUTIQUE CHEZ L’HYPERTENDU SUIVI EN CONSULTATION DE.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 350, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  31  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                OBSERVANCE THERAPEUTIQUE CHEZ L’HYPERTENDU SUIVI EN CONSULTATION DE CARDIOLOGIE AU CHU IBN ROCHD DE CASABLANCA
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                H.A. Zahidi - A. Adaoui - K. K.Badaoui
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
               S. Arous - G. Bennouna - L. Azzouzi
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                R. Habbal
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de CARDIOLOGIE, CHU IBN ROCHD, CASABLANCA
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/456/456-2021-SCA chez la femme marocaine à propos de 191 cas-converti.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  32  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                SCA chez la femme: à propos de 191 cas
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                K. Manouri - Y. Oussou - M. Snoussi
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                H. Kharbouch - D. Srifi - J. Zarzur
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                M. Cherti
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de cardiologie B, Hopital Ibn Sina RABAT
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/497/497-2021-MANIRSalma33.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 340, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  33  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Masse intracardiaque compliquant une maladie de BEHCET : à propos d'un cas
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                S. El Manir - N. Athmani - A. Seghrouchni
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                F. Nya - S. Bellouize - S. Belkhadir
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                R. Mounir - A. Aden Ali - M. Bamous
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                Y. Moutakiallah
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de chirurgie cardiaque, Hôpital militaire d’instruction Mohamed V, Rabat MAROC
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/491/491-2021-morbimortalité en chirurgie valvulaire 2.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  34  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Morbi-mortalité en chirurgie valvulaire cardiaque
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                A. Abdellaoui - S. Lyazidi - O. El Allam
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                A. El Adaoui - Y. Ettaoumi
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Chirurgie Cardiovasculaire CHU Ibn Rochd de Casablanca
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/497/497-2021-MANIRSalma35.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 350, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  35  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Faux anevrisme de l'AORTE ascendante : Complication tardive d'une endocardite infectieuse
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                S. El Manir - N. Athmani
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                F. Nya - A. Seghrouchni
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                S. Bellouize - S. Belkhadir
              </Text>
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                R. Mounir - A. Aden Ali
              </Text>
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 15,}}>
                M. Bamous - Y. Moutakiallah
              </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de chirurgie cardiaque, hôpital militaire d’instruction mohamed V, rabat MAROC
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/482/482-2021-Acute double coronary occlusion and its misleading presentation.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  36  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Acute double coronary occlusion and its misleading presentation: an unusual case report 
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                M. Assamti - N. Ismaili - N. El Ouafi
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Mohammed VI university hospital of Oujda
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/482/482-2021-intra cardiac hydatic cyst.pptx.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  37  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Right-sided cardiac hydatid cyst complicated with pulmonary embolisation: a pediatric case report
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                M. Assamti - N. Ismaili - N. El Ouafi
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Department of cardiology, Mohammed VI university hospital of Oujda
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/367/367-2021-Particularities of acute coronary syndrome in young population.pptx.4amcar.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  38  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Particularities of acute coronary syndrome in young population
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                S. Faid - M. Nadif - H. El Ghiati
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  J.Fagouri - D. Britel - Z. Lahlafi
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  H. Faliouni - Z. Lakhal - A. Benyass
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Intensive care Unit, Cardiology Department, Military training hospital of Mohamed V of Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/367/367-2021-Acute aortic occlusion secondary to myxoma of the.pptx.4AMCAR.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  39  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Acute aortic occlusion secondary to myxoma of the left atrium: a Case report
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                S. Faid - M. Nadif - D. Britel - Z. Lahlafi
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  H. Faliouni - Z. Lakhal - A. Benyass
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Intensive care Unit, Cardiology Department, Mohammed V training Military Hospital of Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/367/367-2021-Management of Spontaneous Coronary Artery Dissection During Delivery.pptx.4AMCAR.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  40  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Management of Spontaneous Coronary Artery Dissection During Delivery, Challenging Matter
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  S. Faid - M. Nadif - S. Kaddaf
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  A. Samih - N. Doghmi - M. Cherti
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Department of Cardiology B, IBN SINA Hospital, Mohamed V University, Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/502/502-2021-AMCA CMDi (2).pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 240, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  41  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Does heart failure etiology affect heart failure prognosis? About a comparative study
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  M. Drissa - W. Yaakoubi - A. Boussema
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  A. Ftini - M. Elaarbi - Y. Ben Youssef
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  H. Drissa
                </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/502/502-2021-AMCA CARACT FE i .pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  42  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Left Ventricle systolic dysfunction in Acute Coronary Syndrome Settings: Prevalence and patient’s Characteristics in a Tunisian population 
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  W. Yaakoubi - B. Rekik - F. Zoueri
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  S. Boudiche - F. Mghaith - S. Ouali
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  M. Ben Hlima - M.S. Mourali
                </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/501/501-2021-AMYLOSE.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  43  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Acute Coronary Syndrome Revealing Non-AA Amyloidosis : Case-Report 
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                N.M. Mackonia - A. Fadoul - Z. Ammouri
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  A. Drighil - L. Azouzi - R. Habbal
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Cardiologie, CHU-Ibn Rochd - Casablanca - Maroc
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/504/504-2021-Predictive factors of cardiogenic shock.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 350, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  44  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Predictive Factors of Cardiogenic Shock in the Setting of Acute Coronary Syndrome: a Moroccan Experience 
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                H. Chraibi - Z. Fassi Fehri - H. Ouaouicha
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  H. El Ghiati - Z. Laoufi - A. Benyass
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                Z. Lakhal
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Cardiology center, Mohammed V Military Instruction Hospital, Mohammed V University, Rabat, Morocco
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/465/465-2021-Triple valve endocarditis poster PDF.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  45  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Triple valve endocarditis : About a case report and literature review
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  Y. Hamine - F. Karim - M. Amri
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  I. Nouamou - S. Arous - G. Bennouna
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  A. Drighil - L. Azzouzi - R. Habbal
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Cardiologie - CHU Ibn Rochd - Casablanca
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/465/465-2021-A rare cause of pacemakers dysfunction Twiddler syndrome.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 300, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  46  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                A rare cause of pacemaker's dysfunction Twiddler syndrome
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  Y. Hamine - H.A. Zahidi - K. Badaoui
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  M. Amri - I. Nouamou - S. Arous
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  G. Bennouna - A. Drighil - L. Azzouzi
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  R. Habbal
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Cardiologie - CHU Ibn Rochd - Casablanca
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/501/501-2021-takotsubo finale.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 280, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  47  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                TAKOTSUBO associé à une Embolie pulmonaire
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  N.M. Mackonia - E. Ovaga - R. Habbal
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  M. Amri - I. Nouamou - S. Arous
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Cardiologie - CHU Ibn Rochd - Casablanca
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/393/393-2021-sportif coeur amcar (4).pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 570, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  48  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Particularités échocardiographiques du coeur du sportif , à propos de 45 footballeurs et footballeuses de l’équipe des FAR
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  N. Laktib - B. Masmoudi - T. Zair
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  J. Nadim - N. Benosmane - N. Mouine
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  I. Asfalou - A. Benyass
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
              Service des soins intensifs du centre de cardiologie de l’Hôpital militaire d’instruction Mohammed V - Rabat
              {"\n"}
              Service des explorations non invasives du centre de cardiologie de l’Hôpital militaire d’instruction Mohammed V Rabat
              {"\n"}
              Centre sportif des Forces Armées Royales Salé
              {"\n"}
              Service de cardiologie Clinique du centre de cardiologie de l’Hôpital militaire d’instruction Mohammed V Rabat
              {"\n"}
              Centre de cardiologie de l’Hôpital militaire d’instruction Mohammed V Rabat
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/511/511-2021-AROUSAmina49.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 320, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  49  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Dysfonction érectile et épaisseur intima média carotidienne et fémorale : quelle corrélation ?
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  A. Arous - I. Bensahi - M. El Harras
                </Text>
                <Text style={{ marginTop: 5, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  S. Bennani - F. Merzouk - A. El Ouarradi
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  Z. Guennoun -  M. Sabry
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
                Service de Cardiologie, Hôpital Cheikh Khalifa, Casablanca
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>Linking .openURL(
'https://www.amcar.ma/../../../ressources/att/posters/2021/512/512-2021-Coronaropathie - TAVI.pdf'
          ) .catch(err => console.error('Error', err))}>
          <View style={{ marginTop: 25, width: windowWidth * .9, alignItems: 'center', justifyContent: 'center', height: 370, borderRadius: 25, shadowColor:'#838383', shadowOpacity:0.8, shadowRadius:7, shadowOffset:{ width:8, height:5 }, backgroundColor: '#ffffff', }}>
            <View style={{ width: windowWidth * .8, justifyContent: 'center',}}>
              <Text style={{ textAlign: 'center', marginBottom: 10, fontFamily: 'montserratbold', fontSize: 20,}}>
                ·  50  ·
              </Text>
              <View style={{ marginTop: 5, marginBottom: 5, borderRadius: 50, height: 2, width: 50, backgroundColor: '#d31621', alignSelf: 'center'}} />
              <Text style={styles.bold}>
                Gestion de sténoses coronaires significatives découvertes en coronarographie pré chirurgicale chez un patient de 83 ans avec indication de TAVI : quand et comment revasculariser Revue de la littérature à partir d´un cas clinique 
              </Text>
              <View style={{ borderRadius: 50, marginTop: 5, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
                <Text style={{ marginTop: 5, marginBottom: 10, fontFamily: 'montserratsemibold', fontSize: 14,}}>
                  A.S Tandia - V. Martin
                </Text>
              <View style={{ borderRadius: 50, marginBottom: 5, height: 2, width: windowWidth * .8, backgroundColor: '#d31621',}} />
              <Text style={styles.medium}>
              Centre Hospitalier d'Angoulême - Saint Michel - France
              {"\n"}
              Centre Hospitalier Universitaire MOHAMMED VI - Marrakech - Maroc
              </Text>
            </View>
          </View>
          </TouchableOpacity>

          <View style={{height:200}} />
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
  bold :{
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'montserratbold',
    fontSize: 15, 
  },
  semibold :{
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'montserratsemibold',
    fontSize: 15, 
  },
  regular :{
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'montserratlight',
    fontSize: 15, 
  },
  medium :{
    marginTop: 5,
    color: '#03269d',
    opacity: .85,
    fontFamily: 'montserratmedium',
    fontSize: 15,
  },
});
