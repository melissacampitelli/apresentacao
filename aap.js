import React from 'react';
import { View, keyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function App(){
    return(
       <keyboardAvoidingView style={styles.background}>
        <View style={style.containerLogo}>
       <Image
       source={require('./projeto2/SG.png')}
       />
        </View>
        <View>
            <TextInput
            placeholder= "Email"
            autoCorrect={false}
            onChangeText={()=> {}}
            />
            <TextInput
            placeholder= "Senha"
            autoCorrect={false}
            onChangeText={()=> {}}  
            />
         <TouchableOpacity>
            <Text>Acessar</Text>
         </TouchableOpacity>

          <TouchableOpacity>
            <Text>Criar conta</Text>
         </TouchableOpacity>
            

        </View>

       </keyboardAvoidingView>
    );
}
const styles= StyleSheet.create({
   background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '##00008B'
   },
   containerLogo:{
      flex:1,
      justifyContent: 'center',

   }

});