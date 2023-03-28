import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, Dimensions, Button, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av';
import {  useHistory } from 'react-router-dom';


export default function RoundButton({ text, onPress, navigation }) {
    let history = useHistory();
    const redirect = () => {
        history.push('google.com')
    }
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return(
        <View>
            <Video
                style={{zIndex:0, height: windowHeight+2, width:windowWidth+2, position:'absolute', top:-2, right:0, left:0, bottom:0}}
                shouldPlay
                repeat
                source={require('./Vid/LoopVid.mp4')}
                resizeMode="cover"
                isLooping
            />
            <View style={{zIndex:2, position:'relative'}}>
                <View style={{
                    flex:1,
                    marginTop: 170,
                    alignItems: 'center',
                    justifyContent: 'center',}}
                >
                <Image source={require('../Assets/Img/AfficheHome.png')} style={{width: windowWidth, height: windowHeight * .37,}} />
                </View>
                <View style={{marginTop: 150}}>
                    <ScrollView>
                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Program')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="calendar-outline" size={50} /></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Programme</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity title='President' onPress={()=>navigation.navigate('Mot du Président')}>
                                <View style={styles.button}>
                                    <Image source={require('../Assets/Img/Président.png')} style={{width: 65, height: 65,}} />
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Mot du Prés.</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Comité de l'AMCAR")}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="people-outline" size={55}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Comité</Text>
                                </View>
                            </TouchableOpacity >
                            <TouchableOpacity onPress={()=>navigation.navigate('Live')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="camera-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Live</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Conférenciers')}>
                                <View style={styles.button}>
                                    <Image source={require('../Assets/Img/speaker.png')} style={{width: 65, height: 65,}} />
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Conférenciers</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('Com')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="easel-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Posters</Text>
                                </View>
                            </TouchableOpacity>                        
                        </View>

                        <View style={styles.parent}> 
                            <TouchableOpacity onPress={()=>Linking .openURL('https://q.amcar.ma') .catch(err => console.error('Error', err))}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="help-circle-outline" size={60}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Vos Questions</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('e-Stands')}>
                                <View style={styles.button}>
                                    <Image source={require('../Assets/Img/handShake.png')} style={{width: 65, height: 55,}} />
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>e-Stands</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Infos')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="information-circle-outline" size={60}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Infos</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:700}} />
                    </ScrollView>
                </View>
            </View>
        </View>
    )  
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    parent:{
        flexDirection: "row",
        justifyContent: "space-evenly",
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
        borderRadius: 20,
        backgroundColor:'#03269d',
        width: windowWidth/4,
        borderWidth: 2,
        alignItems: 'center',
        borderColor: '#d60115',
        height: windowWidth/4,
        justifyContent:"center",
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
    names:{
        marginBottom:15,
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    texts:{
        fontSize:13 ,
        fontFamily: 'montserratsemibold'
    },
})



