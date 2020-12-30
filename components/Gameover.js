import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import MainBtn from './MainBtn';

export default function Gameover(props) {
	return (
		<View style={styles.screen}>
			<Text style={styles.gameover}>game over</Text>
			<Image fadeDuration={1000} style={styles.image} source={require('../assets/success.png')} />
			<Text style={styles.marginized}>
				Number of Rounds: <Text style={styles.highlit}>{props.rounds}</Text>
			</Text>
			<MainBtn title="New Game" onPress={props.restartNewGame} />
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
		fontWeight: 'bold',
		marginBottom: 6,
		textTransform: 'capitalize',
		letterSpacing: 8
	},
	marginized: {
		marginVertical: 10
	},
	image: {
		width: '80%',
		height: 300,
		borderRadius: 10
	},
	highlit: {
		color: colors.orange,
		fontSize: 30,
		fontWeight: 'bold'
	}
});
