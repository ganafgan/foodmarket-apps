import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ILFood1, ILFood2, ILFood3, ILFood4 } from '../../../assets';
import { colors, dimension, fonts } from '../../../utils';
import ListFood from '../ListFood';
import { useNavigation } from '@react-navigation/native'



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

const inProgress = () => {
    const navigation = useNavigation()
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('OrderDetail')} 
                image={ILFood4}
                items={5}
                price={250000}
                type='in-progress'
                name='Soup Special'
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('OrderDetail')} 
                image={ILFood1}
                items={5}
                price={250000}
                type='in-progress'
                name='Soup Special'
            />
                
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('OrderDetail')} 
                image={ILFood2}
                items={5}
                price={250000}
                type='in-progress'
                name='Soup Special'
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('OrderDetail')} 
                image={ILFood3}
                items={5}
                price={250000}
                type='in-progress'
                name='Soup Special'
            />
		</View>
	)
}
   
const pastOrders = () => {
    const navigation = useNavigation()
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            <ListFood 
                onPress={() => navigation.navigate('OrderDetail')} 
                image={ILFood4}
                type='past-orders'
                items={5}
                price={250000}
                name='Soup Special'
                date='Mei 2, 13.00'
            />
            <ListFood 
                onPress={() => navigation.navigate('OrderDetail')} 
                image={ILFood1}
                type='past-orders'
                items={5}
                price={250000}
                name='Soup Special'
                date='Mei 2, 13.00'
            />
            <ListFood 
                onPress={() => navigation.navigate('OrderDetail')} 
                image={ILFood2}
                type='past-orders'
                items={5}
                price={250000}
                name='Soup Special'
                date='Mei 2, 13.00'
                status='cancelled'

                />
            <ListFood 
                onPress={() => navigation.navigate('OrderDetail')}
                image={ILFood3}
                type='past-orders'
                items={5}
                price={250000}
                name='Soup Special'
                date='Mei 2, 13.00'
                status='cancelled'
             />
		</View>
	)
}

const initialLayout = { width: dimension.width };

const OrderTabSection = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'In Progress' },
      { key: '2', title: 'Past Orders' },
  ]);
  
  const renderScene = SceneMap({
      1: inProgress,
      2: pastOrders,
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

export default OrderTabSection

const styles = StyleSheet.create({})
