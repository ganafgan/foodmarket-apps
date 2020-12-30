import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILDummyUser, ILFood1, ILFood2, ILFood3, ILFood4 } from '../../assets'
import { FoodCard, Gap } from '../../components'
import { dimension, fonts } from '../../utils'
import { colors } from '../../utils/colors'
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={{ backgroundColor: '#ff4081', flex: 1 }} />
  );
   
  const SecondRoute = () => (
    <View style={{ backgroundColor: '#673ab7', flex: 1 }} />
  );
   
  const initialLayout = { width: dimension.width };

const Home = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'second', title: 'Second' },
    ]);
    
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <View style={styles.container}>
            <View style={styles.wrapperProfile}>
                <View>
                    <Text style={styles.appName}>Foodmarket</Text>
                    <Text style={styles.greeting}>Let's get some foods</Text>
                </View>
                <Image source={ILDummyUser} style={styles.profile}/>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodContainer}>
                        <Gap width={dimension.width * 0.058}/>
                        <FoodCard image={ILFood1}/>
                        <FoodCard image={ILFood2}/>
                        <FoodCard image={ILFood3}/>
                        <FoodCard image={ILFood4}/>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.tabContainer}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'yellow'
    },
    profile: {
        width: dimension.width * 0.12,
        height: dimension.height * 0.06,
        borderRadius: 8
    },
    wrapperProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        paddingTop: dimension.height * 0.036,
        paddingHorizontal: dimension.width * 0.058,
        paddingBottom: dimension.height * 0.036,
    },
    appName: {
        fontSize: 22,
        fontFamily: fonts.primary[500],
        color: colors.black
    },
    greeting: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.secondary
    },
    foodContainer: {
        flexDirection: 'row'
    },
    tabContainer: {
        flex: 1
    }
})
