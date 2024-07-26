import React, {useState} from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import {assets, COLORS, NFTData} from '../../constants';
import { NFTCard,HomeHeader,FocusedStatusBar,CarCard } from '../../components';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <FocusedStatusBar background={"COLORS.primary"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex:1 }}>
          <View style={{ zIndex:0 }}>
            <HomeHeader />
            <CarCard />
          </View>
          <View style={{ flexDirection:"row", justifyContent: "space-around", marginLeft: 10, marginRight: 10}}>
            <TouchableOpacity style={{ width:80, height:80, margin:10, backgroundColor:"#9CCF89", alignItems: 'center', justifyContent:'center' }}
            onPress={()=>navigation.navigate("Daftar Mobil")}>
              <Image source={assets.car}
                resizeMode="contain"
                style={{ width:40,height:40 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={{ width:80, height:80, margin:10, backgroundColor:"#9CCF89", alignItems: 'center', justifyContent:'center' }}>
              <Image source={assets.food}
                resizeMode="contain"
                style={{ width:40,height:40 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={{ width:80, height:80, margin:10, backgroundColor:"#9CCF89", alignItems: 'center', justifyContent:'center' }}>
              <Image source={assets.home}
                resizeMode="contain"
                style={{ width:40,height:40 }}/>
            </TouchableOpacity>
            <TouchableOpacity style={{ width:80, height:80, margin:10, backgroundColor:"#9CCF89", alignItems: 'center', justifyContent:'center' }}>
              <Image source={assets.feed1}
                resizeMode="contain"
                style={{ width:40,height:40 }}/>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection:"row", justifyContent:"space-between", marginLeft:26, marginRight: 42}}>
            <Text style={{ fontWeight:"bold" }}>Sewa Mobil</Text>
            <Text style={{ fontWeight:"bold" }}>Oleh-Oleh</Text>
            <Text style={{ fontWeight:"bold", paddingRight:15 }}>Penginapan</Text>
            <Text style={{ fontWeight:"bold" }}>Wisata</Text>
          </View>
          <View>
            <Text style={{ fontWeight:"bold", fontSize:20, marginLeft: 25, marginRight: 25, marginTop: 20 }}>Daftar Mobil Pilihan</Text>
            <FlatList 
              data={NFTData} 
              renderItem={({ item }) => <NFTCard data={item} />}
              keyExtractor={(item) => item.id} 
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={{ 
            position:"absolute",
            top: 0,
            bottom: 0,
            right:0,
            left:0,
            zIndex:-1,
          }}>
            <View style={{ height:300,backgroundColor:"#99A3D2" }}/>
            <View style={{ flex:1,backgroundColor:COLORS.white }}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home