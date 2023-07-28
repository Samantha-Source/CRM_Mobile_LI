import React, { Component} from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';


class PeopleList extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item}/>}
                />
            </View>
        )
    }
}


const mapStateToProps = state => {
    return { people: state.people }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // width: 353,
        // flexWrap: 'wrap',
        // paddingTop: 20,
        // paddingLeft: 20,
    }
});



export default connect(mapStateToProps)(PeopleList);