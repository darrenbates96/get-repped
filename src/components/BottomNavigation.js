import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withNavigation } from "react-navigation";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomNavigation = ({ navigation }) => {
    return (
        <View style={styles.navContainer}>
            <View style={styles.menuItemContainer}>
                <Entypo name='home' size={40} color={"white"} />
                <Text style={styles.menuItemText}>Dash</Text>
            </View>
            <View style={styles.menuItemContainer}>
                <FontAwesome5
                    name='dumbbell'
                    size={36}
                    color={"white"}
                    style={{ marginBottom: 3 }}
                />
                <Text style={styles.menuItemTextGym}>Gym</Text>
            </View>
            <View style={styles.menuItemContainer}>
                <MaterialCommunityIcons
                    name='food-fork-drink'
                    size={44}
                    color={"white"}
                />
                <Text style={styles.menuItemText}>Diet</Text>
            </View>
            <View style={styles.menuItemContainer}>
                <Entypo
                    name='menu'
                    size={50}
                    color={"white"}
                    style={{ marginBottom: -10 }}
                />
                <Text style={styles.menuItemText}>More</Text>
            </View>
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
