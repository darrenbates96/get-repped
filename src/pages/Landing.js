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
    const [fontLoading, setFontLoading] = useState(true);
    const [showForm, setShowForm] = useState(null);

    // Function to load the custom Font
    const loadFont = async () => {
        await Font.loadAsync({
            Montserrat: require("../../assets/fonts/Montserrat-Regular.ttf"),
            MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
        });
        setFontLoading(false);
    };

    // ComponentDidMount
    useEffect(() => {
        loadFont();
    }, []);

    // A timeout before showing the form
    const formTimeOut = () => {
        // In reality this should actually:
        // 1. Check user phone for credentials
        // 2. Attempt to sign in with those credentials
        // 3. Or if there is no credentials show the form
        setTimeout(() => {
            setShowForm(true);
        }, 5000);
    };

    // Render Helper... To extract logic from return statement
    const renderHelper = () => {
        if (fontLoading) {
            return <ActivityIndicator size='large' />;
        } else {
            formTimeOut();
            return (
                <View style={styles.view_container}>
                    {showForm ? (
                        <Text style={styles.headerBigger}>GetRepped.</Text>
                    ) : (
                        <Text style={styles.header}>GetRepped.</Text>
                    )}
                    {!showForm ? (
                        <ActivityIndicator
                            size='large'
                            style={{ marginTop: 15 }}
                        />
                    ) : (
                        <Login />
                    )}
                </View>
            );
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
        backgroundColor: "black",
    },
    view_container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    header: {
        fontFamily: "Montserrat",
        fontSize: 30,
        color: "white",
        marginBottom: 0,
    },
    headerBigger: {
        fontFamily: "Montserrat",
        fontSize: 50,
        color: "white",
        marginBottom: 0,
    },
});
