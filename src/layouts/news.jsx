import { ScrollView, View } from "react-native";
import { styles } from "../styles/styles";
import { New } from "../components/containersNew";

export function News() {
	return (
		<View style={styles.container} >
			<ScrollView>
				<New
					titleNew={'FELIZ AÑO 2025'}
					contentNew={'Todo el personal de RestauPonte les desea salud y exitos a todos nuestros clientes, este año 2025'}
				/>
				<New
					titleNew={'APLICACIÓN MÓVIL - ANDROID'}
					contentNew={'Bienvenido a la aplicación móvil de "RestauPonte". Esta aplicación solo se encuentra disponible en dispositivos Android, muy pronto, la aplicación va a ser accesible en dispositivos IOS. En todo caso, también se tiene la página web de "RestauPonte".'}
				/>
				<New
					titleNew={'PÁGINA WEB'}
					contentNew={'Bienvenido a la página web "RestauPonte". La página web todavía se encuentra en construcción, por lo tanto pueden existir grandes cambios referentes a esta versión con las próximas. Así que disfruta de lo que te ofrece esta pequeña web.'}
				/>
			</ScrollView>
		</View>
		)
}