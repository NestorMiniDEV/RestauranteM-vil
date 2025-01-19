import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/styles";
import { InputMenu } from "../components/inputsMenu";
import { BandejapaisaContainer, AjiacoContainer, LuladaContainer, SancochoContainer } from "../components/foodContainerMenu";
import { stylesMenu } from "../styles/stylesMenu";

export function Menu() {
	return (
		<View style={styles.container} >
			<ScrollView>
				<Text style={[styles.subTitle, {marginTop: 10}]} >BUSCAR PLATO:</Text>
				<InputMenu
				placeholder={'Ingresa el nombre del plato'}
				/>
				<View style={styles.flexContainer} >
					<View style={[stylesMenu.typeFoodSide]} >
						<Text>TIPO DE PLATO:</Text>
						<InputMenu
						placeholder={'Carta / Corriente / Especial'}
						/>
					</View>
					<View style={stylesMenu.drinksSide} >
						<Text>BEBIDAS:</Text>
						<InputMenu
						placeholder={'Jugos Naturales / Gaseosas'}
						/>
					</View>
				</View>

				<View style={[styles.lightContainer, {paddingHorizontal: 15, borderRadius: 11}]}>
					<BandejapaisaContainer />
					<AjiacoContainer />
					<SancochoContainer />
					<LuladaContainer />
				</View>
			</ScrollView>
		</View>
		)
}
