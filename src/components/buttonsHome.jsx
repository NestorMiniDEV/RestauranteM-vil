import { Pressable, Text } from "react-native";

export function CircleButton({contentText}) {
	return(
			<Pressable
					style={
						({pressed}) => [{
							backgroundColor: pressed ? "#470458" : '#8e24aa',
							padding: 10,
							justifyContent: 'center',
							marginVertical: 10,
							width: 70,
							height: 70,
							borderRadius: 100,
						}]
					}
				>
					<Text style={{color: 'white', textAlign: 'center'}} >{contentText}</Text>
				</Pressable>
		)
}