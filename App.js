import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import ImgHomer from './assets/homer.png';


export default function App() {
  return (
    <View style={estilos.container}>
      <Image 
        source={{uri: 'https://img.elo7.com.br/product/685x685/39D9819/2-adesivo-bart-simpson-adesivo-bart-bart-de-lado-adesivos-motos.jpg'}}   
        style={estilos.logo}
      />

      <View style={estilos.cardImage}>
        <Image
          source={ImgHomer}
          style={estilos.logo} 
        />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  cardImage:{
    backgroundColor: '#c22222',
    marginTop: 20,
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 2, 
    borderColor: '#000',
    borderTopLeftRadius: '50%',
    borderBottomRightRadius: '50%',
  },
  container: {
    flex: 1,
    backgroundColor: '#8a8a8a',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  logo:{
    width: 150, 
    height: 150,
    borderRadius: 75,
    borderStyle: 'solid',
    borderWidth: 4,
    borderRightColor: '#000',
    borderTopColor: '#290b0b',
    borderLeftColor: '#9b0a0a',
    borderBottomColor: '#490404',
  }
});