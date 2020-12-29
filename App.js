import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import Header from './components/Header';
import GameScreen from './components/GameScreen';

export default function App() {
	const [ userNumber, setUserNumber ] = useState();
	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};
	let content = <StartGameScreen startGameHandler={startGameHandler} />;
	if (userNumber) {
		content = <GameScreen userChoice={userNumber} />;
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
