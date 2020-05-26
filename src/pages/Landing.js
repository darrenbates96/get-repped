import React, { useState, useEffect, Fragment } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import * as Font from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import Login from "../components/Login";

const Landing = () => {
    // State for loading fonts and showing the
    // Log In form
    const [fontLoading, setFontLoading] = useState(true);
    const [showForm, setShowForm] = useState(null);

    // ComponentDidMount
    useEffect(() => {
        // Function to load the custom Font
        const loadFont = async () => {
            await Font.loadAsync({
                Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
                MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
            });
            setFontLoading(false);
        };
        loadFont();
    }, []);

    // A timeout before showing the form
    const formTimeOut = () => {
        setTimeout(() => {
            setShowForm(true);
        }, 2000);
    };

    // Render Helper... To extract logic from return statement
    const renderHelper = () => {
        if (fontLoading) {
            return <View style={styles.view_container} />;
        } else {
            formTimeOut();
            if (!showForm) {
                return (
                    <View style={styles.view_container}>
                        <FontAwesome5 name='weight' size={70} color='#2d4059' />
                    </View>
                );
            } else {
                return (
                    <View style={styles.view_container}>
                        <Text style={styles.header}>GetRepped.</Text>
                        {showForm ? <Login /> : null}
                    </View>
                );
            }
        }
    };

    return (
        <SafeAreaView forceInset={true} style={styles.container}>
            {renderHelper()}
        </SafeAreaView>
    );
};

export default Landing;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff4e3",
    },
    view_container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff4e3",
    },
    header: {
        fontFamily: "MontserratMedium",
        fontSize: 48,
        color: "#2d4059",
        marginBottom: 10,
    },
});
