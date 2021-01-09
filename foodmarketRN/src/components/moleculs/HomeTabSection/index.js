import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ILFood1, ILFood2, ILFood3, ILFood4 } from '../../../assets';
import { colors, dimension, fonts } from '../../../utils';
import ListFood from '../ListFood';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { getFoodDataByTypes } from '../../../redux/action/home';



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

const NewTaste = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {newTaste} = useSelector((state) => state.homeReducer)

    useEffect(()=>{
        dispatch(getFoodDataByTypes('new_food'))
    },[])

	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            {newTaste.map((item)=>{
                return (
                    <ListFood
                        key={item.id}
                        type='product'
                        name={item.name}
                        price={item.price}
                        rating={item.rate}
                        image={{uri: item.picturePath}}
                        onPress={() => navigation.navigate('FoodDetail', item)}
                    />
                )
            })}
		</View>
	)
}
   
const Popular = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {popular} = useSelector((state) => state.homeReducer)

    useEffect(()=>{
        dispatch(getFoodDataByTypes('popular'))
    },[])

	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            {popular.map((item)=>{
                return (
                    <ListFood
                        key={item.id}
                        type='product'
                        name={item.name}
                        price={item.price}
                        rating={item.rate}
                        image={{uri: item.picturePath}}
                        onPress={() => navigation.navigate('FoodDetail', item)}
                    />
                )
            })}
		</View>
	)
}

const Recomended = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {recomended} = useSelector((state) => state.homeReducer)

    useEffect(()=>{
        dispatch(getFoodDataByTypes('recomended'))
    },[])
    
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            {recomended.map((item)=>{
                return (
                    <ListFood
                        key={item.id}
                        type='product'
                        name={item.name}
                        price={item.price}
                        rating={item.rate}
                        image={{uri: item.picturePath}}
                        onPress={() => navigation.navigate('FoodDetail', item)}
                    />
                )
            })}
		</View>
	)
}
   
const initialLayout = { width: dimension.width };

const HomeTabSection = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'New Taste' },
      { key: '2', title: 'Popular' },
      { key: '3', title: 'Recomended' },
  ]);
  
  const renderScene = SceneMap({
      1: NewTaste,
      2: Popular,
      3: Recomended
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

export default HomeTabSection

const styles = StyleSheet.create({})
