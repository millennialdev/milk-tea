import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { COLORS } from '../constants';

const CustomButton = ({
	containerStyle,
	labelStyle,
	label,
	onPress,
	isPrimaryButton,
	isSecondaryButton,
}) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: isPrimaryButton ? COLORS.primary : COLORS.transparent,
				borderColor: isSecondaryButton ? COLORS.primary : COLORS.transparent,
				borderWidth: isSecondaryButton ? 1 : 0,
				...containerStyle,
			}}
			onPress={onPress}>
			<View>
				<Text
					style={{
						color: isPrimaryButton ? COLORS.white : COLORS.primary,
						...labelStyle,
					}}>
					{label}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CustomButton;
