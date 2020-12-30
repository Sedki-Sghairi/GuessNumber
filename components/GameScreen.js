import React, { useState, useRef, useEffect } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import Card from './Card';
import { colors } from '../constants/colors';
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
const renderListItem = (round, numRound) => {
	return (
		<View key={round} style={styles.listItem}>
			<Text>#{numRound}</Text>
			<Text>{round}</Text>
		</View>
	);
};
const GameScreen = (props) => {
	const initialGuess = generateRandomBetween(1, 100, props.userChoice);
	const [ currentGuess, setCurrentGuess ] = useState(initialGuess);
	const [ rounds, setRounds ] = useState([ initialGuess ]);
	//adjust btn width according to screen size:
	const [ btnWidth, setBtnWidth ] = useState(Dimensions.get('window').width / 4);

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
	useEffect(() => {
		const changeLayout = () => {
			setBtnWidth(Dimensions.get('window').width / 4);
		};
		Dimensions.addEventListener('change', changeLayout);
		return () => {
			Dimensions.removeEventListener('change', changeLayout);
		};
	}, []);
	if (Dimensions.get('window').height < 500) {
		return (
			<View style={styles.screen}>
				<Text>Oponent's Guess:</Text>
				<View style={styles.containerRow}>
					<View style={{ width: btnWidth }}>
						<Button title="LOWER" onPress={guess.bind(this, 'lower')} />
					</View>
					<SelectedNumber>{currentGuess}</SelectedNumber>
					<View style={{ width: btnWidth }}>
						<Button title="GREATER" onPress={guess.bind(this, 'greater')} />
					</View>
				</View>
				<View style={styles.list}>
					<ScrollView>
						{rounds.map((round, index) => renderListItem(round, rounds.length - index))}
					</ScrollView>
				</View>
			</View>
		);
	} else
		return (
			<View style={styles.screen}>
				<Text>Oponent's Guess:</Text>
				<SelectedNumber>{currentGuess}</SelectedNumber>
				<Card style={styles.container}>
					<View style={{ width: btnWidth }}>
						<Button title="LOWER" onPress={guess.bind(this, 'lower')} />
					</View>
					<View style={{ width: btnWidth }}>
						<Button title="GREATER" onPress={guess.bind(this, 'greater')} />
					</View>
				</Card>
				<View style={styles.list}>
					<ScrollView>
						{rounds.map((round, index) => renderListItem(round, rounds.length - index))}
					</ScrollView>
				</View>
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
		marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
		width: '80%',
		maxWidth: '95%',
		minWidth: 300
	},
	listItem: {
		borderColor: colors.primaryLight,
		borderWidth: 1,
		marginVertical: 10,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	list: {
		width: '80%',
		flex: 1
	},
	containerRow: {
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});
