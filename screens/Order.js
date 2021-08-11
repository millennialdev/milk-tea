import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	FlatList,
	TouchableWithoutFeedback,
	SafeAreaView,
} from 'react-native';

import { dummyData, FONTS, COLORS, SIZES, icons } from '../constants';
import { IconButton, TabButton } from '../components';
import { connect } from 'react-redux';

const Order = ({ navigation, route, appTheme }) => {
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [selectedTab, setSelectedTab] = useState(0);

	useEffect(() => {
		let { selectedLocation } = route.params;
		setSelectedLocation(selectedLocation);
	});

	function renderHeaderSection() {
		return (
			<SafeAreaView
				style={{
					height: 200,
					backgroundColor: COLORS.primary,
					alignItems: 'center',
				}}>
				{/* Nav Bar */}
				<View
					style={{
						flexDirection: 'row',
						paddingHorizontal: SIZES.radius,
						alignItems: 'center',
					}}>
					<IconButton
						icon={icons.leftArrow}
						onPress={() => navigation.goBack()}
					/>
					<View style={{ flex: 1, alignItems: 'center' }}>
						<Text style={{ color: COLORS.white, ...FONTS.h1, fontSize: 25 }}>
							Pick-up Order
						</Text>
					</View>

					<View style={{ width: 25 }} />
				</View>

				{/* Location */}
				<View
					style={{
						marginTop: SIZES.radius,
						backgroundColor: COLORS.white1,
						paddingHorizontal: SIZES.radius,
						paddingVertical: 5,
						borderRadius: SIZES.padding,
					}}>
					<Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
						{selectedLocation?.title}
					</Text>
				</View>
			</SafeAreaView>
		);
	}

	function renderTopTabBarSection() {
		return (
			<View
				style={{
					flexDirection: 'row',
					height: 50,
					marginTop: SIZES.radius,
					justifyContent: 'center',
					paddingLeft: SIZES.padding * 2,
					paddingRight: SIZES.padding,
				}}>
				{/* Tab Buttons */}
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<TabButton
						containerStyle={{ width: 60 }}
						label='Menu'
						selected={selectedTab == 0}
						onPress={() => setSelectedTab(0)}
					/>
					<TabButton
						containerStyle={{ width: 90 }}
						label='Previous'
						selected={selectedTab == 1}
						onPress={() => setSelectedTab(1)}
					/>
					<TabButton
						containerStyle={{ width: 90 }}
						label='Favorite'
						selected={selectedTab == 2}
						onPress={() => setSelectedTab(2)}
					/>
				</View>

				{/* Order Number */}
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* Header */}
			{renderHeaderSection()}

			{/* Detail */}
			<View
				style={{
					flex: 1,
					backgroundColor: appTheme.backgroundColor,
					marginTop: -45,
					borderTopLeftRadius: 40,
					borderTopRightRadius: 40,
				}}>
				{renderTopTabBarSection()}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

function mapStateToProps(state) {
	return {
		appTheme: state.appTheme,
		error: state.error,
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
