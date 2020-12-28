import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
export default function StartGameScreen(props) {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start A New Game!</Text>
			<View style={styles.inputContainer}>
				<Text>Select A Number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<Button title="reset" onPress={() => {}} />
					<Button title="confirm" onPress={() => {}} />
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
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
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	}
});
