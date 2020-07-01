import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import { withNavigation } from "react-navigation";
import PrimaryButton from "./PrimaryButton";

const AnimatedInput = animated(TextInput);

const Login = ({ navigation }) => {
    // State for inputs
    const [username, setUsername] = useState("Darren");
    const [password, setPassword] = useState("420");
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

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
    const submitHelper = () => {
        if (username && password) {
            if (username === "Darren" && password === "420") {
                navigation.navigate("Main");
            } else {
                console.log("Incorrect Credentials");
            }
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

    return (
        <View style={styles.container}>
            {inputRender("user")}
            {inputRender("pass")}
            <PrimaryButton onTap={submitHelper} />
        </View>
    );
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
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#bdbdbd",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    inputError: {
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        backgroundColor: "white",
        marginVertical: 10,
        fontFamily: "Montserrat",
        fontSize: 16,
        paddingLeft: 15,
        color: "#bdbdbd",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
});
