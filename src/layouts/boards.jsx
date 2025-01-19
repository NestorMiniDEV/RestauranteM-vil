import { View, Text, Image } from "react-native";
import { styles } from "../styles/styles";
import diagram from '../files/images/diagramRestau.png'

export function Boards() {
	return (
		<View style={styles.container} >
			<View style={{paddingVertical: 20}} >
				<Text style={[styles.subTitle, {textAlign: 'center'}]}>MESAS VACÍAS: X</Text>
				<Text style={[styles.subTitle, {textAlign: 'center'}]}>MESAS OCUPADAS: X</Text>
			</View>
			<View style={{flexDirection: 'row', paddingVertical: 10}} >
				<View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
					<Text>
						Ocupado:
					</Text>
					<View style={{backgroundColor: 'red', width: 20, height: 20, borderRadius: 100}}/>
				</View>
				<View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
					<Text>
						Vacío:
					</Text>
					<View style={{backgroundColor: 'green', width: 20, height: 20, borderRadius: 100}} />
				</View>
			</View>
			<Image
			source={diagram}
			style={{
				width: 360,
				height: 255,
				alignSelf: 'center'
			}}
			/>
		</View>
		)
}