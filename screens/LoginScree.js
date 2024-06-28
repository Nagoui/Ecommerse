import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
      <View>
        <Image
          style={{width:150,height:100}}
          source={{
            url:"https://www.tripfiction.com/wp-content/uploads/2016/08/1920x1080-brands-amazon-logo.jpg"
          }} />
      </View>

      <KeyboardAvoidingView>
        <View style={{
          alignItems:'center'
        }}>
          <Text style={{fontSize:17,fontWeight:'bold',marginTop:12,color:'#041E42'}}>Login In to Your App</Text>
        </View>
        <View style={{
          marginTop:70
        }}>
          <View style={{
            flexDirection:'row',
            alignItems:'center',
            gap:5,
            backgroundColor:'#D0D0D0',
            paddingVertical:5,
            borderRadius:5,
            marginTop:30,
          }}>
          <MaterialIcon name="email" size={24} color="black" />
          <TextInput placeholder='wnter your Email' />
        </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})