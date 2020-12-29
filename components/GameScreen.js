import React, { useState, useRef } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import SelectedNumber from './SelectedNumber';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNumb = Math.floor(Math.random() * (max - min)) + min;
	if (rndNumb === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNumb;
	}
};
const GameScreen = (props) => {
	const [ currentGuess, setCurrentGuess ] = useState(generateRandomBetween(1, 100, props.userChoice));
	const currentLow = useRef(1);
	const currentHight = useRef(100);
	const guess = (direction) => {
		if (
			(direction === 'lower' && currentGuess < props.userChoice) ||
			(direction === 'greater' && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie!", 'Would you Please!', [
				{
					text: 'Ok',

					style: 'cancel'
				}
			]);
			return;
		} else {
			if (direction === 'lower') {
				currentHight.current = currentGuess;
			} else {
				currentLow.current = currentGuess;
			}
			const nexGuess = generateRandomBetween(currentLow.current, currentHight.current, currentGuess);
			setCurrentGuess(nexGuess);
		}
	};
	return (
		<View style={styles.screen}>
			<Text>Oponent's Guess:</Text>
			<SelectedNumber>{currentGuess}</SelectedNumber>
			<Card style={styles.container}>
				<Button title="LOWER" onPress={guess.bind(this, 'lower')} />
				<Button title="GREATER" onPress={guess.bind(this, 'greater')} />
			</Card>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	}
});
