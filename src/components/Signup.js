import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import PrimaryButton from "./PrimaryButton";

const AnimatedInput = animated(TextInput);

const Signup = () => {
    // State for TextInputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Spring props
    const springInput = useSpring({
        config: config.stiff,
        from: { opacity: 0, height: 20, width: "70%" },
        to: { opacity: 1, height: 70, width: "100%" },
    });

    return (
        <View style={styles.container}>
            <AnimatedInput
                style={{ ...springInput, ...styles.input }}
                onChangeText={(e) => setName(e)}
                value={name}
                placeholder='Name and Surname'
                placeholderTextColor='#bdbdbd'
            />
            <AnimatedInput
                style={{ ...springInput, ...styles.input }}
                onChangeText={(e) => setEmail(e)}
                value={email}
                placeholder='Email'
                placeholderTextColor='#bdbdbd'
            />
            <AnimatedInput
                style={{ ...springInput, ...styles.input }}
                onChangeText={(e) => setPassword(e)}
                value={password}
                placeholder='Password'
                placeholderTextColor='#bdbdbd'
            />
            <PrimaryButton />
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.15)",
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
