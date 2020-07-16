import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Gym = () => {
    // Get day of the week
    const date = new Date();
    const weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUES";
    weekday[3] = "WED";
    weekday[4] = "THURS";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContentContainer}>
                <View style={styles.daysContainer}>
                    <Text style={styles.daysText}>
                        {weekday[date.getDay() - 1]}
                    </Text>
                    <View style={styles.todayContainer}>
                        <Text style={styles.todayText}>TODAY</Text>
                        <View style={styles.whiteDot} />
                    </View>
                    <Text style={styles.daysText}>
                        {weekday[date.getDay() + 1]}
                    </Text>
                    <Text style={styles.daysText}>
                        {weekday[date.getDay() + 2]}
                    </Text>
                </View>
            </View>
            <View style={styles.bottomContentContainer}></View>
        </View>
    );
};

export default Gym;

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        flex: 1,
        backgroundColor: "white",
    },
    topContentContainer: {
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eb5a00",
    },
    daysContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
    },
    daysText: {
        fontFamily: "Montserrat",
        fontSize: 14,
        color: "white",
    },
    todayContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    whiteDot: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
        backgroundColor: "white",
        marginTop: 10,
    },
    todayText: {
        fontFamily: "MontserratMedium",
        fontSize: 18,
        color: "white",
    },
    bottomContentContainer: {
        width: "100%",
        display: "flex",
        flex: 1,
        marginTop: -40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "white",
    },
});
