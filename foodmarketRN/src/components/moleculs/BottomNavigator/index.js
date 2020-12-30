import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { IcHomeActive, IcHomeInactive, IcOrderActive, IcOrderInactive, IcProfileActive, IcProfileInactive } from '../../../assets';
import { colors, dimension } from '../../../utils';


const Icon = ({label, focus}) => {
	switch (label) {
		case 'Home':
			return focus ? <IcHomeActive/> : <IcHomeInactive/>
		case 'Order':
			return focus ? <IcOrderActive/> : <IcOrderInactive/>
		case 'Profile':
			return focus ? <IcProfileActive/> : <IcProfileInactive/>
		default:
			return <IcOrderInactive/>	
	}
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
	const focusedOptions = descriptors[state.routes[state.index].key].options;

	if (focusedOptions.tabBarVisible === false) {
		return null;
	}
	return (
		<View style={styles.container}>
		  {state.routes.map((route, index) => {
			const { options } = descriptors[route.key];
			const label =
			  options.tabBarLabel !== undefined
				? options.tabBarLabel
				: options.title !== undefined
				? options.title
				: route.name;
	
			const isFocused = state.index === index;
	
			const onPress = () => {
			  const event = navigation.emit({
				type: 'tabPress',
				target: route.key,
				canPreventDefault: true,
			  });
	
			  if (!isFocused && !event.defaultPrevented) {
				navigation.navigate(route.name);
			  }
			};
	
			const onLongPress = () => {
			  navigation.emit({
				type: 'tabLongPress',
				target: route.key,
			  });
			};
	
			return (
			  <TouchableOpacity
				key={index}
				accessibilityRole="button"
				accessibilityState={isFocused ? { selected: true } : {}}
				accessibilityLabel={options.tabBarAccessibilityLabel}
				testID={options.tabBarTestID}
				onPress={onPress}
				onLongPress={onLongPress}
				>
				<Icon label={label} focus={isFocused}/>
			  </TouchableOpacity>
			);
		  })}
		</View>
	  );
}

export default BottomNavigator

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: colors.white,
		justifyContent: 'space-between',
		paddingTop: dimension.height * 0.018,
		paddingBottom: dimension.height * 0.015,
		paddingHorizontal: dimension.width * 0.12
	}
})
