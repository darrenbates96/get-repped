import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSpring, animated, config } from "react-spring/native";

const AnimatedView = animated(View);

const WineChoice = ({ showingSetter, wineSetter }) => {
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
            <View style={styles.header_container}>
                <Text style={styles.header}>Lets Get Started!</Text>
                <View style={styles.header_underline} />
            </View>
            <Text style={styles.choice_text}>
                What are you in the mood for?
            </Text>
            <TouchableOpacity
                style={styles.wine_choice}
                onPress={() => {
                    wineSetter("Red");
                    setAnimateIn(false);
                    setTimeout(() => {
                        showingSetter();
                    }, 300);
                }}
            >
                <Text style={styles.wine_choice_text}>Red</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.wine_choice}
                onPress={() => {
                    wineSetter("White");
                    setAnimateIn(false);
                    setTimeout(() => {
                        showingSetter();
                    }, 300);
                }}
            >
                <Text style={styles.wine_choice_text}>White</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.wine_choice}
                onPress={() => {
                    wineSetter("Both");
                    setAnimateIn(false);
                    setTimeout(() => {
                        showingSetter();
                    }, 300);
                }}
            >
                <Text style={styles.wine_choice_text}>
                    A Little Bit of Both
                </Text>
            </TouchableOpacity>
        </AnimatedView>
    );
};

export default WineChoice;

const styles = StyleSheet.create({
    choice_container: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    header_container: {
        width: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    header: {
        fontFamily: "MontserratMedium",
        fontSize: 35,
        marginTop: 30,
    },
    header_underline: {
        width: "25%",
        borderBottomWidth: 4,
        borderBottomColor: "black",
        marginVertical: 35,
    },
    choice_text: {
        fontFamily: "Montserrat",
        fontSize: 17,
        marginBottom: 15,
    },
    wine_choice: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        marginVertical: 7,
    },
    wine_choice_text: {
        fontFamily: "MontserratMedium",
        fontSize: 25,
    },
});
