import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSpring, animated } from "react-spring/native";

const AnimatedButton = animated(View);

const PrimaryButton = ({ onTap }) => {
    // Spring props
    const springButton = useSpring({
        config: { duration: 350 },
        from: { opacity: 0, height: 60, width: "90%" },
        to: { opacity: 1, height: 70, width: "90%" },
    });
    return (
        <AnimatedButton style={{ ...springButton, ...styles.button }}>
            <TouchableOpacity style={styles.touchable} onPress={onTap}>
                <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        </AnimatedButton>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#f8a978",
        marginTop: 10,
        shadowColor: "black",
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    },
    touchable: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});
