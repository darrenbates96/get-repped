import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ActivityIndicator,
} from "react-native";
import * as Font from "expo-font";
import { useSpring, animated } from "react-spring/native";
import Login from "../components/Login";

const AnimatedText = animated(Text);

const Landing = () => {
    // State for loading fonts and showing the
    // Log In form
    const [fontLoading, setFontLoading] = useState(true);
    const [textEnlarge, setTextEnlarge] = useState(false);
    const [showForm, setShowForm] = useState(null);

    // Spring props
    const value = useSpring({
        config: { duration: 5000 },
        from: { fontSize: 30 },
        to: { fontSize: 50 },
    });

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
            setTextEnlarge(true);
        }, 1000);
        setTimeout(() => {
            setShowForm(true);
        }, 6000);
    };

    // Render Helper... To extract logic from return statement
    const renderHelper = () => {
        if (fontLoading) {
            return <ActivityIndicator size='large' />;
        } else {
            formTimeOut();
            return (
                <View style={styles.view_container}>
                    {textEnlarge ? (
                        <AnimatedText
                            style={{ ...value, ...styles.headerBigger }}
                        >
                            GetRepped.
                        </AnimatedText>
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
        backgroundColor: "#000000",
    },
    view_container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
    },
    header: {
        fontFamily: "Montserrat",
        fontSize: 30,
        color: "#f5eded",
        marginBottom: 0,
    },
    headerBigger: {
        fontFamily: "Montserrat",
        color: "#f5eded",
        marginBottom: 10,
    },
});
