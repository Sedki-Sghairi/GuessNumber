import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const AppButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
		<Text style={styles.appButtonText}>{title}</Text>
	</TouchableOpacity>
);

const MainBtn = (props) => {
	return (
		<View>
			<AppButton onPress={props.onPress} title={props.title} />
		</View>
	);
};

const styles = StyleSheet.create({
	appButtonContainer: {
		elevation: 8,
		backgroundColor: '#009688',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12
	},
	appButtonText: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase'
	}
});

export default MainBtn;
