import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function Header(props) {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		color: '#000',
		fontSize: 18
	},
	headerTitle: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		color: '#fff',
		fontSize: 25
	}
});
