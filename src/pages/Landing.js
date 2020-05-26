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
        // In reality this should actually:
        // 1. Check user phone for credentials
        // 2. Attempt to sign in with those credentials
        // 3. Or if there is no credentials show the form
        setTimeout(() => {
            setShowForm(true);
        }, 2000);
    };

    // Spring props
    const springProps = useSpring({
        config: { duration: 1500 },
        from: { letterSpacing: 0, opacity: 0 },
        to: { letterSpacing: 3, opacity: 1 },
    });

    // Render Helper... To extract logic from return statement
    const renderHelper = () => {
        if (fontLoading) {
            return <ActivityIndicator size='large' />;
        } else {
            formTimeOut();
            return (
                <View style={styles.view_container}>
                    <AnimatedText style={{ ...springProps, ...styles.header }}>
                        GetRepped.
                    </AnimatedText>
                    {showForm ? <Login /> : null}
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
        fontSize: 48,
        color: "#f5eded",
        marginBottom: 0,
    },
});
