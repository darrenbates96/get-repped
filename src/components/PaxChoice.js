import React, { useState } from "react";
import { StyleSheet, Text, View, Slider, TouchableOpacity } from "react-native";
import { useSpring, animated, config } from "react-spring/native";

const AnimatedView = animated(View);

const PaxChoice = ({ showingSetter, paxSetter }) => {
    const [pax, setPax] = useState(4);
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
                How big is the wolf pack today?
            </Text>
            <Slider
                style={styles.pax_slider}
                value={pax}
                onValueChange={(e) => setPax(e)}
                step={1}
                minimumValue={2}
                maximumValue={6}
                minimumTrackTintColor='black'
                maximumTrackTintColor='grey'
            />
            <View style={styles.labels_container}>
                <Text style={styles.label_text}>2</Text>
                <Text style={styles.label_text}>6</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    paxSetter(pax);
                    setAnimateIn(false);
                    setTimeout(() => {
                        showingSetter();
                    }, 300);
                }}
            >
                <Text style={styles.button_text}>We're a pack of {pax}</Text>
            </TouchableOpacity>
        </AnimatedView>
    );
};

export default PaxChoice;

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
        marginBottom: 35,
    },
    pax_slider: {
        width: "100%",
        color: "black",
        marginBottom: 35,
    },
    labels_container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    label_text: {
        fontFamily: "Montserrat",
        fontSize: 17,
    },
    button: {
        height: 90,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
    },
    button_text: {
        fontFamily: "MontserratMedium",
        fontSize: 20,
    },
});
