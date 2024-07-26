import { View, Text } from 'react-native'
import React from 'react'
import { CircleButton } from './Button'
import { assets } from '../constants'

const HomeHeader = () => {
  return (
    <View>
      <Text style={{ marginTop: 50, marginLeft: 20, marginBottom: 50, fontWeight:"900" }}>Hi, John</Text>
      <CircleButton imgUrl={assets.user} right={20} top={40}/>
    </View>
    
  )
}

export default HomeHeader