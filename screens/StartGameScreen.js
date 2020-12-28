import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import { colors } from '../constants/colors';
export default function StartGameScreen(props) {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start A New Game!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select A Number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<View style={styles.btn}>
						<Button color={colors.orange} title="reset" onPress={() => {}} />
					</View>
					<View style={styles.btn}>
						<Button color="green" title="confirm" onPress={() => {}} />
					</View>
				</View>
			</Card>
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
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	btn: {
		width: 100
	}
});
