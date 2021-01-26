import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'
import { getInProgress, getOrders, getPastOrders } from '../../redux/action'
import { getFoodData } from '../../redux/action/home'
import { dimension } from '../../utils'


const Home = ({navigation}) => {

    const dispatch = useDispatch()
    const {food} = useSelector((state) => state.homeReducer)

    useEffect(()=>{
        dispatch(getFoodData())
        dispatch(getOrders())
        dispatch(getInProgress())
        dispatch(getPastOrders())
    },[])

    const renderDataFood = () => {
        return food.map((itemFood)=>{
            return (
                <FoodCard
                    key={itemFood.id}
                    name={itemFood.name}
                    image={{uri: itemFood.picturePath}}
                    rating={itemFood.rate}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                />
            )
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <HomeProfile/>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodContainer}>
                            <Gap width={dimension.width * 0.058}/>
                            {renderDataFood()}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.tabContainer}>
                    <HomeTabSection/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    foodContainer: {
        flexDirection: 'row'
    },
    tabContainer: {
        flex: 1,
    }
})
