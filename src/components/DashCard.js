import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSpring, animated, config } from "react-spring/native";

const DashCard = ({ size, title, info, negativeMargin }) => {
    const [amount, setAmount] = useState(parseInt(info));
    // Different card sizes depending on size passed in above
    const cardSize =
        size === "small" ? styles.cardContainerSmall : styles.cardContainer;

    return (
        <TouchableOpacity style={cardSize}>
            <Text style={styles.cardHeader}>{title}</Text>
            <View style={styles.underline} />
            <AnimatedText style={styles.infoBigText}>{info}</AnimatedText>
        </TouchableOpacity>
    );
};

export default DashCard;

const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 150,
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
        height: 150,
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
        backgroundColor: "#f8a978",
        marginBottom: 10,
    },
    infoBigText: {
        fontSize: 50,
        fontFamily: "Montserrat",
        color: "#4a4a4a",
        alignSelf: "center",
    },
});
