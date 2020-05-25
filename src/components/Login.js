import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
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
        height: 80,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#212121",
        marginVertical: 10,
    },
});
