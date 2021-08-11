import React from 'react';
import {
	View,
	Text,
	FlatList,
	ImageBackground,
	StyleSheet,
} from 'react-native';

import { HeaderBar, CustomButton } from '../components';
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants';

import { connect } from 'react-redux';

const Rewards = ({ navigation, appTheme }) => {
	function renderRewardPointSection() {
		return (
			<View style={{ alignItems: 'center', marginVertical: SIZES.padding }}>
				{/* Text */}
				<Text style={{ color: COLORS.primary, ...FONTS.h1, fontSize: 35 }}>
					Rewards
				</Text>

				<Text
					style={{
						marginTop: 10,
						color: appTheme.textColor,
						width: SIZES.width * 0.6,
						textAlign: 'center',
						...FONTS.h3,
						lineHeight: 18,
					}}>
					You are 60 points away from your next reward
				</Text>

				{/* Image */}
				<ImageBackground
					source={icons.reward_cup}
					resizeMode='contain'
					style={{
						marginTop: SIZES.padding,
						width: SIZES.width * 0.8,
						height: SIZES.width * 0.9,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<View
						style={{
							width: 70,
							height: 70,
							borderRadius: 35,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: COLORS.white,
						}}>
						<Text style={{ ...FONTS.h1 }}>280</Text>
					</View>
				</ImageBackground>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* Header */}
			<HeaderBar />

			{/* Details */}
			<FlatList
				style={{
					marginTop: -25,
					borderTopLeftRadius: SIZES.radius * 2,
					borderTopRightRadius: SIZES.radius * 2,
					backgroundColor: appTheme.backgroundColor,
				}}
				data={dummyData.availableRewards}
				keyExtractor={(item) => `${item.id}`}
				showsVerticalScrollIndicator={false}
				ListHeaderComponent={
					<View>
						{/* Reward Point */}
						{renderRewardPointSection()}

						{/* Buttons */}

						{/* Header Label */}
					</View>
				}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								marginHorizontal: SIZES.padding,
								marginBottom: SIZES.base,
								paddingVertical: SIZES.base,
								borderRadius: 20,
								backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2,
							}}>
							<Text
								style={{
									color: item.eligible ? COLORS.black : COLORS.lightGray2,
									...FONTS.body3,
								}}>
								{item.title}
							</Text>
						</View>
					);
				}}></FlatList>
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

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
