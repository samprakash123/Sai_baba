import { View,Text, TouchableOpacity } from "react-native";
function Login ({navigation}) {
    return(
<View style={{margin:10}}>
<TouchableOpacity onPress={
                () => { navigation.navigate('Reg') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 50, backgroundColor: 'skyblue', textAlign: 'center',margin:10,width:'60%', }}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Delivery') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 50, backgroundColor: '#ff9999', textAlign: 'center',margin:10,width:'60%' }}>
                    Delivery
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={
                () => { navigation.navigate('Example_textinput') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 50, backgroundColor: '#e6ccff', textAlign: 'center',margin:10 ,width:'60%'}}>
                    Example_textinput
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={
                () => { navigation.navigate('Example_usestate') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 50, backgroundColor: '#b3ffff', textAlign: 'center',margin:10,width:'60%' }}>
                    Example_usestate
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Example_flatlist') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 50, backgroundColor: '#ffd1b3', textAlign: 'center',margin:10,width:'60%' }}>
                    Example_flatlist
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={
                () => { navigation.navigate('Example_photos') }
            }>
                <Text style={{ fontSize: 20, fontWeight: 'bold', borderRadius: 50, backgroundColor: '#e6ffb3', textAlign: 'center',margin:10,width:'60%' }}>
                    Example_photos
                </Text>
            </TouchableOpacity>
</View>
    );
}

export default Login;