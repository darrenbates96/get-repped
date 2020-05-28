import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
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
        }, 3000);
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
                        <Text style={styles.header}>GetRepped.</Text>
                        <ActivityIndicator size='large' color='#2d4059' />
                    </View>
                );
            } else {
                return (
                    <View style={styles.view_container}>
                        <Text style={styles.header}>GetRepped.</Text>
                        <View style={styles.header_underline} />
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
        backgroundColor: "#f2f2f2",
    },
    view_container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
    },
    header: {
        fontFamily: "MontserratMedium",
        fontSize: 48,
        letterSpacing: 2,
        color: "#4a4a4a",
        marginBottom: 10,
    },
    header_underline: {
        width: 45,
        borderBottomWidth: 5,
        borderBottomColor: "#f8a978",
        marginBottom: 10,
        marginLeft: 42,
        alignSelf: "flex-start",
    },
});
