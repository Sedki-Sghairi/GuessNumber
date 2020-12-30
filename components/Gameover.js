import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import MainBtn from './MainBtn';

export default function Gameover(props) {
	const [ imgWidth, setImgWidth ] = useState(Dimensions.get('window').width * 0.6);
	useEffect(() => {
		const changeWidth = () => {
			setImgWidth(Dimensions.get('window').width * 0.6);
		};
		Dimensions.addEventListener('change', changeWidth);
		return () => {
			Dimensions.removeEventListener('change', changeWidth);
		};
	}, []);
	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text style={styles.gameover}>game over</Text>
				<Image
					fadeDuration={1000}
					style={(styles.image, { width: imgWidth, height: imgWidth })}
					source={require('../assets/success.png')}
				/>
				<Text style={styles.marginized}>
					Number of Rounds: <Text style={styles.highlit}>{props.rounds}</Text>
				</Text>
				<MainBtn title="New Game" onPress={props.restartNewGame} />
			</View>
		</ScrollView>
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
		borderRadius: 10
	},
	highlit: {
		color: colors.orange,
		fontSize: 30,
		fontWeight: 'bold'
	}
});
