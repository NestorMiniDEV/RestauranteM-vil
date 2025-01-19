import { TextInput } from "react-native";
import { styles } from "../styles/styles";

export function InputMenu ({placeholder, margin}) {
	return(
		<TextInput
				placeholder={placeholder}
				style={{
					backgroundColor: '#e0a1f0',
					borderRadius: 11,
					marginVertical: 15,
					marginHorizontal: margin,
					paddingHorizontal: 15,
				}} />
		)
}