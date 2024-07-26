import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {COLORS,SIZES,SHADOWS,assets} from '../constants'
import { CircleButton, RectButton } from './Button'

const CarCard = ({data}) => {
    const navigation = useNavigation();
  return (
    <View style={{ 
        backgroundColor: "#143D71",
        borderRadius:SIZES.font,
        marginBottom:SIZES.extraLarge,
        margin:SIZES.extraLarge,
        ...SHADOWS.dark
     }}>
        <View>
            <Text style={{ 
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 30,
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20
             }}>Sewa Mobil Berkualitas Di Kawasan Mu!</Text>
        </View>
        <View style={{ width: "100%", height:250, flexDirection: "row"}}>
            <View style={{ 
                marginTop:150,
                marginLeft:20,
                flexDirection: "row",
                justifyContent:'space-between',
                alignItems:'center',
                width: "20%"
             }}>
                <RectButton minWidth={150} fontSize={SIZES.font} handlePress={()=>navigation.navigate("Daftar Mobil", {data})}/>
            </View>
            <Image 
                source={assets.jeep}
                resizeMode="cover"
                style={{ 
                    width:"90%",
                    height:"100%",
                    borderTopLeftRadius:SIZES.font,
                    borderTopRightRadius:SIZES.font,
                    alignSelf: "flex-end" 
                 }}
            />
        </View>
    </View>
  )
}

export default CarCard