
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
            {/* <Tab.Navigator
              initialRouteName='People'
              screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#80cbc4',
                tabBarActiveBackgroundColor: '80cbc4',
              }}
            > */}
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
                    } else if (route.name === 'AddPerson') {
                      iconName = focused
                        ? 'person-add'
                        : 'person-add-outline';
                    } else if (route.name === 'CompanyList') {
                      iconName = focused
                        ? 'business'
                        : 'business-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                  },
                  tabBarActiveTintColor: '#3F6634',
                  tabBarInactiveTintColor: 'gray',
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
                <Tab.Screen name="AddPerson" component={AddPerson} />
                <Tab.Screen name="CompanyList" component={CompanyList} />
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

