import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

class PeopleDetail extends Component {
    
    render() {
        return (
            <View style={styles.container}>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <Image
                        source={require('../images/background.jpg')}
                        style={[theme.cardImageStyle, styles.image]}
                    />
                <EvilIcon name={'user'} size={100} style={styles.icon} />
                <SimpleIcon name={'close'} size={30} style={styles.closeIcon} 
                    onPress={() => this.props.noneSelected()} />
                <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.person.firstName} {this.props.person.lastName}</Text>
                <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.person.company}</Text>
                <View style={styles.textArea}>
                    <MaterialIcon name={'phone'} size={40} style={styles.textIcons}/>
                    <Text style={[theme.cardContentStyle]}>{this.props.person.phone}</Text>
                </View>

                <View style={styles.textArea}>
                    <MaterialIcon name={'email'} size={40} style={styles.textIcons}/>
                    <Text style={[theme.cardContentStyle]}>{this.props.person.email}</Text>
                </View>

                <View style={styles.textArea}>
                    <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}/>
                    <Text style={[theme.cardContentStyle]}>{this.props.person.project}</Text>
                </View>

                <View style={styles.textArea}>
                    <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}/>
                    <Text style={[theme.cardContentStyle]}>{this.props.person.notes}</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Image 
                            source={require('../images/call@2x.png.png')}
                            style={styles.actionImage}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image 
                            source={require('../images/email@2x.png.png')}
                            style={styles.actionImage}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image 
                            source={require('../images/sms@2x.png.png')}
                            style={styles.actionImage}
                        />
                    </TouchableOpacity>

                    <View style={styles.actionArea}>
                        <Text>Call</Text>
                        <Text>Email</Text>
                        <Text>SMS</Text>
                    </View>
                </View>

               </ScrollView>
            </View>
        )
    };

};


const mapStateToProps = state => {
    return {
        person: state.personSelected,
    }
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // width: 353,
        // flexWrap: 'wrap',
        // paddingTop: 20,
        // paddingLeft: 20,
    }, 
    card: {
        marginTop: 10,
        paddingBottom: 20,
        marginBottom: 20,
        borderColor: 'lightgrey',
        borderWidth: 0.5,
    },
    image: {
        flex: 0,
        height: 100,
        width: 333,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 295,
        color: 'rgba(233,166,154,0.8)',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '#26A69A',
    },
    actionImage: {

    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

});



export default connect(mapStateToProps, actions)(PeopleDetail);