import React, { useState } from "react";
import { StyleSheet, View, TextInput, ActivityIndicator } from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import { withNavigation } from "react-navigation";
import firebase from "../firebase";
import PrimaryButton from "./PrimaryButton";

const AnimatedInput = animated(TextInput);

const Login = ({ navigation }) => {
    // State for inputs
    const [username, setUsername] = useState("darrenbates100@gmail.com");
    const [password, setPassword] = useState("c@lcUL8_6969");
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    // State for UI/SignIn
    const [signingIn, setSigningIn] = useState(false);
    const [signInError, setSignInError] = useState("");

    // Return inputs to normal styling depending in states when
    // re-rendered
    if (userError && username !== "") {
        setUserError(false);
    }
    if (passwordError && password !== "") {
        setPasswordError(false);
    }

    // Decided on input styling based on userError & passwordError
    const userStyle = userError ? styles.inputError : styles.input;
    const passwordStyle = passwordError ? styles.inputError : styles.input;

    // Spring props
    const springInput = useSpring({
        config: config.stiff,
        from: { opacity: 0, height: 20, width: "70%" },
        to: { opacity: 1, height: 70, width: "100%" },
    });

    // Submit Helper
    const submitHelper = async () => {
        if (username && password) {
            setSigningIn(true);
            // Instantiate usable firebase variables
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
                    // Push UID to context over here
                    navigation.navigate("Main");
                } else {
                    setSigningIn(false);
                    setSignInError("Oops, something went wrong...");
                }
            });
        } else {
            if (username === "" && password === "") {
                setUserError(true);
                setPasswordError(true);
            } else if (username === "" && password !== "") {
                setUserError(true);
            } else if (password === "" && username !== "") {
                setPasswordError(true);
            }
        }
    };

    // Input rendering helper
    const inputRender = (name) => {
        if (name === "user") {
            return (
                <AnimatedInput
                    style={{ ...springInput, ...userStyle }}
                    value={username}
                    placeholder='Username'
                    placeholderTextColor='#bdbdbd'
                    onChangeText={(e) => setUsername(e)}
                />
            );
        } else if (name === "pass") {
            return (
                <AnimatedInput
                    style={{ ...springInput, ...passwordStyle }}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor='#bdbdbd'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            );
        }
    };

    const renderHelper = () => {
        if (signingIn) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size='large' color='white' />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    {inputRender("user")}
                    {inputRender("pass")}
                    <PrimaryButton onTap={submitHelper} />
                </View>
            );
        }
    };

    return renderHelper();
};

export default withNavigation(Login);

const styles = StyleSheet.create({
    container: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: "white",
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#bdbdbd",
    },
    inputError: {
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: "white",
        marginTop: "8%",
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#bdbdbd",
    },
});
