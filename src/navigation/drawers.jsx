import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import { Home, Menu, Boards, News } from '../index';
import FontAwesome from 'react-native-vector-icons/FontAwesome6'
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Icon } from "../components/svg/icon";
import { TitleLogo } from "../components/svg/titleLogo";
import { styles } from "../styles/styles";
import { Signin } from "../layouts/validation/signin";
import { Register } from "../layouts/validation/register";
import { Company } from "../layouts/company";

const Drawer = createDrawerNavigator();

export function Drawers() {
	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: '#470458',
					width: 230,
					paddingHorizontal: 15,
				},
				drawerActiveBackgroundColor: '#e0a1f088',
				drawerLabelStyle: {
					color: 'white',
				},
				headerStyle: {
					backgroundColor: '#470458',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				headerTitleAlign: 'center',
			}}
			drawerContent={
				(props) => {
					return (
							<SafeAreaView>
								<ScrollView>

									<View
										style={{
											height: 200,
											width: '100%',
											alignItems: 'center',
											paddingTop: 40,
											marginTop: 50,
											marginBottom: 20,
											backgroundColor: '#e0a1f055',
											borderRadius: 100,
										}}
									>
										<Icon />
										<TitleLogo />
										<Text
											style={[styles.subTitleWhite, {fontStyle: 'italic'}]}
										>
											Cra 21a #81-91
										</Text>

									</View>
									<DrawerItemList {...props} />
								</ScrollView>
							</SafeAreaView>
						)
				}
			}


		>
			<Drawer.Screen 
 			name="Inicio"
 			component={Home}
 			options={{
 				drawerIcon: () => (
	 				<FontAwesome name='house' style={{ color: 'white', fontSize: 20 }} />
 				),
 			}}
 		/>
			<Drawer.Screen 
 			name="Menu"
 			component={Menu}
 			options={{
 				drawerIcon: () => (
 					<FontAwesome name="utensils" style={{ color: 'white', fontSize: 20}} />
 				),
 			}}
 		/>
			<Drawer.Screen 
 			name="Mesas"
 			component={Boards}
 			options={{
 				drawerIcon: () => (
 					<FontAwesome name="chair" style={{ color: 'white', fontSize: 20}} />
 				), 				
 			}}
 		/>
			<Drawer.Screen 
 			name="Novedades"
 			component={News}
 			options={{
 				drawerIcon: () => (
 					<FontAwesome name="bell" style={{ color: 'white', fontSize: 20}} />
 				),
 			}}
 		/>

			<Drawer.Screen 
			name="Nosotros"
			component={Company}
			options={{
				drawerIcon: () => (
					<FontAwesome name="user-tie" style={{ color: 'white', fontSize: 20}} />
				)
			}}
		/>

			<Drawer.Screen 
			name="Iniciar Sesión"
			component={Signin}
			options={{
				drawerIcon: () => (
					<FontAwesome name="circle-user" style={{ color: 'white', fontSize: 20}} />
				),
				drawerItemStyle: {
					marginTop: '110%'
				},
			}}
		/>

			<Drawer.Screen 
			name="Registrarse"	
			component={Register}
			options={{
				drawerIcon: () => (
					<FontAwesome name="users" style={{ color: 'white', fontSize: 20}} />
				),
			}}
		/>
		</Drawer.Navigator>
		);
};