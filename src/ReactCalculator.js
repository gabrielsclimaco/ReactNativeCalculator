import React, { Component } from 'react'
import Style from './Style'
import {
    View,
    AppRegistry
} from 'react-native'

class ReactCalculator extends Component {

    render() {
        return (
          <View style={Style.rootContainer}>
              <View style={Style.displayContainer}></View>
              <View style={Style.inputContainer}></View>
          </View>
        )
    }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator)
