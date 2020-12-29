import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function SelectedNumber(props) {
	return (
		<View style={styles.contaier}>
			<Text style={styles.number}>{props.children}</Text>
			<Button title="Start" onPress={() => props.startGameHandler(props.children)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginVertical: 20,
		alignContent: 'center',
		justifyContent: 'center'
	},
	number: {
		borderColor: colors.blue,
		borderWidth: 2,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		color: colors.blue,
		marginVertical: 10,
		fontSize: 30,
		textAlign: 'center'
	}
});
