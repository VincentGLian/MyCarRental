import * as React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { NFTCard } from '../../components';
import { NFTData } from '../../constants';

export default function Daftar({ navigation }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor:"white" }}>
            <FlatList 
            data={NFTData} 
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id} 
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
    );
}