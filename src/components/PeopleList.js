import React, { Component} from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';
import { loadInitialContacts } from '../actions';


class PeopleList extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={'user'} size={50} color={tintColor} />
        )
    }

    // UNSAFE_componentWillMount() {
    //     this.props.loadInitialContacts();
    // }
    componentDidMount() {
        this.props.loadInitialContacts();
    }

    renderInitialView() {
        if (this.props.detailView === true) {
            return (
                <PeopleDetail />
            )
        } else {
            return (
                <FlatList 
                    data={this.props.people}
                    renderItem={({item}) => <PeopleItem people={item}/>}
                    keyExtractor={(item, index) => index.toString()}
                />
            )
        }
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderInitialView()}
            </View>
        )
    }
}


const mapStateToProps = state => {
    return { 
        people: state.people,
        detailView: state.detailView,
    }
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



export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);