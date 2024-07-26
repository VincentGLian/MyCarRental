import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {COLORS,SIZES,SHADOWS,assets} from '../constants'
import { CircleButton, RectButton } from './Button'

const NFTCard = ({data}) => {
    const navigation = useNavigation();
  return (
    <View style={{ 
        border:SIZES.font,
        borderColor: "black",
        borderStyle:"solid",
        borderWidth: 2,
        marginBottom:SIZES.extraLarge,
        margin:SIZES.extraLarge,
     }}>
        <View style={{ width: "100%", height:250, flexDirection: "row"}}>
            <Image 
                source={data.image}
                resizeMode="contain"
                style={{ 
                    width:"60%",
                    height:"100%",
                    borderTopLeftRadius:SIZES.font,
                    borderTopRightRadius:SIZES.font,
                    alignSelf: "flex-end" 
                 }}
            />
            <View style={{ 
                flexDirection: "column",
                justifyContent:'space-around',
                alignItems:'center',
                width: "30%"
             }}>
                <View>
                    <Text style={{ 
                        color: COLORS.black,
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20
                    }}>Daihatsu</Text>
                </View>
                <View style={{ 
                    flexDirection:"row",
                    justifyContent:"space-around",
                    alignItems:"center"
                 }}>
                    <Image source={assets.people} style={{ width:20,height:20,marginLeft:10 }}/>
                    <Text style={{ marginLeft:10,marginRight:10 }}>6</Text>
                    <Image source={assets.bag} style={{ width:20,height:20 }}/>
                    <Text style={{ marginLeft:10,marginRight:10 }}>2</Text>
                </View>
                <View style={{ 
                    flexDirection:"row",
                    justifyContent:"space-around",
                    alignItems:"center"
                    }}>
                    <Image 
                        source={assets.eth}
                        resizeMode="contain"
                        style={{ width:20, height:20, marginRight:2 }}
                    />
                    <Text>Rp 230.000</Text>
                </View>
            </View>
            
        </View>
    </View>
  )
}

export default NFTCard