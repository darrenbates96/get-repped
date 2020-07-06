import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Gym = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Gym</Text>
        </View>
    );
};

export default Gym;

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flex: 1,
    },
});
