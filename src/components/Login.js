import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useSpring, animated } from "react-spring/native";

const AnimatedView = animated(View);

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
    const value = useSpring({
        config: { duration: 500 },
        from: { opacity: "0" },
        to: { opacity: "1" },
    });

    return (
        <AnimatedView style={{ ...value, ...styles.container }}>
            {submitError && username === "" ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Username'
                    placeholderTextColor='#a68b8b'
                    onChangeText={(e) => setUsername(e)}
                />
            ) : (
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor='#a68b8b'
                    onChangeText={(e) => setUsername(e)}
                />
            )}
            {submitError && password === "" ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Password'
                    placeholderTextColor='#a68b8b'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            ) : (
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#a68b8b'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={() => submitHelper()}
            >
                <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        </AnimatedView>
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
        backgroundColor: "#3e3636",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#a68b8b",
    },
    inputError: {
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "#3e3636",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#a68b8b",
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
        backgroundColor: "#d72323",
        marginTop: 10,
    },
    buttonText: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
        fontWeight: "bold",
        color: "#f5eded",
    },
});
