import { View, Text } from "react-native";
import { stylesNews } from "../styles/stylesNews";
import { styles } from "../styles/styles"

export function New({titleNew, contentNew}) {
	return(
		<View style={[styles.lightContainer, stylesNews.mainNewsContent]} >
			<View style={[styles.darkContainer, stylesNews.titleNewsContent]} >
				<Text style={styles.titleWhite} >{titleNew}</Text>
			</View>
			<View style={stylesNews.contentNew} >
				<Text style={[styles.text, {color: 'white'}]} >
					{contentNew}
				</Text>
			</View>
		</View>
		)
}