import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import UserProfile from "../UserProfile";
import Home from "../Home";

const RootNavigator = () => {
	const { Navigator, Screen } = createStackNavigator();
	return (
		<>
			<Navigator
				initialRouteName="Home"
				screenOptions={{
					headerTintColor: "white",
					headerStyle: {
						backgroundColor: "#000",
					},
				}}
			>
				<Screen
					name="Home"
					component={Home}
					options={{
						headerTintColor: "black",
						headerStyle: {
							backgroundColor: "#A9BAD6",
						},
					}}
				/>
				<Screen
					name="UserProfile"
					component={UserProfile}
					options={{
						headerTintColor: "black",
						headerStyle: {
							backgroundColor: "#A9BAD6",
						},
					}}
				/>
			</Navigator>
		</>
	);
};

export default RootNavigator;
