import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSpring, animated, config } from "react-spring/native";

const AnimatedView = animated(View);

const WeightGraph = () => {
    // Mimicking real data from firebase
    const dataRaw = ["66.3", "64.1", "62.3"];
    const dataMonths = ["may", "june", "july"];

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
            <View style={styles.rightContent}>
                <View style={styles.graphContainer}>
                    <View style={styles.barContainer}>
                        <AnimatedView
                            style={{ ...springBarOne, ...styles.graphBar }}
                        >
                            <Text style={styles.barLabel}>{dataRaw[0]}kg</Text>
                        </AnimatedView>
                    </View>
                    <View style={styles.barContainer}>
                        <AnimatedView
                            style={{ ...springBarTwo, ...styles.graphBar }}
                        >
                            <Text style={styles.barLabel}>{dataRaw[1]}kg</Text>
                        </AnimatedView>
                    </View>
                    <View style={styles.barContainer}>
                        <AnimatedView
                            style={{ ...springBarThree, ...styles.graphBar }}
                        >
                            <Text style={styles.barLabel}>{dataRaw[2]}kg</Text>
                        </AnimatedView>
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
        width: "80%",
        height: 200,
        marginTop: -10,
        marginLeft: "10%",
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
    },
    rightContent: {
        width: "100%",
        height: "100%",
        display: "flex",
    },
    graphContainer: {
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    xLabel: {
        width: "100%",
        height: "10%",
        paddingHorizontal: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    xText: {
        fontSize: 12,
        fontFamily: "Montserrat",
        color: "black",
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
        fontSize: 12,
        fontFamily: "Montserrat",
        color: "white",
    },
    graphBar: {
        width: "100%",
        paddingTop: 10,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#eb5a00",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
});
