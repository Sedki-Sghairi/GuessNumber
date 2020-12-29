import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import Header from './components/Header';
import GameScreen from './components/GameScreen';
import Gameover from './components/Gameover';

export default function App() {
	const restartNewGame = () => {
		setRounds(0);
		setUserNumber(null);
	};
	const gameOverHandler = (rounds) => {
		setRounds(rounds);
	};
	const [ userNumber, setUserNumber ] = useState();
	const [ rounds, setRounds ] = useState(0);
	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};
	let content = <StartGameScreen startGameHandler={startGameHandler} />;
	if (userNumber && rounds === 0) {
		content = <GameScreen userChoice={userNumber} gameOverHandler={gameOverHandler} />;
	} else if (rounds > 0) {
		content = <Gameover restartNewGame={restartNewGame} rounds={rounds} />;
	}

	return (
		<View style={styles.container}>
			<Header title="Guess A Number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
