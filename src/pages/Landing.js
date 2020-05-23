import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { Spring, animated } from "react-spring/renderprops-native";

const AnimatedView = animated(View);

const Landing = () => {
    return (
        <SafeAreaView forceInset={true} style={styles.container}>
            <Spring
                native
                config={{ duration: 500 }}
                from={{ transform: "translateX(-100px)" }}
                to={{ transform: "translateX(0px)" }}
            >
                {(props) => (
                    <AnimatedView style={{ ...styles, ...props }}>
                        <Text style={styles.header}>GetRepped.</Text>
                    </AnimatedView>
                )}
            </Spring>
        </SafeAreaView>
    );
};

export default Landing;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    view_container: {
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    header: {
        fontFamily: "sans-serif",
        fontSize: 20,
        color: "white",
    },
});
