import React from 'react';
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	Image,
	Text,
	StyleSheet,
} from 'react-native';

import { SIZES, COLORS, FONTS, icons } from '../constants';

const HeaderBar = () => {
	return (
		<SafeAreaView
			style={{
				height: 150,
				width: '100%',
				backgroundColor: COLORS.purple,
				flexDirection: 'row',
			}}>
			{/* Greetings */}
			<View style={{ flex: 1, paddingLeft: SIZES.padding }}>
				<Text style={{ color: COLORS.white, ...FONTS.h2 }}>Wendy,</Text>
				<Text style={{ color: COLORS.white, ...FONTS.h2 }}>Welcome Back!</Text>
			</View>

			{/* Toggle Button */}
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'flex-end',
					marginHorizontal: SIZES.padding,
					height: 40,
					borderRadius: 20,
					backgroundColor: COLORS.lightPurple,
				}}>
				{/* Sun */}
				<View
					style={{
						width: 40,
						height: 40,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Image
						source={icons.sunny}
						style={{ height: 30, width: 30, tintColor: COLORS.white }}
					/>
				</View>

				{/* Moon */}
				<View
					style={{
						width: 40,
						height: 40,
						alignItems: 'center',
						justifyContent: 'center',
						...styles.selectedNightModeStyle,
					}}>
					<Image
						source={icons.night}
						style={{ height: 30, width: 30, tintColor: COLORS.white }}
					/>
				</View>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	selectedNightModeStyle: {
		borderRadius: 20,
		backgroundColor: COLORS.black,
	},
	selectedLightModeStyle: {
		borderRadius: 20,
		backgroundColor: COLORS.yellow,
	},
});

export default HeaderBar;
