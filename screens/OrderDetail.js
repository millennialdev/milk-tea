import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from 'react-native';
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants';
import { IconButton } from '../components';
import { connect } from 'react-redux';

const OrderDetail = () => {
	return <View></View>;
};

function mapStateToProps(state) {
	return {
		appTheme: state.appTheme,
		error: state.error,
	};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
