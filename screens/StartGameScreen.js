import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import MainBtn from '../components/MainBtn';
import SelectedNumber from '../components/SelectedNumber';
import { colors } from '../constants/colors';
export default function StartGameScreen(props) {
	const [ number, setNumber ] = useState('');
	const [ confirmed, setConfirmed ] = useState(false);
	const [ selectedNumber, setSelectedNumber ] = useState();
	const handleChange = (input) => {
		setNumber(input.replace(/[^0-9]/g, ''));
	};
	const resetInputHandler = () => {
		setNumber('');
		setConfirmed(false);
	};
	const confirmInputHandler = () => {
		Keyboard.dismiss();
		const chosenNumber = parseInt(number);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid Number!', 'Number has to be between 1 and 99.', [
				{
					text: 'Okay',
					style: 'destructive',
					onPress: resetInputHandler
				}
			]);
			return;
		}
		setConfirmed(true);
		setNumber('');
		setSelectedNumber(chosenNumber);
	};
	const ConfirmedOutput = () => {
		return confirmed ? (
			<Card style={styles.marginized}>
				<Text>Number Chosen:</Text>
				<SelectedNumber>{selectedNumber}</SelectedNumber>
				<MainBtn title="Start" onPress={() => props.startGameHandler(selectedNumber)} />
			</Card>
		) : null;
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
				<ConfirmedOutput />
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
	},
	marginized: {
		marginVertical: 10,
		alignItems: 'center'
	}
});
