import React from 'react'
import {View, Text} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {ContainerButton,Item, ActionContainer} from './styles'
import {Feather} from '@expo/vector-icons'

export default function ListItem({data, selectedItem, deleteItem}){
    function RightActions(){
        return(
            <ActionContainer onPress={()=>  deleteItem(data.id)}>
                <Feather name="trash" size={24} color="#fff"/>
            </ActionContainer>
        )
    }

    return(
        <View>
            <Swipeable renderRightActions={RightActions}>
                <ContainerButton activeOpacity={.9} onPress={()=> selectedItem(data)}>
                    <Feather
                    name="link"
                    color="#fff"
                    size={24}/>
                    <Item numberOfLines={1}>{data.long_url}</Item>
                </ContainerButton >
            </Swipeable>
        </View>
    )
}