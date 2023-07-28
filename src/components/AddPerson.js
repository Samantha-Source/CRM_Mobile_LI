import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';


class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Add person screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
})

export default connect(null, actions)(AddPerson);