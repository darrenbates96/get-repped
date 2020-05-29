import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useSpring, animated } from "react-spring/native";
import { withNavigation } from "react-navigation";
import PrimaryButton from "./PrimaryButton";

const AnimatedUserInput = animated(TextInput);
const AnimatedPasswordInput = animated(TextInput);

const Login = ({ navigation }) => {
    // State for inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Spring props
    const springUsername = useSpring({
        config: { duration: 200 },
        from: { opacity: 0, height: 20, width: "70%" },
        to: { opacity: 1, height: 70, width: "100%" },
    });
    const springPassword = useSpring({
        config: { duration: 300 },
        from: { opacity: 0, height: 50, width: "85%" },
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
                <AnimatedUserInput
                    style={{ ...springUsername, ...styles.input }}
                    value={username}
                    placeholder='Username'
                    placeholderTextColor='#bdbdbd'
                    onChangeText={(e) => setUsername(e)}
                />
            );
        } else if (name === "pass") {
            return (
                <AnimatedPasswordInput
                    style={{ ...springPassword, ...styles.input }}
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
        height: 285,
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
});
