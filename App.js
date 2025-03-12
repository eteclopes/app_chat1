import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import ImgHomer from './assets/homer.png';


export default function App() {
  return (
    <View style={estilos.container}>
      {/* <Image 
        source={{uri: 'https://img.elo7.com.br/product/685x685/39D9819/2-adesivo-bart-simpson-adesivo-bart-bart-de-lado-adesivos-motos.jpg'}}   
        style={estilos.logo}
      />

      <View style={estilos.cardImage}>
        <Image
          source={ImgHomer}
          style={estilos.logo} 
        />
      </View> */}

      <View style={estilos.view_p1}>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>A</Text>
          </View>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>B</Text>
          </View>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>R</Text>
          </View>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>H</Text>
          </View>
      </View>

      <View style={estilos.view_p2}>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>A</Text>
          </View>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>B</Text>
          </View>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>R</Text>
          </View>
          <View style={estilos.view_f}>
              <Text style={estilos.letra}>H</Text>
          </View>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a8a8a',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  view_p2:{
    flexDirection: 'row-reverse'
  },
  view_f:{
    backgroundColor: '#FFF',
    margin: 10,
    width: 80,
    height: 80,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent:'center'
  },
  letra:{
    fontSize: 30,
    fontWeight: '500'
  }
  // logo:{
  //   backgroundColor: '#8a8a8a',
  //   width: 150, 
  //   height: 150,
  //   borderRadius: 75,
  //   borderStyle: 'solid',
  //   borderWidth: 4,
  //   borderRightColor: '#000',
  //   borderTopColor: '#290b0b',
  //   borderLeftColor: '#9b0a0a',
  //   borderBottomColor: '#490404',
  // },
    // cardImage:{
  //   backgroundColor: '#ffffff',
  //   marginTop: 20,
  //   padding: 20,
  //   borderStyle: 'solid',
  //   borderWidth: 2, 
  //   borderColor: '#000',
  //   borderTopLeftRadius: '50%',
  //   borderBottomRightRadius: '50%',
  // },
});