import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import { colors } from '../constants/colors';
export default function StartGameScreen(props) {
	const [ number, setNumber ] = useState('');
	const [ confirmed, setConfirmed ] = useState(false);
	const handleChange = (input) => {
		setNumber(input.replace(/[^0-9]/g, ''));
	};
	const resetInputHandler = () => {
		setNumber('');
		setConfirmed(false);
	};
	const confirmInputHandler = () => {
		if (number == '' || number <= 0 || number > 99) {
			return;
		}
		setConfirmed(true);
		setNumber('');
	};
	let Sedki = () => {
		return confirmed ? <Text>{number}</Text> : null;
	};

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start A New Game!</Text>
				<Card style={styles.inputContainer}>
					<Text>Select A Number</Text>
					<Input
						style={styles.input}
						keyboadType="number-pad"
						maxLength={2}
						blurOnSbmit
						onChangeText={handleChange}
						value={number}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.btn}>
							<Button color={colors.orange} title="reset" onPress={resetInputHandler} />
						</View>
						<View style={styles.btn}>
							<Button color="green" title="confirm" onPress={confirmInputHandler} />
						</View>
					</View>
				</Card>
				<Sedki />
			</View>
		</TouchableWithoutFeedback>
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
	},
	input: {
		width: 50,
		textAlign: 'center'
	}
});
