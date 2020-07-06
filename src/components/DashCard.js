import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSpring, animated, config } from "react-spring/native";

const AnimatedView = animated(View);

const DashCard = ({ size, title, info }) => {
    // Different card sizes depending on size passed in above
    const cardSize =
        size === "small" ? styles.cardContainerSmall : styles.cardContainer;

    // Spring props
    const springTouch = useSpring({
        config: config.slow,
        from: { opacity: 0, height: 100 },
        to: { opacity: 1, height: 150 },
    });

    return (
        <AnimatedView style={{ ...springTouch, ...cardSize }}>
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                }}
            >
                <Text style={styles.cardHeader}>{title}</Text>
                <View style={styles.underline} />
                <Text style={styles.infoBigText}>{info}</Text>
            </View>
        </AnimatedView>
    );
};

export default DashCard;

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        padding: "10%",
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "#bdbdbd",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    cardContainerSmall: {
        width: "47%",
        padding: 15,
        backgroundColor: "white",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        color: "#bdbdbd",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        marginTop: -75,
    },
    cardHeader: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#4a4a4a",
        marginBottom: 5,
    },
    underline: {
        width: "50%",
        height: 1,
        backgroundColor: "#eb5a00",
        marginBottom: 10,
        alignSelf: "flex-start",
    },
    infoBigText: {
        fontSize: 50,
        fontFamily: "Montserrat",
        color: "#4a4a4a",
        alignSelf: "center",
    },
});
