import { Text, SafeAreaView, StyleSheet,View,TouchableOpacity,Image,ImageBackground ,textcontainer,TextInput,textInputContainer,KeyboardType} from 'react-native';
import React, { useState } from 'react';
export default function Example_textinput() {
const [firstname,setfirstname]=useState('');
const [midlename,setmidlename]=useState('');
const [lastname,setlastname]=useState('');
const [phoneno,setphoneno]=useState('');
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
return (
    
    <View style={{backgroundColor:'white',flex:1,padding:10,borderWidth:20,borderColor:'#404040'}}>

    <ImageBackground
        style={{ flex:1, backgroundColor: 'red' }}
        source={{ uri: 'https://w0.peakpx.com/wallpaper/348/462/HD-wallpaper-black-shark-2-pro-abej-beograd-xiaomi-black-shark-2-pro.jpg'}}
        resizeMode="cover">
    <Text style={{marginTop:0,marginLeft:30,textAlign:'center',fontWeight:'bold',fontFamily:'italic',fontSize:20,color:'#66ff33', textShadow: '1px 1px 6px #999999, 0 0 50px #999999, 0 0 10px #999999'}}>LOG IN PAGE</Text>


    
    
    
   
    
    
    
    <Text style={{marginLeft:25,marginBottom:2,marginTop:15,color:'#66ff33',textShadow: '1px 1px 6px white, 0 0 50px green, 0 0 10px #999999'}}>EMAIL</Text>
    <TextInput style={{height:45,marginLeft:20,marginRight:20,borderColor:'grey',borderWidth:1,paddingLeft:10,paddingRight:10,color:'white',borderRadius:30}}
     placeholder={'* EMAIL'}
     placeholderTextColor={'grey'} 
     value={email}
     maxlength={20}
     editable={true}
     spellcheck={true}
     onChangeText={(text)=>{
       setemail(text);
     } }></TextInput>
    
    
    
    
    <Text style={{marginLeft:25,marginBottom:2,marginTop:15,color:'#66ff33',textShadow: '1px 1px 6px white, 0 0 50px #999999, 0 0 10px #999999'}}>PASSWORD</Text>
    <TextInput style={{height:45,marginLeft:20,marginRight:20,borderColor:'grey',borderWidth:1,paddingLeft:10,paddingRight:10,color:'white',borderRadius:30}}
     placeholder={'* PASSWORD'}
     placeholderTextColor={'grey'} 
     value={password}
     maxlength={20}
     editable={true}
     spellcheck={true}
     onChangeText={(text)=>{
       setpassword(text);
     } }></TextInput>
    
    

    <TouchableOpacity
        style={{
          backgroundColor: '#404040',
          height:45,
          margin:90,
          borderRadius:100,
          borderStyle:'solid',
          
          
        }}
        onPress={() => {
          
            if (email === '') {
             alert('Email cannot be empty');
               } else if (!/\S+@\S+\.\S+/.test(email)) {
              alert('Invalid email format');
          } else {
              alert('Email is valid');
          }

            if (password.length < 8) {
            alert( 'Password must be at least 8 characters long.');
          } else if (!/\d/.test(password)) {
            alert('Password must contain at least one digit.');
          } else if (!/[A-Z]/.test(password)) {
            alert('Password must contain at least one uppercase letter.');
          } else if (!/[a-z]/.test(password)) {
            alert('Password must contain at least one lowercase letter.');
          } else if (!/[@#$%^&+=]/.test(password)) {
            alert('Password must contain at least one special character.');
          } else {
            alert('Password meets the validation criteria.');
          }

        }}>
        <Text
          style={{
            textAlign: 'center',
            
            fontSize: 20,
            marginTop:9,
            color: '#66ff33',
            textShadow: '1px 1px 6px green, 0 0 50px green, 0 0 10px green'
          }}>
          LOG IN
        </Text>
      </TouchableOpacity>
    
    
    </ImageBackground>
    
    </View>
    
     
  )};
