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

const NewTaste = () => {
    const navigation = useNavigation()
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood4}
                type='produk'
                name='Soup Special'
                price={25000}
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood1}
                type='produk'
                name='Soup Special'
                price={25000}
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')}
                image={ILFood2}
                type='produk'
                name='Soup Special'
                price={25000}
             />
            <ListFood
                rating={3}
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood3}
                type='produk'
                name='Soup Special'
                price={25000}
              />
		</View>
	)
}
   
const Popular = () => {
    const navigation = useNavigation()
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood4}
                type='produk'
                name='Soup Special'
                price={25000}
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood1}
                type='produk'
                name='Soup Special'
                price={25000}
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood2}
                type='produk'
                name='Soup Special'
                price={25000}
            />
            <ListFood 
                rating={3}
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood3}
                type='produk'
                name='Soup Special'
                price={25000}
             />
		</View>
	)
}

const Recomended = () => {
    const navigation = useNavigation()
	return (
		<View style={{paddingTop: dimension.height * 0.009, paddingHorizontal: 24}}>
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood4}
                type='produk'
                name='Soup Special'
                price={25000}
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood1}
                type='produk'
                name='Soup Special'
                price={25000}
            />
            <ListFood 
                rating={3} 
                onPress={() => navigation.navigate('FoodDetail')} 
                image={ILFood2}
                type='produk'
                name='Soup Special'
                price={25000}
            />
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
