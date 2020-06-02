import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CheeseChoice = () => {
    return (
        <View style={styles.choice_container}>
            <Text style={styles.choice_text}>
                Want to pair those wines with some cheese?
            </Text>
            <View style={styles.cheese_toggle_container}>
                <TouchableOpacity style={styles.cheese_choice}>
                    <Text style={styles.cheese_choice_text}>Heck yeah!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cheese_choice}>
                    <Text style={styles.cheese_choice_text}>No Thanks...</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CheeseChoice;

const styles = StyleSheet.create({
    choice_container: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    choice_text: {
        fontFamily: "Montserrat",
        fontSize: 17,
        marginBottom: 15,
    },
    cheese_toggle_container: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
    },
    cheese_choice: {
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
    },
    cheese_choice_text: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
    },
});
