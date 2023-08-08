import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers);


type Props = {};

const Tab = createBottomTabNavigator();


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
         <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if( iconName = focused) {
                      size = size + 10;
                    }

                    if (route.name === 'People') {
                      iconName = focused
                        ? 'people-circle'
                        : 'people-circle-outline';
                    } else if (route.name === 'Add Person') {
                      iconName = focused
                        ? 'person-add'
                        : 'person-add-outline';
                    } else if (route.name === 'Company List') {
                      iconName = focused
                        ? 'business'
                        : 'business-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                  },
                  tabBarActiveTintColor: '#14524C',
                  tabBarInactiveTintColor: 'white',
                  tabBarActiveBackgroundColor: '#68CABF',
                  tabBarInactiveBackgroundColor: '#3AA699',
                  headerShown: false,
                  tabBarHideOnKeyboard: true,
                })}
              >
                <Tab.Screen 
                name="People" 
                component={PeopleList} 
                options={{
                  // tabBarStyle: {backgroundColor: '#dddd'},
                  // tabBarButton: (props) => <TouchableOpacity {...props} />
                }}
                />
                <Tab.Screen name="Add Person" component={AddPerson} />
                <Tab.Screen name="Company List" component={CompanyList} />
            </Tab.Navigator>
         </NavigationContainer>
      </Provider>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

});

