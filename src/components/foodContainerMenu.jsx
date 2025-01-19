import { View, Text, Image, Button } from "react-native";
import { styles } from "../styles/styles";
import { stylesMenu } from "../styles/stylesMenu";
import BandejaPaisa from '../files/images/food/BandejaPaisa.jpg';
import AjiacoSantafereño from '../files/images/food/AjiacoSantaferenyo.jpg';
import SancochoCostillaYPollo from '../files/images/food/SancochoCostillaYPollo.jpg';
import Lulada from '../files/images/food/Lulada.jpg';

export function BandejapaisaContainer() {
	return (
		<View style={ [styles.darkContainer, {padding: 15, marginVertical: 15, borderRadius: 5, width: 300, alignSelf: 'center'}] } >
			<View style={stylesMenu.imageSide} >
				<Image
					source={BandejaPaisa}
					style={{
						width: 100,
						height: 100,
						alignSelf: "center"
					}}
				/>
			</View>
			<View style={stylesMenu.informationSide} >
				<Text style={styles.titleWhite}>BANDEJA PAISA</Text>
				<Text style={styles.textWhite}>
					arroz blanco, frijoles rojos, carne molida, chicharrón, plátano maduro frito, huevo frito, aguacate, arepa, morcilla, chorizo
				</Text>
				<Text style={styles.textWhite}>
					Tipo de comida: Plato Especial
				</Text>
				<Text style={styles.subTitleWhite} >VALOR: $25.000</Text>
			</View>
			<Button 
				title="REALIZAR PEDIDO"
				onPress={() => (alert('Porfavor, inicia sesión'))}
				color={'#8e24aa'}
			/>
		</View>
		)
}

export function AjiacoContainer() {
	return (
		<View style={ [styles.darkContainer, {padding: 15, marginVertical: 15, borderRadius: 5, width: 300, alignSelf: 'center'}] } >
			<View style={stylesMenu.imageSide} >
				<Image
					source={AjiacoSantafereño}
					style={{
						width: 100,
						height: 100,
						alignSelf: "center"
					}}
				/>
			</View>
			<View style={stylesMenu.informationSide} >
				<Text style={styles.titleWhite}>AJIACO SANTAFEREÑO</Text>
				<Text style={styles.textWhite}>
				Pollo desmechado, papas criollas, papas sabaneras, mazorca, guascas, alcaparras, crema de leche, aguacate
				</Text>
				<Text style={styles.textWhite}>
					Tipo de comida: Plato de la carta
				</Text>
				<Text style={styles.subTitleWhite} >VALOR: $20.000</Text>
			</View>
			<Button 
				title="REALIZAR PEDIDO"
				onPress={() => (alert('Porfavor, inicia sesión'))}
				color={'#8e24aa'}
			/>
		</View>
		)
}

export function SancochoContainer() {
	return (
		<View style={ [styles.darkContainer, {padding: 15, marginVertical: 15, borderRadius: 5, width: 300, alignSelf: 'center'}] } >
			<View style={stylesMenu.imageSide} >
				<Image
					source={SancochoCostillaYPollo}
					style={{
						width: 100,
						height: 100,
						alignSelf: "center"
					}}
				/>
			</View>
			<View style={stylesMenu.informationSide} >
				<Text style={styles.titleWhite}>SANCOCHO DE COSTILLA Y POLLO</Text>
				<Text style={styles.textWhite}>
				costilla de cerdo, pollo, plátano verde, yuca, papa,mazorca, cilantro, cebolla, ajo, comino, achiote
				</Text>
				<Text style={styles.textWhite}>
					Tipo de comida: Plato de la carta
				</Text>
				<Text style={styles.subTitleWhite} >VALOR: $20.000</Text>
			</View>
			<Button 
				title="REALIZAR PEDIDO"
				onPress={() => (alert('Porfavor, inicia sesión'))}
				color={'#8e24aa'}
			/>
		</View>
		)
}

export function LuladaContainer() {
	return (
		<View style={ [styles.darkContainer, {padding: 15, marginVertical: 15, borderRadius: 5, width: 300, alignSelf: 'center'}] } >
			<View style={stylesMenu.imageSide} >
				<Image
					source={Lulada}
					style={{
						width: 100,
						height: 100,
						alignSelf: "center"
					}}
				/>
			</View>
			<View style={stylesMenu.informationSide} >
				<Text style={styles.titleWhite}>LULADA</Text>
				<Text style={styles.textWhite}>
				lulo, agua, azúcar, hielo, leche condensada
				</Text>
				<Text style={styles.textWhite}>
					Tipo de comida: Bebida natural
				</Text>
				<Text style={styles.subTitleWhite} >VALOR: $8.000</Text>
			</View>
			<Button 
				title="REALIZAR PEDIDO"
				onPress={() => (alert('Porfavor, inicia sesión'))}
				color={'#8e24aa'}
			/>
		</View>
		)
}