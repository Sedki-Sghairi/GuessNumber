import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Gameover(props) {
	return (
		<View style={styles.screen}>
			<Text>game over</Text>
			<Text>Number of Rounds: {props.rounds}</Text>
			<Button title="New Game" onPress={props.restartNewGame} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
