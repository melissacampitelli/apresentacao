import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';



export default function App() {
  return (
       
    <View style={styles.container}>
      
      <Image
        source={ { uri: 'https://sgedu.suportegerencial.com.br/login/assets/images/logo_sgedu.png'} }
        style={ styles.img }
      />
    <TextInput style={ styles.input }
    placeholder= "Nome"
    autoCorrect={false}
    onChangeText={()=> {}}
    />
    <TextInput style={ styles.input }
    placeholder= "Telefone"
    autoCorrect={false}
    onChangeText={()=> {}}  
    />
 <TouchableOpacity style={styles.btnSubmit}>
    <Text style={ styles.texto}>Entrar</Text>
 </TouchableOpacity> 
 <StatusBar style="auto" />

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',

  

  },
  texto: {
    color: 'blue',
    fontSize: 20,
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 350,
    height: 150
  },
  input:{
    backgroundColor:'#fff',
    width: '60%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    padding: 10,

  },
  btnSubmit:{
    backgroundColor: 'orange',
    width: '60%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }

});









