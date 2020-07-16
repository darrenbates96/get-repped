import React, { useState, useContext, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground,
    AsyncStorage,
} from "react-native";
import * as Font from "expo-font";
import firebase from "../firebase";
import authContext from "../context/authentication/authContext";
import FormToggle from "../components/FormToggle";
import { EvilIcons } from "@expo/vector-icons";

const Landing = ({ navigation }) => {
    // State for loading fonts and showing the
    // Log In form
    const [fontLoading, setFontLoading] = useState(true);
    const [toggle, setToggle] = useState("login");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Set up context to be used whilst user attempts login
    const AuthContext = useContext(authContext);
    const { attemptingLogin, authSuccess } = AuthContext;

    // Header underline styling helper
    const headerStyle =
        toggle === "login"
            ? styles.header_underline
            : styles.header_underline_signup;

    // ComponentDidMount
    useEffect(() => {
        // Function to check if user has previously logged in
        // on device
        const getUsername = async () => {
            const user = await AsyncStorage.getItem("calculate_username");
            if (user) {
                setUsername(user);
            }
        };
        getUsername();
        const getPassword = async () => {
            const pass = await AsyncStorage.getItem("calculate_password");
            if (pass) {
                setPassword(pass);
            }
        };
        getPassword();
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

    // This function will log the previous user in to the
    // app automatically
    const automaticLogin = async () => {
        // Instantiate usable firebase variable
        const auth = firebase.auth();
        // Authenticate user
        try {
            await auth.signInWithEmailAndPassword(username, password);
        } catch (error) {
            console.log(error);
        }
        // Check if the user was signed in successfully
        auth.onAuthStateChanged((user) => {
            if (user) {
                // This means user has successfully been authenticated
                // Push uid to context
                authSuccess(user.uid);
                navigation.navigate("Main");
            }
        });
    };

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
            if (password) {
                automaticLogin();
                return <ActivityIndicator size='large' color='white' />;
            } else {
                return (
                    <View style={styles.view_container}>
                        <View style={styles.header_container}>
                            <Text style={styles.header}>Calculate.</Text>
                            <View style={headerStyle} />
                        </View>
                        <View style={styles.bottom_container}>
                            <FormToggle show={toggle} />
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
                {attemptingLogin ? (
                    <ActivityIndicator size='large' color='white' />
                ) : (
                    renderHelper()
                )}
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
        fontSize: 35,
        letterSpacing: 2,
        color: "white",
        marginBottom: 10,
    },
    header_underline: {
        width: "50%",
        borderBottomWidth: 2,
        borderBottomColor: "#eb5a00",
        marginTop: 40,
        marginBottom: 20,
        alignSelf: "flex-start",
    },
    header_underline_signup: {
        width: "50%",
        borderBottomWidth: 2,
        borderBottomColor: "#eb5a00",
        marginTop: 30,
        marginBottom: 20,
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
