import React, { useState, useRef, useEffect } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import SelectedNumber from './SelectedNumber';
// import { Ionicons } from '@expo/vector-icons';
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
	const initialGuess = generateRandomBetween(1, 100, props.userChoice);
	const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
	const [ rounds, setRounds ] = useState([ initialGuess ]);
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
				currentLow.current = currentGuess + 1;
			}
			const nexGuess = generateRandomBetween(currentLow.current, currentHight.current, currentGuess);
			setRounds((currentRound) => [ nexGuess, ...currentRound ]);
			setCurrentGuess(nexGuess);
		}
	};
	const { userChoice, gameOverHandler } = props;
	useEffect(
		() => {
			if (currentGuess === userChoice) {
				gameOverHandler(rounds.length);
			}
			return () => {
				//
			};
		},
		[ currentGuess, userChoice, gameOverHandler ]
	);
	return (
		<View style={styles.screen}>
			<Text>Oponent's Guess:</Text>
			<SelectedNumber>{currentGuess}</SelectedNumber>
			<Card style={styles.container}>
				<View style={styles.btn}>
					<Button title="LOWER" onPress={guess.bind(this, 'lower')} />
				</View>
				<View style={styles.btn}>
					<Button title="GREATER" onPress={guess.bind(this, 'greater')} />
				</View>
			</Card>
			<ScrollView>
				{rounds.map((round) => (
					<View key={round}>
						<Text>{round}</Text>
					</View>
				))}
			</ScrollView>
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
	},
	btn: {
		flex: 1
	}
});
