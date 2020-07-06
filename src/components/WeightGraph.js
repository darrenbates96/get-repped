import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSpring, animated, config } from "react-spring/native";

const AnimatedView = animated(View);

const WeightGraph = () => {
    // Mimicking real data from firebase
    const dataRaw = ["66.3", "64.1", "62.3"];
    const dataMonths = ["May", "June", "July"];

    // Spring props
    const springBarOne = useSpring({
        config: config.slow,
        from: { height: "0%", opacity: 0 },
        to: { height: `${dataRaw[0]}%`, opacity: 1 },
    });
    const springBarTwo = useSpring({
        config: config.slow,
        from: { height: "0%", opacity: 0 },
        to: { height: `${dataRaw[1]}%`, opacity: 1 },
    });
    const springBarThree = useSpring({
        config: config.slow,
        from: { height: "0%", opacity: 0 },
        to: { height: `${dataRaw[2]}%`, opacity: 1 },
    });

    return (
        <TouchableOpacity style={styles.chartContent}>
            <View style={styles.yLabel}>
                <Text style={styles.yText}>Weight (kg)</Text>
            </View>
            <View style={styles.rightContent}>
                <View style={styles.graphContainer}>
                    <View style={styles.barContainer}>
                        <Text style={styles.barLabel}>{dataRaw[0]}</Text>

                        <AnimatedView
                            style={{ ...springBarOne, ...styles.graphBar }}
                        />
                    </View>
                    <View style={styles.barContainer}>
                        <Text style={styles.barLabel}>{dataRaw[1]}</Text>

                        <AnimatedView
                            style={{ ...springBarTwo, ...styles.graphBar }}
                        />
                    </View>
                    <View style={styles.barContainer}>
                        <Text style={styles.barLabel}>{dataRaw[2]}</Text>

                        <AnimatedView
                            style={{
                                ...springBarThree,
                                ...styles.graphBar,
                            }}
                        />
                    </View>
                </View>
                <View style={styles.xLabel}>
                    <Text style={styles.xText}>{dataMonths[0]}</Text>
                    <Text style={styles.xText}>{dataMonths[1]}</Text>
                    <Text style={styles.xText}>{dataMonths[2]}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default WeightGraph;

const styles = StyleSheet.create({
    chartContent: {
        width: "100%",
        height: 250,
        marginTop: -20,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        shadowColor: "black",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    yLabel: {
        width: "8%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    yText: {
        width: "350%",
        transform: [{ rotate: "-90deg" }],
        textAlign: "center",
        fontSize: 12,
        fontFamily: "Montserrat",
        color: "#4a4a4a",
    },
    rightContent: {
        width: "90%",
        height: "100%",
        display: "flex",
    },
    graphContainer: {
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    xLabel: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    xText: {
        fontSize: 12,
        fontFamily: "Montserrat",
        color: "#4a4a4a",
    },
    barContainer: {
        width: "30%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    barLabel: {
        fontSize: 10,
        fontFamily: "Montserrat",
        color: "#4a4a4a",
    },
    graphBar: {
        width: "100%",
        backgroundColor: "#eb5a00",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
});
