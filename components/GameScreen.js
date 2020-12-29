import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import SelectedNumber from './SelectedNumber';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNumb = Math.floor(Math.random() * (max - min)) - min;
	if (rndNumb === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNumb;
	}
};
const GameScreen = (props) => {
	const [ currentGuess, setCurrentGuess ] = useState(generateRandomBetween(1, 100, props.userChoice));
	return (
		<View>
			<Text>Oponent's Guess:</Text>
			<SelectedNumber>{currentGuess}</SelectedNumber>
			<Card style={styles.container}>
				<Button title="LOWER" />
				<Button title="GREATER" />
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
