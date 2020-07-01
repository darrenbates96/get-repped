import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomNavigation = ({ navigation }) => {
    // Navigation helper function
    const navHelper = (toScreen) => {
        if (toScreen !== "Dash") {
            if (toScreen === "Gym") {
                navigation.navigate("Gym");
            } else if (toScreen === "Diet") {
                navigation.navigate("Diet");
            }
        } else {
            navigation.navigate("Main");
        }
    };

    return (
        <View style={styles.navContainer}>
            <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => navHelper("Dash")}
            >
                <Entypo name='home' size={40} color={"white"} />
                <Text style={styles.menuItemText}>Dash</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => navHelper("Gym")}
            >
                <FontAwesome5
                    name='dumbbell'
                    size={36}
                    color={"white"}
                    style={{ marginBottom: 3 }}
                />
                <Text style={styles.menuItemTextGym}>Gym</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => navHelper("Diet")}
            >
                <MaterialCommunityIcons
                    name='food-fork-drink'
                    size={44}
                    color={"white"}
                />
                <Text style={styles.menuItemText}>Diet</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuItemContainer}
                onPress={() => navHelper("More")}
            >
                <Entypo
                    name='menu'
                    size={50}
                    color={"white"}
                    style={{ marginBottom: -10 }}
                />
                <Text style={styles.menuItemText}>More</Text>
            </TouchableOpacity>
        </View>
    );
};

export default withNavigation(BottomNavigation);

const styles = StyleSheet.create({
    navContainer: {
        width: "100%",
        paddingVertical: 10,
        paddingHorizontal: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f8a978",
    },
    menuItemContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    menuItemText: {
        fontSize: 14,
        fontFamily: "MontserratMedium",
        letterSpacing: 2,
        color: "white",
    },
    menuItemTextGym: {
        fontSize: 14,
        fontFamily: "MontserratMedium",
        letterSpacing: 2,
        color: "white",
        marginBottom: -5,
    },
});
