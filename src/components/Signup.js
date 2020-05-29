import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useSpring, animated } from "react-spring/native";
import PrimaryButton from "./PrimaryButton";

const AnimatedInput = animated(TextInput);

const Signup = () => {
    // State for TextInputs
    const [name, setName] = useState("");

    // Spring props
    const springName = useSpring({
        config: { duration: 200 },
        from: { opacity: 0, height: 20, width: "70%" },
        to: { opacity: 1, height: 70, width: "100%" },
    });

    return (
        <View style={styles.container}>
            <AnimatedInput
                style={{ ...springName, ...styles.input }}
                onChangeText={(e) => setName(e)}
                value={name}
                placeholder='Name'
                placeholderTextColor='#bdbdbd'
            />
            <PrimaryButton onTap={() => console.log("Signup Tapped")} />
        </View>
    );
};

export default Signup;

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
