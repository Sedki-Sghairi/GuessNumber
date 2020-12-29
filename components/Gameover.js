import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Gameover() {
	return (
		<View style={styles.screen}>
			<Text>game over</Text>
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
