import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { ILFood1, ILFood2, ILFood3, ILFood4 } from '../../assets'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'
import { dimension } from '../../utils'


const Home = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <HomeProfile/>
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
        flex: 1
    }
})
