import React, { Component} from 'react';
import { View, StyleSheet, ScrollView, FlatList, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleIconn from 'react-native-vector-icons/SimpleLineIcons';
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

               </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        people: state.people,
        personSelected: state.personSelected,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }, 
    image: {

    },
    icon: {

    },
    closeIcon: {

    },

});



export default connect(mapStateToProps)(PeopleDetail);