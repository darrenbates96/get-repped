import React, { useState } from "react";
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
import Dashboard from "../pages/Dashboard";
import Gym from "../pages/Gym";
import Diet from "../pages/Diet";

const BottomNavigation = ({ navigation }) => {
    // State for screen toggle
    const [showing, setShowing] = useState("Dash");

    // Style for gymming page, so that background can be orange
    const mainContainerStyle =
        showing === "Gym" ? styles.gymMainContainer : styles.mainContainer;
    // Style to pull navigation container down if 'showing'
    // is set to gym. This is all in pursuit of an orange
    // background
    const navContainerStyle =
        showing === "Gym" ? styles.gymNavContainer : styles.navContainer;

    // Actual bottom navigation drawer
    const renderDrawer = () => {
        return (
            <View style={navContainerStyle}>
                <TouchableOpacity
                    style={
                        showing === "Dash"
                            ? styles.menuItemContainerSelected
                            : styles.menuItemContainer
                    }
                    onPress={() => {
                        setShowing("Dash");
                    }}
                >
                    {showing === "Dash" ? (
                        <Text style={styles.menuItemText}>Dash</Text>
                    ) : (
                        <Entypo name='home' size={25} color={"black"} />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={
                        showing === "Gym"
                            ? styles.menuItemContainerSelected
                            : styles.menuItemContainer
                    }
                    onPress={() => {
                        setShowing("Gym");
                    }}
                >
                    {showing === "Gym" ? (
                        <Text style={styles.menuItemText}>Gym</Text>
                    ) : (
                        <FontAwesome5
                            name='dumbbell'
                            size={21}
                            color={"black"}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={
                        showing === "Diet"
                            ? styles.menuItemContainerSelected
                            : styles.menuItemContainer
                    }
                    onPress={() => {
                        setShowing("Diet");
                    }}
                >
                    {showing === "Diet" ? (
                        <Text style={styles.menuItemText}>Diet</Text>
                    ) : (
                        <MaterialCommunityIcons
                            name='food-fork-drink'
                            size={25}
                            color={"black"}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={
                        showing === "More"
                            ? styles.menuItemContainerSelected
                            : styles.menuItemContainer
                    }
                    onPress={() => {
                        setShowing("More");
                    }}
                >
                    {showing === "More" ? (
                        <Text style={styles.menuItemText}>More</Text>
                    ) : (
                        <Entypo
                            name='menu'
                            size={30}
                            color={"black"}
                            style={{ marginBottom: -4 }}
                        />
                    )}
                </TouchableOpacity>
            </View>
        );
    };

    // Function that decides what screen to show depending
    // on the state of "showing"
    const screenRender = () => {
        if (showing === "Dash") {
            return <Dashboard changeScreen={(e) => setShowing(e)} />;
        } else if (showing === "Gym") {
            return <Gym />;
        } else if (showing === "Diet") {
            return <Diet />;
        } else {
            return null;
        }
    };

    return (
        <SafeAreaView forceInset={true} style={mainContainerStyle}>
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
        backgroundColor: "white",
    },
    gymMainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#eb5a00",
        borderBottomWidth: 35,
        borderBottomColor: "white",
    },
    navContainer: {
        width: "100%",
        paddingTop: 15,
        paddingBottom: 25,
        paddingHorizontal: 35,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
    },
    gymNavContainer: {
        width: "100%",
        paddingTop: 15,
        paddingBottom: 25,
        paddingHorizontal: 35,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        // Pull container down to cover orange
        marginBottom: -35,
    },
    menuItemContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    menuItemContainerSelected: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffd4ba",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    menuItemText: {
        fontSize: 12,
        fontFamily: "MontserratMedium",
        letterSpacing: 2,
        color: "#eb5a00",
    },
});
