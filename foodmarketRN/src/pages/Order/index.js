import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { EmptyOrder, Header, OrderTabSection } from '../../components'
import { colors, dimension } from '../../utils'


const Order = () => {

    const [isEmpty] = useState(false)

    return (
        <View style={styles.container}>
            {isEmpty 
                ? <EmptyOrder/> 
                : <View style={styles.content}>
                    <Header title='Your Orders' subtitle='Wait for the best meal'/>
                    <View style={styles.tabContainer}>
                        <OrderTabSection/>
                    </View>
                </View>
            }
            
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1
    },
    tabContainer: {
        flex: 1,
        marginTop: dimension.height * 0.029
    }
})
