import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props){
    console.log(props);
    return(
        <View style={styles.Container}>
            <Text style={styles.TextIn}>Seja bem vindo ao StandOrganize ©</Text>
            
            <Button 
            title='Clique aqui para acessar' onPress={()=>props.navigation.navigate('Principal') }></Button>


        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        backgroundColor:"#1e4554",
        padding:100,
        alignContent:'center', 
      
   },
   TextIn:{
        textDecorationColor:"#ffffff"
   }  
 }
)