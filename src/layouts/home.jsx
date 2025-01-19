import { View, Text, Button, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import { InitialContentDark, InitialContentLight } from "../components/homeInteractiveContainers";


export function Home() {

	const textButtonContent = 'Observar'

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={{marginVertical: 35}} >
					<Text style={[styles.title, {textAlign: 'center'}]} >BIENVENIDO</Text>
					<Text style={[styles.subTitle, {textAlign: 'center'}]}>Cra 21a #81-91</Text>
					<View style={styles.buttonLayout}>
						<Button 
							title="REALIZA TU PEDIDO"
							color={'#8e24aa'}
						/>
					</View>
				</View>
				<View style={{marginVertical: 8}} >
					<InitialContentLight 
						title={'CARTA'}
						commentary={'Observa todos nuestros platos a la carta.'}
						textButton={textButtonContent}
					/>
					<InitialContentDark 
						title={'CORRIENTE'}
						commentary={'Mira la variedad de platos corrientes, que te ofrecemos.'}
						textButton={textButtonContent}
					/>
					<InitialContentLight 
						title={'ESPECIAL'}
						commentary={'Deleitate con nuestros excelentes platos especiales.'}
						textButton={textButtonContent}
					/>
					<InitialContentDark 
						title={'BEBIDAS'}
						commentary={'Refrescate con nuestras bebidas.'}
						textButton={textButtonContent}
					/>
				</View>
				<View style={{marginVertical: 35}} >
					<Text style={[styles.subTitle, {fontWeight: 'bold', textAlign: 'center'}]} >Observa todo nuestro</Text>
					<View style={styles.buttonLayout} >
						<Button
							title="CATALOGO" 
							color={'#8e24aa'}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
		)
}
