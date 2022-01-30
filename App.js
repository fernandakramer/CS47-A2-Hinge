import AppLoading from 'expo-app-loading';
import { Platform, StyleSheet, Text, View, StatusBar, Image, ImageBackground, Button, TouchableNativeFeedbackComponent, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

//export const themes = Themes;
//export const themes = Themes[1];

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  StatusBar.setBarStyle(Themes.light.statusBar);


  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.inside1}>
          <TouchableOpacity style={styles.touch1}>
            <Image style={styles.button} source={require('./assets/Icons/menu_light.png')}></Image>
          </TouchableOpacity>
            < Text style={styles.title}>ensom</Text>
          <TouchableOpacity style={styles.touch1}>
            <Image style={styles.button} source={require('./assets/Icons/sun.png')}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.inside2}>
          <Image source={require('./assets/Profiles/mtl.jpg')} resizeMode = "cover" style={styles.profile_pic}></Image>
          <Text style={styles.name}>MTL</Text>
          <Text style={styles.location}>2 miles away</Text>
        </View>

        <View style={styles.inside3}>
          <Text style={styles.audio_text}>My hottest take</Text>
          <View style={styles.audio_features}>
            <TouchableOpacity style={styles.touch2}>
              <Image style={styles.play_button} source={require('./assets/Icons/player_light.png')}></Image>
            </TouchableOpacity>
            <Image style={styles.audio_wave} source={require('./assets/Icons/audio_waveform_light.png')}></Image>
          </View>
        </View>

        <View style={styles.inside4} backgroundColor='black' >
          <TouchableOpacity>
            <Image style={styles.nav_button} source={require('./assets/Icons/discover_light.png')}></Image>
            <Text style = {styles.nav_text}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.nav_button} source={require('./assets/Icons/heart_light.png')}></Image>
            <Text style = {styles.nav_text}>Matches</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.nav_button} source={require('./assets/Icons/messages_light.png')}></Image>
            <Text style = {styles.nav_text}>DMs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  flex: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  inside1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    ...Platform.select({
      ios:{
        height: 41,
      },
      android: {
        height: 54,
      }
    })
  },
  touch1: {
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  touch2: {
    flex: 1,
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  button: {
    flex: 1,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Sydney-Bold',
    fontSize: 32,
    color: "black",
    paddingTop: 30,
    paddingHorizontal: '20%',
    alignSelf: 'flex-end',
  },
  inside2: {
    flex: 4,
    alignItems: 'center',
    padding: 10,
  },
  profile_pic: {
    borderRadius: 20,
    height: '100%',
    width: '90%',
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 }
  },
  name: {
    fontFamily: 'Sydney',
    fontSize: 32,
    alignSelf: 'flex-start',
    color: 'white',
    paddingLeft: '15%',
    paddingTop: '10%',
    position: 'absolute',
  },
  location: {
    fontFamily: 'Sydney',
    fontSize: 18,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    color: 'white',
    paddingLeft: '15%',
    paddingTop: '85%',
    position: 'absolute',
  },
  inside3:{
    flex: 1.5,
    maxHeight: '90%',
    width: '85%',
    alignSelf: 'center',
    alignItems:'flex-start',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
  },
  audio_text: {
    fontFamily: 'Sydney',
    fontSize: 20,
    color: "black",
    paddingTop: '10%',
    paddingLeft: '7%',
    paddingRight: '30%',
    alignSelf: 'flex-start',
  },
  audio_features: {
    flexDirection: 'row',
    height: '90%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingRight: '10%'
  },
  play_button:{
    flex: 1,
    height: '50%',
    resizeMode: 'contain',
    alignSelf: 'center',
    
  },
  audio_wave: {
    flex: 2,
    width: '65%',
    height: '100%',
    resizeMode: 'contain',
  },
  inside4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  nav_button: {
    marginTop: '5%',
    resizeMode: 'contain',
    height: '50%',
    paddingBottom: '20%'
  },
  nav_text: {
    fontFamily: 'Sydney',
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
});
