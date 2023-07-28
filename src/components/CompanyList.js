import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';


class CompanyList extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'archive'} size={50} color={tintColor} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Company List screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
})


export default connect(null, actions)(CompanyList);