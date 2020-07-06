import React, { useState, Fragment } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSpring, animated, config } from "react-spring/native";
import Dashboard from "../pages/Dashboard";
import Gym from "../pages/Gym";
import Diet from "../pages/Diet";

const BottomNavigation = () => {
    // State for screen toggle
    const [showing, setShowing] = useState("Dash");

    // Actual bottom navigation drawer
    const renderDrawer = () => {
        return (
            <View style={styles.navContainer}>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => {
                        setShowing("Dash");
                    }}
                >
                    <Entypo
                        name='home'
                        size={25}
                        color={showing === "Dash" ? "#eb5a00" : "white"}
                    />
                    {showing === "Dash" ? (
                        <Text style={styles.menuItemText}>Dash</Text>
                    ) : null}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => {
                        setShowing("Gym");
                    }}
                >
                    <FontAwesome5
                        name='dumbbell'
                        size={21}
                        color={showing === "Gym" ? "#eb5a00" : "white"}
                        style={{ marginBottom: 3 }}
                    />
                    {showing === "Gym" ? (
                        <Text style={styles.menuItemTextGym}>Gym</Text>
                    ) : null}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => {
                        setShowing("Diet");
                    }}
                >
                    <MaterialCommunityIcons
                        name='food-fork-drink'
                        size={25}
                        color={showing === "Diet" ? "#eb5a00" : "white"}
                    />
                    {showing === "Diet" ? (
                        <Text style={styles.menuItemText}>Diet</Text>
                    ) : null}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItemContainer}
                    onPress={() => {
                        setShowing("More");
                    }}
                >
                    <Entypo
                        name='menu'
                        size={30}
                        color={showing === "More" ? "#eb5a00" : "white"}
                        style={{ marginBottom: -4 }}
                    />
                    {showing === "More" ? (
                        <Text style={styles.menuItemText}>More</Text>
                    ) : null}
                </TouchableOpacity>
            </View>
        );
    };

    // Function that decides what screen to show depending
    // on the state of "showing"
    const screenRender = () => {
        if (showing === "Dash") {
            return <Dashboard />;
        } else if (showing === "Gym") {
            return <Gym />;
        } else if (showing === "Diet") {
            return <Diet />;
        } else {
            return null;
        }
    };

    return (
        <SafeAreaView forceInset={true} style={styles.mainContainer}>
            {screenRender()}
            {renderDrawer()}
        </SafeAreaView>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
    },
    navContainer: {
        width: "100%",
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba( 0, 0, 0, 0.5)",
    },
    menuItemContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    menuItemText: {
        fontSize: 10,
        fontFamily: "MontserratMedium",
        letterSpacing: 2,
        color: "#eb5a00",
    },
    menuItemTextGym: {
        fontSize: 10,
        fontFamily: "MontserratMedium",
        letterSpacing: 2,
        color: "#eb5a00",
        marginBottom: -5,
    },
});
