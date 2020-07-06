import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import FormToggle from "../components/FormToggle";
import { EvilIcons } from "@expo/vector-icons";

const Landing = () => {
    // State for loading fonts and showing the
    // Log In form
    const [fontLoading, setFontLoading] = useState(true);
    const [showFormToggle, setShowFormToggle] = useState(null);
    const [toggle, setToggle] = useState("login");

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
            setShowFormToggle(true);
        }, 3000);
    };

    // Header underline styling helper
    const headerStyle =
        toggle === "login"
            ? styles.header_underline
            : styles.header_underline_signup;

    // Helper to decide which toggle icon and text to render
    const renderToggleIcon = () => {
        if (toggle === "login") {
            return (
                <TouchableOpacity
                    style={styles.icon_container}
                    onPress={() => setToggle("signup")}
                >
                    <Text style={styles.icon_text}>Sign Up</Text>
                    <EvilIcons name='arrow-right' size={60} color='#eb5a00' />
                </TouchableOpacity>
            );
        } else if (toggle === "signup") {
            return (
                <TouchableOpacity
                    style={styles.icon_container_left}
                    onPress={() => setToggle("login")}
                >
                    <EvilIcons name='arrow-left' size={60} color='#eb5a00' />
                    <Text style={styles.icon_text}>Log In</Text>
                </TouchableOpacity>
            );
        }
    };

    // Render Helper for the entire screen UI... To extract all
    // logic from return statement
    const renderHelper = () => {
        if (fontLoading) {
            return <View style={styles.view_container} />;
        } else {
            formTimeOut();
            if (!showFormToggle) {
                return (
                    <View style={styles.view_container}>
                        <Text style={styles.header}>GetRepped.</Text>
                        <ActivityIndicator size='large' color='#2d4059' />
                    </View>
                );
            } else {
                return (
                    <View style={styles.view_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.header}>GetRepped.</Text>
                            <View style={headerStyle} />
                        </View>
                        <View style={styles.bottom_container}>
                            {showFormToggle ? (
                                <FormToggle show={toggle} />
                            ) : null}
                            {renderToggleIcon()}
                        </View>
                    </View>
                );
            }
        }
    };

    return (
        <ImageBackground
            style={styles.backImageStyle}
            source={require("../assets/AccountsBackground.jpg")}
        >
            <SafeAreaView forceInset={true} style={styles.container}>
                {renderHelper()}
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Landing;

const styles = StyleSheet.create({
    backImageStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    view_container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    bottom_container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    header_container: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    header: {
        fontFamily: "MontserratMedium",
        fontSize: 48,
        letterSpacing: 2,
        color: "white",
        marginBottom: 10,
    },
    header_underline: {
        width: 60,
        borderBottomWidth: 2,
        borderBottomColor: "#eb5a00",
        marginTop: 0,
        marginBottom: 35,
        alignSelf: "flex-start",
    },
    header_underline_signup: {
        width: 60,
        borderBottomWidth: 2,
        borderBottomColor: "#eb5a00",
        marginTop: 0,
        marginBottom: 35,
        alignSelf: "flex-end",
    },
    icon_container: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 25,
    },
    icon_container_left: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 25,
    },
    icon_text: {
        fontFamily: "MontserratMedium",
        fontSize: 16,
        color: "white",
    },
});
