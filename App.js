import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import { Image } from 'expo-image';

import ImgProfile1 from './assets/homer.png';
import ImgProfile2 from './assets/marge.jpg';
import BackgroundImage from './assets/nuvens.avif';

export default function App() {
  return (
    <View style={estilos.container}>
      <StatusBar style="auto" />
      <View style={estilos.chatBox}>
        <ImageBackground
          source={BackgroundImage}
          style={estilos.chatBackground}
          resizeMode="cover"
        >
          <ScrollView style={estilos.chatContainer}>
            <View style={estilos.messageContainer}>
              <View style={estilos.messageBlock}>
                <Image source={ImgProfile1} style={estilos.profileImage} />
                <Text style={estilos.messageText}> ola como voce esta </Text>
              </View>
            </View>

            <View style={estilos.messageContainerReverse}>
              <View style={estilos.messageBlockReverse}>
                <Image source={ImgProfile2} style={estilos.profileImage} />
                <Text style={estilos.messageTextReverse}>Estou bem, e você?</Text>
              </View>
            </View>

            <View style={estilos.messageContainer}>
              <View style={estilos.messageBlock}>
                <Image source={ImgProfile1} style={estilos.profileImage} />
                <Text style={estilos.messageText}>Estou ótimo! Vamos conversar?</Text>
              </View>
            </View>

            <View style={estilos.messageContainerReverse}>
              <View style={estilos.messageBlockReverse}>
                <Image source={ImgProfile2} style={estilos.profileImage} />
                <Text style={estilos.messageTextReverse}>Claro, sobre o que você quer falar?</Text>
              </View>
            </View>

            <View style={estilos.messageContainer}>
              <View style={estilos.messageBlock}>
                <Image source={ImgProfile1} style={estilos.profileImage} />
                <Text style={estilos.messageText}>Que tal falarmos sobre filmes?</Text>
              </View>
            </View>

            <View style={estilos.messageContainerReverse}>
              <View style={estilos.messageBlockReverse}>
                <Image source={ImgProfile2} style={estilos.profileImage} />
                <Text style={estilos.messageTextReverse}>Boa ideia! Qual o seu favorito?</Text>
              </View>
            </View>

            <View style={estilos.messageContainer}>
              <View style={estilos.messageBlock}>
                <Image source={ImgProfile1} style={estilos.profileImage} />
                <Text style={estilos.messageText}>Eu adoro comédias! Você?</Text>
              </View>
            </View>

            <View style={estilos.messageContainerReverse}>
              <View style={estilos.messageBlockReverse}>
                <Image source={ImgProfile2} style={estilos.profileImage} />
                <Text style={estilos.messageTextReverse}>Eu sou mais fã de ação, mas gosto de tudo.</Text>
              </View>
            </View>

            <View style={estilos.messageContainer}>
              <View style={estilos.messageBlock}>
                <Image source={ImgProfile1} style={estilos.profileImage} />
                <Text style={estilos.messageText}>Legal! Então você já viu algum filme bom ultimamente?</Text>
              </View>
            </View>

            <View style={estilos.messageContainerReverse}>
              <View style={estilos.messageBlockReverse}>
                <Image source={ImgProfile2} style={estilos.profileImage} />
                <Text style={estilos.messageTextReverse}>Sim! Vi um filme de ação incrível semana passada.</Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  chatBox: {
    width: '85%',
    height: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    
  },
  chatBackground: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  chatContainer: {
    flex: 1,
    width: '100%',
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
   
  },
  messageContainerReverse: {
    flexDirection: 'row-reverse',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  messageBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#34b7f1',
    borderRadius: 20,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 15,
    maxWidth: '75%',
    position: 'relative',
    marginLeft: 10,
  },
  messageBlockReverse: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d0d0d0',
    borderRadius: 20,
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 15,
    maxWidth: '75%',
    position: 'relative',
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
  messageTextReverse: {
    color: 'black',
    fontSize: 16,
  },
});
