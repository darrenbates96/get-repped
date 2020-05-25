import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";

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

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            {submitError && username === "" ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Username'
                    placeholderTextColor='#787878'
                    onChangeText={(e) => setUsername(e)}
                />
            ) : (
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor='#787878'
                    onChangeText={(e) => setUsername(e)}
                />
            )}
            {submitError && password === "" ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Password'
                    placeholderTextColor='#787878'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            ) : (
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    placeholderTextColor='#787878'
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
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
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
        borderBottomColor: "#ff8000",
        backgroundColor: "#212121",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#787878",
    },
    inputError: {
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        backgroundColor: "#212121",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#787878",
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
        backgroundColor: "#ff8000",
        marginTop: 10,
    },
    buttonText: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});
