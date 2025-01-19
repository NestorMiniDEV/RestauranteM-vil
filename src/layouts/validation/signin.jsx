import { styles } from "../../styles/styles";
import { View, Button, Text, TextInput, ScrollView } from "react-native";

export function Signin() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={[styles.lightContainer, {alignItems: 'center', padding: 40, marginTop: 35, alignSelf: 'center', borderRadius: 11}]} >
                    <Text style={styles.titleWhite} >
                        INICIAR SESIÓN
                    </Text>
                    <View style={{marginVertical: 20}}>
                        <Text style={styles.textWhite}>
                            Número de documento
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, marginBottom: 15, color: 'white', width: 200}]}
                            placeholder="Ingrese su número de documento"
                            placeholderTextColor={'#aaa'}
                            keyboardType="number-pad"
                        />
                        <Text style={styles.textWhite}>
                            Contraseña
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, color: 'white', width: 200}]}
                            placeholder="Ingrese su contraseña"
                            placeholderTextColor={'#aaa'}
                        />
                    </View>
                    <Button 
                        title="Ingresar"
                        color={'#8e24aa'}
                        onPress={() => {
                            alert('Usuario ingresado')
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}