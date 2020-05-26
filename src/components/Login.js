import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useSpring, animated } from "react-spring/native";

const AnimatedUserInput = animated(TextInput);
const AnimatedPasswordInput = animated(TextInput);

const Login = () => {
    // State for inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitError, setSubmitError] = useState(false);

    // Make sure error goes away if both fields are filled
    if (submitError && username !== "" && password !== "") {
        setSubmitError(false);
    }

    // Submit Helper
    const submitHelper = () => {
        if (
            username === "" ||
            password === "" ||
            (username === "" && password === "")
        ) {
            setSubmitError(true);
        } else {
            if (username === "Darren" && password === "420") {
                console.log("Nice");
            } else {
                console.log("Incorrect Credentials");
            }
        }
    };

    // Spring props
    const springUsername = useSpring({
        config: { duration: 600 },
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    const springPassword = useSpring({
        config: { duration: 1100 },
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    return (
        <View style={styles.container}>
            {submitError && username === "" ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Username'
                    placeholderTextColor='#ffa45c'
                    onChangeText={(e) => setUsername(e)}
                />
            ) : (
                <AnimatedUserInput
                    style={{ ...springUsername, ...styles.input }}
                    placeholder='Username'
                    placeholderTextColor='#ffa45c'
                    onChangeText={(e) => setUsername(e)}
                />
            )}
            {submitError && password === "" ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Password'
                    placeholderTextColor='#ffa45c'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            ) : (
                <AnimatedPasswordInput
                    style={{ ...springPassword, ...styles.input }}
                    placeholder='Password'
                    placeholderTextColor='#ffa45c'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            )}
            {/* MAKE BUTTOn SEPARATE COMPONENT FOR SPRING TO WORK */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => submitHelper()}
            >
                <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        height: 285,
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    header: {
        fontFamily: "Montserrat",
        fontSize: 20,
        color: "black",
    },
    input: {
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ffa45c",
        backgroundColor: "#fce5c2",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#f5bfa4",
    },
    inputError: {
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "#fce5c2",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#f5bfa4",
    },
    button: {
        height: 70,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        color: "white",
        backgroundColor: "#2d4059",
        marginTop: 10,
    },
    buttonText: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
        fontWeight: "bold",
        color: "#f5eded",
    },
});
