import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/styles";

export function Company() {
    return (
        <View style={styles.container} >
            <ScrollView>
                <View style={{paddingVertical: 20, alignItems: 'center'}}>
                    <Text style={styles.title} >
                        HORARIO DE ATENCIÓN
                    </Text>
                    <Text style={[styles.subTitle, {paddingTop: 10}]}>
                        8:00 a.m - 6:00 p.m.
                    </Text>
                    <Text>
                        De lunes a sabado.
                    </Text>
                </View>
                <View style={{paddingVertical: 20, alignItems: 'center'}}>
                    <Text style={styles.title} >
                        MISIÓN
                    </Text>
                    <Text style={{paddingTop: 10}}>
                        RestauPonte busca ofrecer platos de comida de gran calidad y que sean accesible a toda la población colombiana, además de ofrecer una excelente atención al cliente, junto a una página web que busca satisfacer las necesidades principales de los consumidores.
                    </Text>
                </View>
                <View style={{paddingVertical: 20, alignItems: 'center'}}>
                    <Text style={styles.title} >
                        VISIÓN
                    </Text>
                    <Text style={{paddingTop: 10}}>
                        RestauPonte busca expandir y darse a conocer anivel nacional en el año 2027, abriendo diferentes sucursales en toda colombia. Para el año 2029, RestauPonte espera abrir su primera sucursal fuera de Colombia, para dar a conocer a nivel nacional el sabor de la gastronomia colombiana.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}