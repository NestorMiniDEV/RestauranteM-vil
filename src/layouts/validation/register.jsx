import { Button, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../../styles/styles";

export function Register() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={[styles.lightContainer, {alignItems: 'center', padding: 40, marginVertical: 35, alignSelf: 'center', borderRadius: 11}]} >
                    <Text style={styles.titleWhite} >
                        CREAR CUENTA
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
                            Nombre
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, marginBottom: 15, color: 'white', width: 200}]}
                            placeholder="Ingrese su nombre"
                            placeholderTextColor={'#aaa'}
                        />
                        <Text style={styles.textWhite}>
                            Apellido
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, marginBottom: 15, color: 'white', width: 200}]}
                            placeholder="Ingrese su apellido"
                            placeholderTextColor={'#aaa'}
                        />
                        <Text style={styles.textWhite}>
                            Fecha de nacimiento
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, marginBottom: 15, color: 'white', width: 200}]}
                            placeholder="DD-MM-AAAA"
                            placeholderTextColor={'#aaa'}
                        />
                        <Text style={styles.textWhite}>
                            Número de celular
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, marginBottom: 15, color: 'white', width: 200}]}
                            placeholder="Ingrese su número de celular"
                            placeholderTextColor={'#aaa'}
                            keyboardType="number-pad"
                        />
                        <Text style={styles.textWhite}>
                            Correo Electrónico
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, marginBottom: 15, color: 'white', width: 200}]}
                            placeholder="example@example.com"
                            placeholderTextColor={'#aaa'}
                            keyboardType="email-address"
                        />
                        <Text style={styles.textWhite}>
                            Contraseña
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, marginBottom: 15, color: 'white', width: 200}]}
                            placeholder="Cree su contraseña"
                            placeholderTextColor={'#aaa'}
                            keyboardType="visible-password"
                        />
                        <Text style={styles.textWhite}>
                            Confirmar contraseña
                        </Text>
                        <TextInput
                            style={[styles.darkContainer, {borderRadius: 11, color: 'white', width: 200}]}
                            placeholder="Ingrese nuevamente la contraseña"
                            placeholderTextColor={'#aaa'}
                            keyboardType="visible-password"
                        />
                        
                    </View>
                    <Button 
                        title="Crear cuenta"
                        color={'#8e24aa'}
                        onPress={() => {
                            alert('Usuario registrado')
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}