import React, { Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKColor } from 'react-native-material-kit';
import * as actions from '../actions';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';

const AddButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.addButtonContainer}>
        <Text style={styles.addButtonText}>{title}</Text>
    </TouchableOpacity>
);

// const TextField = ({title, onChange }) => (
//     <MKTextField
//         placeholder={title}
//         onChangeText={onChange}
//     />
// )

class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }


    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Fumi
                        label="First Name"
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={MKColor.Amber}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Last Name"
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={MKColor.Amber}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Phone Number"
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={MKColor.Amber}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Email"
                        iconClass={FontAwesomeIcon}
                        iconName={'envelope'}
                        iconColor={MKColor.Amber}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Company"
                        iconClass={FontAwesomeIcon}
                        iconName={'university'}
                        iconColor={MKColor.Amber}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Project"
                        iconClass={FontAwesomeIcon}
                        iconName={'folder-open'}
                        iconColor={MKColor.Amber}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Notes"
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil-square-o'}
                        iconColor={MKColor.Amber}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />


                    
                </View>


                <View>
                    <AddButton title="Button" size="sm" backgroundColor="#007bff" onPress={() => console.log("pressed Add Person button")} />
                </View>


                
                
                
          </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        // backgroundColor: MKColor.BlueGrey,
    },
    fieldStyles: {
        backgroundColor: '#ECFFEB',
        borderRadius: 20,
        marginBottom: 10,
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