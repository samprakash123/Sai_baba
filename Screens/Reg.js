import {View,Text,TextInput,Button,styles,StyleSheet,Image,ImageBackground,TouchableOpacity}from 'react-native'
import React,{useState} from 'react';
 
export default function Reg () {
 const [email,setemail]=useState('');
 const [phone,setphone]=useState('');
 const [password,setpassword]=useState('');
 const [confirmpassword,setconfirmpassword]=useState('');
 const [errormsg,seterrormsg]=useState('');
 const [eerrormsg,seteerrormsg]=useState('');
 const [phoneerrormsg,setphoneerrormsg]=useState('');
 const [passerrormsg,setpasserrprmsg]=useState('');
 const [conerrormsg,setconerrormsg]=useState('');
 

const validationform = ()=>{
const emailpattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phonepattern=   /^[0-9]{10}$/;
const passwordpattern =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

if (!emailpattern.test(email)){
  seteerrormsg('invaid email'); 
}else if (!phonepattern.test(phone)){
  setphoneerrormsg('invaid phone ');
}else if (!passwordpattern.test(password)){
  setpasserrprmsg('Invalid password');
}else if (confirmpassword !== password){
  setconerrormsg('password not mached')
}else {
  seterrormsg('form submited successfully'); 
 }
};
return(

   <View style={{backgroundColor:'yellow',flex:1}}>
   <ImageBackground
       style={{ flex:1, backgroundColor: 'red' }}
        source={{ uri: 'https://w0.peakpx.com/wallpaper/953/10/HD-wallpaper-magic-frame-2-amoled-border-dark-edges-iphone-light-neon-samsung-yellow.jpg'}}
        resizeMode="cover">
      <Text style={{marginLeft:40,color:'#ffdb4d',marginTop:50, textShadow: '1px 1px 1px yellow, 0 0 60px yellow, 0 0 10px yellow'}}>EMAIL</Text>  
    <View style={{height:40,margin:10,backgroundColor:'#ffff80',marginLeft:30,marginRight:30,borderRadius:20,marginTop:10}}>
     <TextInput
        placeholder="Email"
        placeholderTextColor='gray'
        onChangeText={(text) => setemail(text)}
        value={email}
        style={{flex:1,borderRadius:16,marginLeft:2}}></TextInput>
    </View>
    
 {eerrormsg !==''&& <Text style={{color:'red',marginLeft:40,marginBottom:0,fontSize:15}}>{eerrormsg}</Text>}




     
     <Text style={{marginLeft:40,color:'#ffdb4d',marginTop:20, textShadow: '1px 1px 1px yellow, 0 0 60px yellow, 0 0 10px yellow'}}>PHONE NUMBER</Text>  
    <View style={{height:40,margin:10,backgroundColor:'#ffff80',marginLeft:30,marginRight:30,borderRadius:20,marginTop:10}}>
     <TextInput
        placeholder="PHONE NUMBER"
        placeholderTextColor='gray'
        onChangeText={(text) => setphone(text)}
        value={phone}
        style={{flex:1,borderRadius:16,marginLeft:2}}></TextInput>
    </View>
  
  {phoneerrormsg !==''&& <Text style={{color:'red',marginLeft:40,marginBottom:0,fontSize:15}}>{phoneerrormsg}</Text>}






     <Text style={{marginLeft:40,color:'#ffdb4d',marginTop:20, textShadow: '1px 1px 1px yellow, 0 0 60px yellow, 0 0 10px yellow'}}>PASSWORD</Text>  
    <View style={{height:40,margin:10,backgroundColor:'#ffff80',marginLeft:30,marginRight:30,borderRadius:20,marginTop:10}}>
     <TextInput
        placeholder="PASSWORD"
        placeholderTextColor='gray'
        onChangeText={(text) => setpassword(text)}
        value={password}
        style={{flex:1,borderRadius:16,marginLeft:2}}></TextInput>
    </View>
  
  {passerrormsg !==''&& <Text style={{color:'red',marginLeft:40,marginBottom:0,fontSize:15}}>{passerrormsg}</Text>}
  
 
     <Text style={{marginLeft:40,color:'#ffdb4d',marginTop:20, textShadow: '1px 1px 1px yellow, 0 0 60px yellow, 0 0 10px yellow'}}>CONFIRM PASSWORD</Text>  
    <View style={{height:40,margin:10,backgroundColor:'#ffff80',marginLeft:30,marginRight:30,borderRadius:20,marginTop:10}}>
     <TextInput
        placeholder="CONFIRM PASSWORD"
        placeholderTextColor='gray'
        onChangeText={(text) => setconfirmpassword(text)}
        value={confirmpassword}
        style={{flex:1,borderRadius:16,marginLeft:2}}></TextInput>
    </View>

  
  {conerrormsg !==''&& <Text style={{color:'red',marginLeft:40,marginBottom:0,fontSize:15}}>{conerrormsg}</Text>}  



 <TouchableOpacity
        style={{
          backgroundColor: '#cccc00',
          height:45,
          margin:50,
          borderRadius:100,
          borderStyle:'solid', 
        }}
        onPress={validationform}>
        <Text style={{color:'black',textAlign:'center',marginTop:10,fontWeight:'bold'}}>SUBMITE</Text>
  
        
        </TouchableOpacity>
       
  
  
  </ImageBackground>
  </View>










)};
