import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
	return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.26,
		shadowRadius: 6,
		backgroundColor: '#fff',
		padding: 10,
		elevation: 5,
		borderRadius: 5
	}
});
