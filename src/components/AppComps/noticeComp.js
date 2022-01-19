import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Metrix, Colors } from '../../config'
import Icon from 'react-native-vector-icons/FontAwesome5'
const NoticeComp = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerRow}>
                <View style={styles.iconView}>
                    <Icon name={props.iconName} color={ props.color} size={30}/>
                </View>
                <View>
                    <Text style={styles.text}>{props.text}</Text>
                    <View style={{flexDirection: 'row',justifyContent: 'center', alignItems:'center', paddingVertical:Metrix.VerticalSize(10)}}>
                        <Icon name={'calendar'} color={Colors.Grey} size={20 }/>
                        <Text> July 29, 2020 </Text>
                    </View>
                    <Text>Test Notifications...</Text>
                </View>
            </View>
                <Icon.Button name={'chevron-right'} color={Colors.Grey} size={26} backgroundColor={Colors.Transparent} />
        </View>
    )
}

export default NoticeComp

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: Metrix.Radius,
        borderColor: Colors.Grey,
        marginHorizontal: Metrix.HorizontalSize(20),
        marginVertical: Metrix.VerticalSize(10),
        padding: Metrix.HorizontalSize(10)
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconView: {
        backgroundColor: Colors.Grey,
        borderRadius: Metrix.Radius,
        width: Metrix.HorizontalSize(70),
        height: Metrix.VerticalSize(70),
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: Metrix.FontLarge,
        fontWeight: 'bold',
        width: Metrix.HorizontalSize(100),
        paddingLeft: Metrix.HorizontalSize(5)
    },
    iconBtn: {
        backgroundColor: Colors.Transparent,
        color: 'blue'
    }
})
