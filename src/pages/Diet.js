import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Diet = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Diet</Text>
        </View>
    );
};

export default Diet;

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flex: 1,
    },
});
