import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import { stylesHome } from "../styles/stylesHome";
import { CircleButton } from "../components/buttonsHome";

export function InitialContentLight({title, commentary, textButton}) {
	return (
		<View style={[styles.lightContainer, styles.flexContainer ,stylesHome.categoryContent]} >
			<View style={stylesHome.firstHalfContent} >
				<Text style={styles.titleWhite} >{title}</Text>
				<Text style={styles.textWhite} >{commentary}</Text>
			</View>
			<View style={stylesHome.secondHalfContent}>
				<CircleButton contentText={textButton} />
			</View>
		</View>
		)
}

export function InitialContentDark({title, commentary, textButton}) {
	return (
		<View style={[styles.darkContainer, styles.flexContainer, stylesHome.categoryContent]} >
			<View style={stylesHome.firstHalfContent} >
				<Text style={styles.titleWhite} >{title}</Text>
				<Text style={styles.textWhite} >{commentary}</Text>
			</View>
			<View style={stylesHome.secondHalfContent}>
				<CircleButton contentText={textButton} />
			</View>
		</View>
		)
}