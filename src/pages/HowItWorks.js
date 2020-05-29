import React from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const HowItWorks = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={true} style={styles.container}>
            <Text>How It Works</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("getstarted")}
                style={{ alignSelf: "flex-end", marginRight: 30 }}
            >
                <EvilIcons name='arrow-right' size={60} color='black' />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default HowItWorks;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
