import React, { Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import * as actions from '../actions';

const AddButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.addButtonContainer}>
        <Text style={styles.addButtonText}>{title}</Text>
    </TouchableOpacity>
);

class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }



    render() {
        return (
            <View style={styles.form}>
                <Text>Add person screen</Text>
                <AddButton title="Button" size="sm" backgroundColor="#007bff" />
                
                {/* <Button
                    title="Button"
                    onPress={() => console.log('pressed button')}
                    color="#2196F3"
                    accessibilityLabel='The info about the button'
                /> */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginTop: 20,
    },
    addButtonContainer: {
        alignSelf: 'center',
        backgroundColor: '#ABEDC6',
        borderRadius: 50,
        width: 150,
        height: 50,
        justifyContent: 'center'
        
    },
    addButtonText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    }

})

export default connect(null, actions)(AddPerson);