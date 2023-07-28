import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

// const TabNavigator = createBottomTabNavigator(
//     {
//         People: PeopleList,
//         Add: AddPerson,
//         Company: CompanyList,
//     },
//     {
//         initialRouteName: 'People',
//         tabBarOptions: {
//             activeTintColor: 'white',
//             inactiveTintColor: '#80cbc4',
//             showLabel: false,
//             showIcon: true,
//             style: {
//                 backgroundColor: '#26a69a'
//             }
//         }
//     }
// );

const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="People" component={PeopleList} />
            <Tab.Screen name="AddPerson" component={AddPerson} />\
            <Tab.Screen name="CompanyList" component={CompanyList} />
        </Tab.Navigator>
    )
}

export default createAppContainer(TabNavigator);