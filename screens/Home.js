import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
	ImageBackground,
	Animated,
	Image,
} from 'react-native';

import { connect } from 'react-redux';
import { HeaderBar } from '../components';
import {
	constants,
	icons,
	COLORS,
	FONTS,
	images,
	SIZES,
	dummyData,
} from '../constants';

const promoTabs = constants.promoTabs;

const TabIndicator = ({}) => {
	return (
		<View
			style={{
				position: 'absolute',
				height: '100%',
				width: 100,
				left: 0,
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.primary,
			}}></View>
	);
};

const Tabs = ({ appTheme }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginTop: SIZES.padding,
				backgroundColor: appTheme.tabBackgroundColor,
				borderRadius: SIZES.radius,
			}}>
			{/* Tab Indicator */}
			<TabIndicator />

			{/* Tabs */}
			{promoTabs.map((item, index) => {
				return (
					<TouchableOpacity
						key={`PromoTab-${index}`}
						onPress={() => console.log(item)}>
						<View
							style={{
								paddingHorizontal: 15,
								alignItems: 'center',
								justifyContent: 'center',
								height: 40,
							}}>
							<Text style={{ color: COLORS.white, ...FONTS.h3 }}>
								{item.title}
							</Text>
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

const Home = ({ navigation, appTheme }) => {
	const scrollX = React.useRef(new Animated.Value(0)).current;

	function renderAvailableRewards() {
		return (
			<TouchableOpacity
				style={{
					flexDirection: 'row',
					marginTop: SIZES.padding,
					marginHorizontal: SIZES.padding,
					height: 100,
				}}
				onPress={() => navigation.navigate('Rewards')}>
				{/* Reward Cup */}
				<View
					style={{
						width: 100,
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: COLORS.pink,
						borderTopLeftRadius: 15,
						borderBottomLeftRadius: 15,
					}}>
					<ImageBackground
						source={icons.reward_cup}
						resizeMode='contain'
						style={{
							width: 85,
							height: 85,
							marginLeft: 3,
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<View
							style={{
								width: 30,
								height: 30,
								borderRadius: 15,
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: COLORS.transparentBlack,
							}}>
							<Text style={{ color: COLORS.white, ...FONTS.h4 }}>280</Text>
						</View>
					</ImageBackground>
				</View>

				{/* Reward Details */}
				<View
					style={{
						flex: 1,
						backgroundColor: COLORS.lightPink,
						marginLeft: -10,
						borderRadius: 15,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text style={{ color: COLORS.primary, ...FONTS.h2, fontSize: 20 }}>
						Available Rewards
					</Text>

					<View
						style={{
							marginTop: 5,
							padding: SIZES.base,
							borderRadius: SIZES.radius * 2,
							backgroundColor: COLORS.primary,
						}}>
						<Text style={{ color: COLORS.white, ...FONTS.body3 }}>
							150 points - $2.50 off
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	function renderPromoDeals() {
		return (
			<View style={{ flex: 1, alignItems: 'center' }}>
				{/* Header - Tabs */}
				<Tabs appTheme={appTheme} />

				{/* Details */}
				<Animated.FlatList
					data={dummyData.promos}
					horizontal
					pagingEnabled
					scrollEventThrottle={16}
					snapToAlignment='center'
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => `${item.id}`}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false }
					)}
					renderItem={({ item, index }) => {
						return (
							<View
								style={{
									flex: 1,
									alignItems: 'center',
									width: SIZES.width,
									paddingTop: SIZES.padding,
								}}>
								{/* Image */}
								<Image
									source={images.strawberryBackground}
									resizeMode='contain'
									style={{ width: '100%' }}
								/>

								{/* Name */}
								<Text style={{ color: COLORS.red, ...FONTS.h1, fontSize: 27 }}>
									{item.name}
								</Text>

								{/* Description */}
								<Text
									style={{
										marginTop: 3,
										color: appTheme.textColor,
										...FONTS.body4,
									}}>
									{item.description}
								</Text>

								{/* Calories */}
								<Text
									style={{
										marginTop: 3,
										color: appTheme.textColor,
										...FONTS.body4,
									}}>
									Calories: {item.calories}
								</Text>

								{/* Button */}
							</View>
						);
					}}
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<HeaderBar />

			<ScrollView
				style={{
					flex: 1,
					marginTop: -25,
					borderTopLeftRadius: SIZES.radius * 2,
					borderTopRightRadius: SIZES.radius * 2,
					backgroundColor: appTheme.backgroundColor,
				}}
				contentContainerStyle={{
					paddingBottom: 150,
				}}>
				{/* Rewards */}
				{renderAvailableRewards()}

				{/* Promo */}
				{renderPromoDeals()}
			</ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
