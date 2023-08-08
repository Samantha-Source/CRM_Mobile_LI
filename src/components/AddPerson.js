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


class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }

    onAddPress() {
        const { firstName, lastName, phone, email, company, project, notes } = this.props;
        console.log(firstName, lastName);

        // this.props.createNewContact({ firstName, lastName, phone, email, company, project, notes });

        // this.props.navigation.navigate('People');
    }


    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Fumi
                        label="First Name"
                        value={this.props.firstName}
                        onChangeText={value => this.props.formUpdate({ prop: 'firstName', value})}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={MKColor.Blue}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Last Name"
                        value={this.props.lastName}
                        onChangeText={value => this.props.formUpdate({ prop: 'lastName', value})}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={MKColor.Blue}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Phone Number"
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({ prop: 'phone', value})}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={MKColor.Blue}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Email"
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({ prop: 'email', value})}
                        iconClass={FontAwesomeIcon}
                        iconName={'envelope'}
                        iconColor={MKColor.Blue}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Company"
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({ prop: 'company', value})}
                        iconClass={FontAwesomeIcon}
                        iconName={'university'}
                        iconColor={MKColor.Blue}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Project"
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({ prop: 'project', value})}
                        iconClass={FontAwesomeIcon}
                        iconName={'folder-open'}
                        iconColor={MKColor.Blue}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />
                    <Fumi
                        label="Notes"
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({ prop: 'notes', value})}
                        iconClass={FontAwesomeIcon}
                        iconName={'pencil-square-o'}
                        iconColor={MKColor.Blue}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        style={styles.fieldStyles}
                    />


                    
                </View>


                <View>
                    <AddButton 
                        title="Create Contact" 
                        size="sm" 
                        backgroundColor="#007bff" 
                        onPress={() => console.log("pressed Add Person button")}
                        />
                </View>


                
                
                
          </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const { firstName, lastName, phone, email, project, notes } = state;
    return { firstName, lastName, phone, email, project, notes};
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
        width: 200,
        height: 50,
        justifyContent: 'center',
    },
    addButtonText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    }

})

export default connect(mapStateToProps, actions)(AddPerson);