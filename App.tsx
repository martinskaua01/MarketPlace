import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function Tela1({ navigation }) {
  return (
   <View style={styles1.container}>
        <Image style={styles1.logo} source={require('./assets/logo.png')}/>

      <Text style={styles1.tittle}>
        marketspace
      </Text>

      <Text style={styles1.paragraph}>
        Seu espaço de compra e venda
      </Text>

        <Text style={styles1.label}>Acesse sua conta</Text>
        <TextInput
          style={styles1.input}
          placeholder="E-mail"
        />
        <TextInput
          style={styles1.input}
          placeholder="Senha"
          secureTextEntry
        />

         <TouchableOpacity style={styles1.button}
          onPress={() => navigation.navigate('Anuncio')}
         >
          <Text style={styles1.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles1.footer}>
        <Text style={styles1.label}>
          Ainda não tem acesso?
        </Text>
        <TouchableOpacity style={styles1.button2}
          onPress={() => navigation.navigate('Registrar')}
        >
          <Text style={styles1.buttonText2}>Criar uma conta</Text>
        </TouchableOpacity>

        </View>
    </View>


  );
}


function Tela2({ navigation }) {
  return (
    <View style={styles2.container}>
        <Image style={styles2.logo} source={require('./assets/logo.png')}/>

      <Text style={styles2.tittle}>
        Boas vindas!
      </Text>

      <Text style={styles2.paragraph}>
Crie sua conta e use o espaço para comprar{'\n'}itens variados e vender seu produtos
      </Text>

        <Image style={styles2.logo2} source={require('./assets/logo - cadastro.png')}/>

        <TextInput
          style={styles2.input}
          placeholder="Nome"
        />
        <TextInput
          style={styles2.input}
          placeholder="E-mail"
        />
        <TextInput
          style={styles2.input}
          placeholder="Telefone"
        />
        <TextInput
          style={styles2.input}
          placeholder="Senha"
          secureTextEntry
        />
        <TextInput
          style={styles2.input}
          placeholder="Confirmar senha"
          secureTextEntry
        />
         <TouchableOpacity style={styles2.button}
          onPress={() => navigation.navigate('Anuncio')}
         >
          <Text style={styles2.buttonText}>Criar</Text>
        </TouchableOpacity>
        <Text style={styles2.label}>
          Já tem uma conta?
        </Text>
        <TouchableOpacity style={styles2.button2}
        onPress={() => navigation.navigate('Entrar')}
        >
          <Text style={styles2.buttonText2}>Ir para o login</Text>
        </TouchableOpacity>

    </View>
  );
}

function Tela3({ navigation }) {
  return (
    <View style={styles3.container}>
      <Image style={styles3.logo} source={require('./assets/produto2.png')} /> 

    <View style={styles3.perfil}>
      <Image style={styles3.logo2} source={require('./assets/avatar.png')} /> 
      <Text style={styles3.perfiltext}>  Makenna Baptista</Text>
    </View>
    <View style={styles3.produto}>
      <Text style={styles3.tittle}>Bicicleta</Text>
      <Text style={styles3.preço}>R$ 120,00</Text>
    </View>
    <Text style={styles3.text}>Um esporte que vem ganhando adeptos ao longo do tempo é o ciclismo. Praticamente todas as grandes cidades do Brasil já possuem ciclovias, e não é raro vermos pessoas ir para o trabalho de bicicleta. Você pode tanto usar para ir trabalhar como para lazer também.</Text>
    <View style={styles3.troca}>
      <Text style={styles3.trocatitle}>Aceita troca?   </Text>
      <Text style={styles3.troc}>Sim</Text> 
    </View>

    <View style={styles3.pagamento}>
      <Text style={styles3.pagatitle}>Meios de pagamento:</Text>
      <Text style={styles3.paga}><Icon name="barcode" size={12} color="black" />
      Boleto</Text>
      <Text style={styles3.paga}><Icon name="qrcode" size={12} color="black" />
      Pix</Text>
      <Text style={styles3.paga}><Icon name="money" size={12} color="black" />
      Dinheiro</Text>
      <Text style={styles3.paga}><Icon name="credit-card" size={12} color="black" />
      Cartão de Crédito</Text>
      <Text style={styles3.paga}><Icon name="bank" size={12} color="black" />
      Depósito Bancário</Text>
    </View>
    <View style={styles3.footer}>
          <Text style={styles3.preço}>R$ 120,00</Text>
         <TouchableOpacity style={styles3.button}>
          <Text style={styles3.buttonText}><Icon name="whatsapp" size={12} color="white" />
        Entrar em contato</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}




const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Entrar" component={Tela1} />
        <Stack.Screen name="Registrar" component={Tela2} />
          <Stack.Screen name="Anuncio" component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles1 = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ececef',
    width: '100%',
    height: '100%',
},
  tittle: {
    marginTop: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
  color: '#656569',
  },
  logo: {
    width: 100,
    height: 80,
    marginTop: 50,
  },
  label: {
    marginTop: 100,
    color: '#656569',
  },
  input: {
    marginTop: 25,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 270, 
    color: '#868589',
  },
  button: {
    backgroundColor: '#6878c0',
    padding: 10,
    width: 270,
    marginTop: 30,
    textAlign: 'center', 
    borderRadius: 5,
    marginBottom: 50,

  },
  buttonText: {
    color: 'white'
  },

  button2: {
    backgroundColor: '#d8d9da',
    padding: 10,
    width: 270,
    marginTop: 20,
    textAlign: 'center', 
    borderRadius: 5,
  },
  buttonText2: {
    color: 'black'
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    width: '100%',
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 70,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ececef',
    width: '100%',
    height: '100%',
},
  tittle: {
    marginTop: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  paragraph: {
  color: '#656569',
  },
  logo: {
    width: 60,
    height: 40,
    marginTop: 50,
  },
  logo2: {
    width: 90,
    height: 81,
    marginTop: 50,
  },
  input: {
    marginTop: 25,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 270,
    color: '#868589', 
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    width: 270,
    marginTop: 30,
    textAlign: 'center', 
    borderRadius: 5,
    marginBottom: 50,
  },
  label: {
    marginTop: 20,
    color: '#868589',
  },
  buttonText: {
    color: 'white'
  },

  button2: {
    backgroundColor: '#d8d9da',
    padding: 10,
    width: 270,
    marginTop: 20,
    textAlign: 'center', 
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText2: {
    color: 'black'
  },
});

const styles3 = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#edecee',
    width: '100%',
  },
  logo:{
    width: '100%',
    height: 200,
  },
  perfil: {
    flexDirection: 'row',
    width: 270,
    alignItems: 'center',
    marginLeft: 40,
    marginBottom: 20,
    marginTop: 20,
  },
  perfiltext: {
    fontSize: 14,
  },
  logo2: {
    width: 20,
    height: 20,
  },
  produto: {
    flexDirection: 'row',
    width: 270,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  tittle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  preço: {
    color: '#6e7ec3',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    marginBottom: '10%',
    marginLeft: 20, 
    color: 'gray',
  },
  troca: {
    flexDirection: 'row',
    marginLeft: 10, 
    marginBottom:20,  
    width: 270,
  },
  trocatitle: {
    fontWeight: 'bold',
  },
  pagamento: {
    width: 270,
    marginLeft: 10, 
    },
  pagatitle: {
  fontWeight: 'bold',
  },
  paga: {
    marginTop: 8,
  },
    button: {
    backgroundColor: '#6878c0',
    padding: 10,
    width: '50%',
    marginTop: 30,
    textAlign: 'center', 
    borderRadius: 5,
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
  },
  footer: {
    marginTop: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center', 
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  }
});