import * as React from 'react';
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';
import { assets } from '../../constants';

export default function Landing({ navigation }) {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex:1 }}>
                <View style={{ position:"absolute",
                top: 0,
                bottom: 0,
                right:0,
                left:0,
                zIndex:-1, }}/>
                <View style={{ width:"100%", height:"100%", backgroundColor:"#143D71" }}>
                    <Text style={{ alignSelf:"center", fontSize:40, fontWeight:"bold", color:"white", marginTop:100 }}>MyCar Rental</Text>
                    <TouchableOpacity>
                        <Text style={{ alignSelf:"center", fontSize:20, fontWeight:"bold", color:"white", marginTop:20 }}
                        onPress={() => navigation.navigate('Home')}>Skip →</Text>
                    </TouchableOpacity>
                    <ImageBackground source={assets.rect1} resizeMode="contain" style={{ width:"100%",height:"110%",marginTop:45 }}>
                            <Image source={assets.jeep} resizeMode="contain" style={{ width:"130%",height:"100%" }}/>
                    </ImageBackground>
                </View>
            </View> 
        </SafeAreaView>
    );
}