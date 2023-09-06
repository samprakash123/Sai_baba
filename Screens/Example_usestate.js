import { SafeAreaView, Text, TouchableOpacity,View,ImageBackground,Image } from 'react-native';
import React, { useState } from 'react';

export default function Example_usestate() {
  const [totalValue, updateTotal] = useState(0);
  const [isShow, updateShowHide] = useState(false);
  const [strName, updateName] = useState('');
  const [subtractValue, updateSub] = useState(0);
  var a = 10;
  var b = 30;
  var c = 0;
  
  return (
    <View style={{flex:1,backgroundColor:'grey'}}>
    <ImageBackground
        style={{ flex:1, backgroundColor: 'red' }}
        source={{ uri: 'https://wallpaper.dog/large/20509986.jpg'}}
        resizeMode="cover">


    <TouchableOpacity style={{}}
    onPress={()=>{
     updateShowHide(isShow);
     if(isShow === true){
       updateShowHide(false);

     }else{
       updateShowHide(true)
     }
    }}>
    <Text style={{fontWeight:'bold',fontSize:20,color:'',textShadow: '1px 1px 2px #3385ff, 0 0 25px blue, 0 0 5px #3385ff',textAlign:'center'}}>Food Delivery</Text>
      </TouchableOpacity>
      
     {isShow && (
        < >
           <View style={{backgroundColor:'',flex:1}}>
<ImageBackground
        style={{ flex:1, backgroundColor: 'red' }}
        source={{ uri: 'https://w0.peakpx.com/wallpaper/25/715/HD-wallpaper-blue-purple-smoke-background-cellular.jpg'}}
        resizeMode="cover">


   <View style={{backgroundColor:'',flex:1,flexDirection:'row'}}>


   <View style={{backgroundColor:'',width:"25%",margin:0}}>
    <TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('PLEASE SELECT YOUR ITEMS');
        }}>
   <Image style={{height:100,borderBottomRightRadius:50}} source={{uri:'https://thumbs.dreamstime.com/b/e-commerce-online-shopping-digital-marketing-sales-business-technology-concept-137074336.jpg',}}resizeMode="cover"></Image></TouchableOpacity>
 <View style={{backgroundColor:"",height:100,borderTopRightRadius:50}}>
  <TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('Your selected  nice coffee cup:500/-');
        }}>
  <Image style={{height:100,borderTopRightRadius:50}} source={{uri:'https://images.pexels.com/photos/1207918/pexels-photo-1207918.jpeg',}}resizeMode="cover"></Image></TouchableOpacity>
 </View>
<View style={{backgroundColor:""}}>
<TouchableOpacity
      
        onPress={() => {
          alert('Please select follow items');
        }}>
<Text style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue',fontFamily:'cursive',color:'red',fontWeight:'bold',flex:1}}>FOOD MENU</Text></TouchableOpacity>
 </View>
 <TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('Your selcted BIriyani:179/-');
        }}>
<Text style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px blue',fontFamily:'cursive',fontWeight:'bold',color:'white',fontSize:'10px',flex:1}}>Biriyani:179</Text></TouchableOpacity>
<TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('Your selcted curd rice:17/-');
        }}>
<Text style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px blue',fontFamily:'cursive',fontWeight:'bold',color:'white',fontSize:'10px',flex:1}}>CURD RICE:17</Text></TouchableOpacity>
<TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('Your selcted jeera rice:100/-');
        }}>
<Text style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px blue',fontFamily:'cursive',fontWeight:'bold',color:'white',fontSize:'9px',flex:1}}>JEERA RICE:100</Text></TouchableOpacity>
<TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('Your selcted paneer:190/-');
        }}>
<Text style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px blue',fontFamily:'cursive',fontWeight:'bold',color:'white',fontSize:'10px',flex:1}}>PANEER:190</Text></TouchableOpacity>
<TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('Your selcted ice cream:170/-');
        }}>
<Text style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px blue',fontFamily:'cursive',fontWeight:'bold',color:'white',fontSize:'9px',flex:1}}>ICE CREAM:170</Text></TouchableOpacity>
<TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('Your selcted Veg-pulav:170/-');
        }}>
<Text style={{textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px blue',fontFamily:'cursive',fontWeight:'bold',color:'white',fontSize:'9px',flex:1}}>VEG PULAV:170</Text></TouchableOpacity>
<View style={{backgroundColor:"",flex:1}}>
  <TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('you can follow me on twitter also');
        }}>
  <Image style={{flex:1,borderRadius:50}} source={{uri:'https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHdpdHRlciUyMGxvZ298ZW58MHx8MHx8fDA%3D&w=1000&q=80',}}resizeMode="cover"></Image></TouchableOpacity>
 </View>
</View>


   <View style={{backgroundColor:'',width:"75%",height:100,margin:0}}>
 <TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('Thanks for selecting online delivery');
        }}>
   <Image style={{height:100,borderBottomLeftRadius:50}} source={{uri:'https://png.pngtree.com/template/20220424/ourmid/pngtree-food-delivery-service-horizontal-blue-background-with-big-white-letters-and-image_1429011.jpg',}}resizeMode="cover"></Image></TouchableOpacity>
   
   <View style={{backgroundColor:"",height:100}}>
 <TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('Your selected bag of coffee beans:1000/-');
        }}>
    <Image style={{height:100,borderTopLeftRadius:50}} source={{uri:'https://c4.wallpaperflare.com/wallpaper/231/256/948/coffee-bean-cup-still-life-photography-coffee-cup-wallpaper-preview.jpg',}}resizeMode="cover"></Image></TouchableOpacity>
   </View>
   <View style={{backgroundColor:'',height:200,justifyContent:'space-between',flexDirection:'row'}}>
<View style={{backgroundColor:'',width:'50%'}}>
 <TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('Your selcted strawberry milk shake:200/-');
        }}>
 <Image style={{height:200,borderBottomRightRadius:50,borderRadius:50,margin:5}} source={{uri:'https://static.displate.com/280x392/displate/2023-04-06/00f2d71d4696eca045942c21cbf7e87b_a06b39bedec2e79dee50f05399cadb6c.jpg',}}resizeMode="cover"></Image></TouchableOpacity>
</View>
<View style={{backgroundColor:'',width:'50%'}}>
<TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('You got 50% off on milkshake');
        }}>
<Image style={{height:200,borderBottomLeftRadius:50,borderRadius:50,margin:5}} source={{uri:'https://img.lovepik.com/free-template/20211019/bg/81708cabaa4d7.jpg_list.jpg!/fw/431',}}resizeMode="cover"></Image></TouchableOpacity>
</View>
   </View>
  <View style={{backgroundColor:'',height:200,justifyContent:'space-between',flexDirection:'row'}}>
<View style={{backgroundColor:'',width:'50%'}}>
<TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('Your selcted veg sandwich:50/-');
        }}>
 <Image style={{height:200,borderBottomLeftRadius:50,borderTopRightRadius:50,borderRadius:50,margin:5}} source={{uri:'https://www.shutterstock.com/shutterstock/photos/1263324166/display_1500/stock-photo-paneer-tikka-sandwich-is-a-popular-indian-version-of-sandwich-using-cottage-cheese-curry-with-1263324166.jpg',}}resizeMode="cover"></Image></TouchableOpacity>
 <View style={{height:50,backgroundColor:''}}>
<TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('You can follow me on instragram also');
        }}>
<Image style={{flex:1,borderRadius:200,margin:5}} source={{uri:'https://www.shutterstock.com/image-photo/bangkok-thailand-may-14-2016-260nw-419396578.jpg',}}resizeMode="cover"></Image></TouchableOpacity>



</View>
</View>
<View style={{backgroundColor:'',width:'50%'}}>
<TouchableOpacity
        style={{
        }}
        onPress={() => {
          alert('Your selcted non-veg burger:200/-');
        }}>
<Image style={{height:200,borderTopLeftRadius:50,borderRadius:50,margin:5}} source={{uri:'https://media.istockphoto.com/id/172449461/photo/chicken-burger.jpg?s=612x612&w=0&k=20&c=hxb7Yr7ZtGbfJGeHWMMBFl-VdiDoZdKd7TeZHj3wFEs=',}}resizeMode="cover"></Image></TouchableOpacity>
<View style={{height:50,backgroundColor:''}}>
<TouchableOpacity
        style={{flex:1
        }}
        onPress={() => {
          alert('You can follow me on Facebook also');
        }}>
<Image style={{flex:1,borderRadius:200,margin:5}} source={{uri:'https://www.nicepng.com/png/detail/351-3517282_facebook-announced-on-wednesday-that-it-has-acquired.png',}}resizeMode="cover"></Image></TouchableOpacity>

</View>
</View>

   </View>
   </View>
   </View>
</ImageBackground>
   </View>
  
        </>
     )}
 </ImageBackground>
    </View>  
   )};
