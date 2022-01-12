import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, Metrix } from '../../config'
import Icon from 'react-native-vector-icons/FontAwesome5'

const IconComp = () => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View >
                <Icon.Button name='users' color={Colors.Major} size={26} backgroundColor={Colors.Transparent}></Icon.Button>
            </View>
            <View >
                <Icon.Button name='bell' color={Colors.Major} size={26}  backgroundColor={Colors.Transparent}></Icon.Button>
            </View>
            <View >
                <Icon.Button name='ellipsis-v' color={Colors.Major} size={26}  backgroundColor={Colors.Transparent}></Icon.Button>
            </View>
        </View>
    )
}

export default React.memo(IconComp)


