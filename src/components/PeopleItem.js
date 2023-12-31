import React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import * as actions from '../actions';
import Icon from 'react-native-vector-icons/EvilIcons';

const theme = getTheme();

const PeopleItem = (props) => {

    return (
        <TouchableWithoutFeedback
            onPress={() => props.selectPerson(props.people)}>
            <View style={styles.card}>
                <Image 
                    source={require('../images/background.jpg')}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon 
                    name={"user"}
                    size={100}
                    style={styles.icon}
                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.firstName} {props.people.lastName}</Text>
                <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
            </View>
        </TouchableWithoutFeedback>

    )
}



const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        borderRadius: 20,
        marginLeft: 7,
        marginRight: 7,
        overflow: 'hidden',
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: '#18635B',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    }
});

export default connect(null, actions)(PeopleItem);