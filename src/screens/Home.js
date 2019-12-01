import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }} >
                <Text style={{fontSize: 20}} > Home Screen! </Text>
            </View>
        )
    }
}

export default Home
