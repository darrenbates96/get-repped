import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSpring, animated, config } from "react-spring/native";

const AnimatedView = animated(View);

const CheeseChoice = ({ cheeseSetter, navHelper }) => {
    const [animateIn, setAnimateIn] = useState(true);
    const s_from = animateIn
        ? { marginLeft: 250, opacity: 0 }
        : { marginLeft: 0, opacity: 1 };
    const s_to = animateIn
        ? { marginLeft: 0, opacity: 1 }
        : { marginLeft: -250, opacity: 0 };
    const springView = useSpring({
        config: config.default,
        from: s_from,
        to: s_to,
    });
    return (
        <AnimatedView style={{ ...springView, ...styles.choice_container }}>
            <Text style={styles.choice_text}>
                Want to pair those wines with some cheese?
            </Text>
            <View style={styles.cheese_toggle_container}>
                <TouchableOpacity
                    style={styles.cheese_choice}
                    onPress={() => {
                        cheeseSetter(true);
                        setAnimateIn(false);
                        setTimeout(() => {
                            navHelper();
                        }, 300);
                    }}
                >
                    <Text style={styles.cheese_choice_text}>Heck yeah!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cheese_choice}
                    onPress={() => {
                        cheeseSetter(false);
                        setAnimateIn(false);
                        setTimeout(() => {
                            navHelper();
                        }, 300);
                    }}
                >
                    <Text style={styles.cheese_choice_text}>No Thanks...</Text>
                </TouchableOpacity>
            </View>
        </AnimatedView>
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
        justifyContent: "space-between",
        alignItems: "center",
    },
    cheese_choice: {
        width: "48%",
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
