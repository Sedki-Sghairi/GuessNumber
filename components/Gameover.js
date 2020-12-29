import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

export default function Gameover(props) {
	return (
		<View style={styles.screen}>
			<Text style={styles.gameover}>game over</Text>
			<Image style={styles.image} source={require('../assets/success.png')} />
			<Text style={styles.marginized}>Number of Rounds: {props.rounds}</Text>
			<Button title="New Game" onPress={props.restartNewGame} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	gameover: {
		color: colors.orange,
		fontWeight: 'bold'
	},
	marginized: {
		marginVertical: 10
	},
	image: {
		width: '80%',
		height: 300,
		borderRadius: 10
	}
});
