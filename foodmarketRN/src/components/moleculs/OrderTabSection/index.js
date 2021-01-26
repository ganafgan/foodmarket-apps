import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { getInProgress, getPastOrders } from '../../../redux/action';
import { colors, dimension, fonts } from '../../../utils';
import ListFood from '../ListFood';



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
    const dispatch = useDispatch()
    const { inProgress } = useSelector((state) => state.orderReducer)
    const [refreshing, setRefreshing] = useState(false)

    // useEffect(()=>{
    //     dispatch(getInProgress())
    // }, [])

    const onRefresh = () => {
        setRefreshing(true)
        dispatch(getInProgress())
        setRefreshing(false)
    }
    
	return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            {inProgress.map((order, index)=>{
                return (
                    <ListFood 
                    key={index}
                    onPress={() => navigation.navigate('OrderDetail', order)} 
                    image={{uri: order.food.picturePath}}
                    type='in-progress'
                    items={order.quantity}
                    price={order.total}
                    name={order.food.name}
            />
                )
            })}
		</View>
        </ScrollView>
	)
}
   
const pastOrders = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { pastOrders } = useSelector((state) => state.orderReducer)
    const [refreshing, setRefreshing] = useState(false)

    // useEffect(()=>{
    //     dispatch(getPastOrders())
    // },[])

    const onRefresh = () => {
        setRefreshing(true)
        dispatch(getPastOrders())
        setRefreshing(false)
    }

	return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
             {pastOrders.map((order, index)=>{
                return (
                    <ListFood 
                    key={index}
                    onPress={() => navigation.navigate('OrderDetail', order)} 
                    image={{uri: order.food.picturePath}}
                    type='past-orders'
                    items={order.quantity}
                    price={order.total}
                    name={order.food.name}
                    date={order.created_at}
                    status={order.status}
            />
                )
            })}
		</View>
        </ScrollView>
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
