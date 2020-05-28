import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useSpring, animated } from "react-spring/native";
import { withNavigation } from "react-navigation";
import PrimaryButton from "./PrimaryButton";

const AnimatedUserInput = animated(TextInput);
const AnimatedPasswordInput = animated(TextInput);

const Login = () => {
    // State for inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Submit Helper
    const submitHelper = ({ navigation }) => {
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

    // Spring props
    const springUsername = useSpring({
        config: { duration: 200 },
        from: { opacity: 0, height: 0 },
        to: { opacity: 1, height: 70 },
    });
    const springPassword = useSpring({
        config: { duration: 400 },
        from: { opacity: 0, height: 0 },
        to: { opacity: 1, height: 70 },
    });

    return (
        <View style={styles.container}>
            {userError ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Username'
                    placeholderTextColor='#bdbdbd'
                    onFocus={() => setUserError(false)}
                    onChangeText={(e) => {
                        setUsername(e);
                    }}
                />
            ) : (
                <AnimatedUserInput
                    style={{ ...springUsername, ...styles.input }}
                    placeholder='Username'
                    placeholderTextColor='#bdbdbd'
                    onChangeText={(e) => setUsername(e)}
                />
            )}
            {passwordError ? (
                <TextInput
                    style={styles.inputError}
                    placeholder='Password'
                    placeholderTextColor='#bdbdbd'
                    secureTextEntry={true}
                    onFocus={() => setPasswordError(false)}
                    onChangeText={(e) => {
                        setPassword(e);
                    }}
                />
            ) : (
                <AnimatedPasswordInput
                    style={{ ...springPassword, ...styles.input }}
                    placeholder='Password'
                    placeholderTextColor='#bdbdbd'
                    secureTextEntry={true}
                    onChangeText={(e) => setPassword(e)}
                />
            )}
            <PrimaryButton onTap={submitHelper} />
        </View>
    );
};

export default withNavigation(Login);

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
        width: "100%",
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
        height: 70,
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ff7373",
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
