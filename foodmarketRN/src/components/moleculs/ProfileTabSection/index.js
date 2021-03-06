import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { colors, dimension, fonts } from '../../../utils';
import ListMenu from '../ListMenu';



const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ 
            backgroundColor: colors.black,
            width: '15%',
            marginLeft: '3%',
            height: 2
         }}
        style={{ 
			backgroundColor: colors.white ,
			elevation: 0, 
			shadowOpacity: 0,
			borderBottomColor: '#F2F2F2',
			borderBottomWidth: 1
		}}
        tabStyle={{width: 'auto'}}
        renderLabel={({ route, focused, color }) => (
            <Text style={{ 
                fontFamily: fonts.primary[500], 
                color: focused ? colors.black : colors.secondary
                }}>
              {route.title}
            </Text>
          )}
    />
  );

const Account = () => {
    const navigation = useNavigation()
    const SignOut = () => {
        AsyncStorage.multiRemove(['userProfile', 'token'])
            .then(()=>{
                navigation.reset({index: 0, routes: [{name: 'SignIn'}]})
            })
    }
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            <ListMenu
                name='Edit Profile'
                onPress={() => navigation.navigate('EditProfile')}
            />
            <ListMenu
                name='Home Address'
            />
            <ListMenu
                name='Security'
            />
            <ListMenu
                name='Payments'
            />
            <ListMenu
                name='SignOut'
                onPress={SignOut}
            />
		</View>
	)
}
   
const foodMarket = () => {
    const navigation = useNavigation()
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            <ListMenu
                name='Rate App'
            />
            <ListMenu
                name='Help Center'
            />
            <ListMenu
                name='Privacy & Policy'
            />
            <ListMenu
                name='Terms & Condition'
            />
		</View>
	)
}

const initialLayout = { width: dimension.width };

const ProfileTabSection = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'Acoount' },
      { key: '2', title: 'FoodMarket' },
  ]);
  
  const renderScene = SceneMap({
      1: Account,
      2: foodMarket,
  });
    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
			initialLayout={initialLayout}
			style={{backgroundColor: colors.white}}
        />
    )
}

export default ProfileTabSection

const styles = StyleSheet.create({})
