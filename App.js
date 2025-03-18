// Importando os módulos necessários
import { StatusBar } from 'expo-status-bar'; // StatusBar gerencia a barra de status do dispositivo
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'; // Importando componentes do React Native
import { Image } from 'expo-image'; // Componente de imagem otimizado do Expo

// Imagens de exemplo para os perfis do usuário e da outra pessoa
import ImgProfile1 from './assets/homer.png'; // Imagem do perfil do usuário
import ImgProfile2 from './assets/marge.jpg'; // Imagem do perfil de outra pessoa
import BackgroundImage from './assets/nuvens.avif'; // Imagem de fundo do chat

// Função principal do aplicativo
export default function App() {
  return (
    <View style={estilos.container}> {/* Contêiner principal que envolve toda a tela */}
      {/* Barra de Status */}
      <StatusBar style="auto" /> {/* Componente para controle da barra de status do dispositivo */}

      {/* Caixa do Chat (com imagem de fundo) */}
      <View style={estilos.chatBox}> 
        {/* Usando ImageBackground para colocar a imagem de fundo no chat */}
        <ImageBackground
          source={BackgroundImage} // Imagem de fundo da caixa de chat
          style={estilos.chatBackground} // Estilo aplicado à caixa de chat com fundo
          resizeMode="cover" // Faz a imagem de fundo cobrir toda a área da caixa
        >
          {/* Container para rolar as mensagens */}
          <ScrollView style={estilos.chatContainer}> 
            {/* Mensagem 1 (usuário) */}
            <View style={estilos.messageContainer}> {/* Estilo do contêiner para a mensagem do usuário */}
              <View style={estilos.messageBlock}> {/* Bloco que contém a imagem e o texto da mensagem */}
                <Image source={ImgProfile1} style={estilos.profileImage} /> {/* Imagem do perfil do usuário */}
                <Text style={estilos.messageText}>Oi, como você está?</Text> {/* Texto da mensagem */}
              </View>
            </View>

            {/* Mensagem 2 (outra pessoa) */}
            <View style={estilos.messageContainerReverse}> {/* Estilo do contêiner para a mensagem da outra pessoa */}
              <View style={estilos.messageBlockReverse}> {/* Bloco da mensagem da outra pessoa */}
                <Image source={ImgProfile2} style={estilos.profileImage} /> {/* Imagem do perfil da outra pessoa */}
                <Text style={estilos.messageTextReverse}>Estou bem, e você?</Text> {/* Texto da mensagem da outra pessoa */}
              </View>
            </View>

            {/* Mais mensagens fictícias */}
            <View style={estilos.messageContainer}> {/* Mensagem do usuário */}
              <View style={estilos.messageBlock}>
                <Image source={ImgProfile1} style={estilos.profileImage} />
                <Text style={estilos.messageText}>Estou ótimo! Vamos conversar?</Text>
              </View>
            </View>

            <View style={estilos.messageContainerReverse}> {/* Mensagem da outra pessoa */}
              <View style={estilos.messageBlockReverse}>
                <Image source={ImgProfile2} style={estilos.profileImage} />
                <Text style={estilos.messageTextReverse}>Claro, sobre o que você quer falar?</Text>
              </View>
            </View>

            {/* Mensagens adicionais */}
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

            {/* Mais mensagens */}
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

// Estilos (CSS) para os elementos do aplicativo
const estilos = StyleSheet.create({
  // Estilo para o contêiner principal da tela
  container: {
    flex: 1, // Ocupa toda a altura da tela
    backgroundColor: '#1E90FF', // Cor de fundo azul para a tela inteira
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    paddingTop: 10, // Dá um pequeno espaço superior
  },

  // Estilo para a caixa de chat (onde as mensagens são exibidas)
  chatBox: {
    width: '85%',  // Define a largura da caixa de chat
    height: '80%', // Define a altura da caixa de chat
    backgroundColor: '#fff', // Cor de fundo branca para a caixa de chat
    borderRadius: 20,  // Bordas arredondadas para a caixa de chat
    padding: 10, // Espaçamento interno dentro da caixa de chat
    shadowColor: '#000',  // Cor da sombra
    shadowOffset: { width: 0, height: 5 }, // Offset da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 10, // Raio de desfoque da sombra
    elevation: 5,  // Sombra para Android
  },

  // Estilo para o fundo da caixa de chat (com a imagem de fundo)
  chatBackground: {
    flex: 1, // Preenche toda a altura disponível
    justifyContent: 'center', // Centraliza as mensagens
    padding: 10, // Espaçamento interno
    borderRadius: 20, // Bordas arredondadas
  },

  // Estilo para o container do ScrollView, para permitir rolagem das mensagens
  chatContainer: {
    flex: 1, // Preenche toda a área disponível
    width: '100%', // Largura total
  },

  // Estilo para cada mensagem do usuário
  messageContainer: {
    flexDirection: 'row', // Alinha a mensagem do usuário à esquerda
    marginBottom: 10, // Espaço inferior entre as mensagens
    alignItems: 'flex-start', // Alinha as mensagens no início
  },

  // Estilo para cada mensagem da outra pessoa
  messageContainerReverse: {
    flexDirection: 'row-reverse', // Alinha a mensagem da outra pessoa à direita
    marginBottom: 10, // Espaço inferior entre as mensagens
    alignItems: 'flex-start', // Alinha as mensagens no início
  },

  // Estilo para o bloco de cada mensagem do usuário
  messageBlock: {
    flexDirection: 'row', // Exibe a imagem e o texto lado a lado
    alignItems: 'center', // Alinha a imagem e o texto centralizados
    backgroundColor: '#34b7f1', // Cor de fundo das mensagens do usuário (azul)
    borderRadius: 20, // Bordas arredondadas
    paddingVertical: 10, // Espaçamento vertical
    paddingLeft: 15, // Espaçamento à esquerda
    paddingRight: 15, // Espaçamento à direita
    maxWidth: '75%', // Limita a largura máxima do bloco de mensagem
    position: 'relative', // Permite o posicionamento relativo (para a "ponta" da mensagem)
    marginLeft: 10, // Espaço à esquerda entre as mensagens
  },

  // Estilo para o bloco de cada mensagem da outra pessoa
  messageBlockReverse: {
    flexDirection: 'row', // Exibe a imagem e o texto lado a lado
    alignItems: 'center', // Alinha a imagem e o texto centralizados
    backgroundColor: '#d0d0d0', // Cor de fundo das mensagens da outra pessoa (cinza)
    borderRadius: 20, // Bordas arredondadas
    paddingVertical: 10, // Espaçamento vertical
    paddingLeft: 15, // Espaçamento à esquerda
    paddingRight: 15, // Espaçamento à direita
    maxWidth: '75%', // Limita a largura máxima do bloco de mensagem
    position: 'relative', // Permite o posicionamento relativo
    marginRight: 10, // Espaço à direita entre as mensagens
  },

  // Estilo para as imagens de perfil
  profileImage: {
    width: 40, // Largura da imagem do perfil
    height: 40, // Altura da imagem do perfil
    borderRadius: 20, // Bordas arredondadas para a imagem (ficando circular)
    marginRight: 10, // Espaço entre a imagem e o texto
  },

  // Estilo para o texto das mensagens do usuário
  messageText: {
    color: 'white', // Cor do texto das mensagens do usuário (branco)
    fontSize: 16, // Tamanho da fonte
  },

  // Estilo para o texto das mensagens da outra pessoa
  messageTextReverse: {
    color: 'black', // Cor do texto das mensagens da outra pessoa (preto)
    fontSize: 16, // Tamanho da fonte
  },
});
