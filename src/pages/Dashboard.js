import React, { useState, Fragment } from "react";
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Platform,
} from "react-native";
import { useSpring, animated, config } from "react-spring/native";
import WeightGraph from "../components/WeightGraph";
import { EvilIcons } from "@expo/vector-icons";

const AnimatedView = animated(View);

const Dashboard = ({ changeScreen }) => {
    // This will be set to false until data from firebase
    // has been retrieved
    const [dataLoaded, setDataLoaded] = useState(true);

    // Spring props
    const springGrow = useSpring({
        config: config.slow,
        from: { opacity: 0, marginLeft: "-90%" },
        to: { opacity: 1, marginLeft: "10%" },
    });
    const springFadeIn = useSpring({
        config: config.slow,
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    const springCals = useSpring({
        config: config.slow,
        from: { opacity: 0, marginLeft: "100%" },
        to: { opacity: 1, marginLeft: "10%" },
    });

    // Content rendering helper. To decide whether or
    // not to show the activity indicator based on the
    // value of dataLoaded state
    const renderContent = () => {
        if (dataLoaded) {
            return (
                <Fragment>
                    <AnimatedView
                        style={{
                            ...springFadeIn,
                            ...styles.dietMaintenanceContainer,
                        }}
                    >
                        <Text style={styles.dietHeader}>maintenance</Text>
                        <View style={styles.dietCaloriesContainer}>
                            <Text style={styles.dietMaintenance}>2300</Text>
                            <Text style={styles.dietMaintenancePost}>kcal</Text>
                        </View>
                    </AnimatedView>
                    <AnimatedView
                        style={{ ...springCals, ...styles.cardsContainer }}
                    >
                        <View style={styles.calorieGoal}>
                            <View style={styles.calNumberContainer}>
                                <Text style={styles.calorieText}>2000</Text>
                                <Text style={styles.kcalText}>kcal</Text>
                            </View>
                            <Text style={styles.calorieSubText}>your goal</Text>
                        </View>
                        <View style={styles.calorieCurrent}>
                            <View style={styles.calNumberContainer}>
                                <Text style={styles.calorieText}>835</Text>
                                <Text style={styles.kcalText}>kcal</Text>
                            </View>
                            <Text style={styles.calorieSubText}>consumed</Text>
                        </View>
                    </AnimatedView>
                    <TouchableOpacity style={styles.caloriesFloatingButton}>
                        <EvilIcons
                            name='chevron-right'
                            color={"black"}
                            size={45}
                            style={{ marginTop: 2 }}
                        />
                    </TouchableOpacity>
                    <View style={styles.contentRestContainer}>
                        <Text style={styles.gymHeader}>gym</Text>
                        <TouchableOpacity
                            style={styles.gymTouch}
                            onPress={() => changeScreen("Gym")}
                        >
                            <AnimatedView
                                style={{
                                    ...springGrow,
                                    ...styles.gymContainer,
                                }}
                            >
                                <View style={styles.gymDay}>
                                    <Text style={styles.gymDayText}>
                                        push day
                                    </Text>
                                </View>
                                <View style={styles.gymDetails}>
                                    <Text style={styles.gymDetailsText}>
                                        Bench Press
                                    </Text>
                                    <Text style={styles.gymDetailsText1}>
                                        Dumbell Incline Press
                                    </Text>
                                    <Text style={styles.gymDetailsText2}>
                                        Military Press
                                    </Text>
                                    <EvilIcons
                                        name='chevron-down'
                                        color={"lightgrey"}
                                        size={30}
                                        style={{ alignSelf: "center" }}
                                    />
                                </View>
                            </AnimatedView>
                        </TouchableOpacity>
                        <Text style={styles.weightHeader}>weight</Text>
                        <WeightGraph />
                    </View>
                </Fragment>
            );
        } else {
            return (
                <View
                    style={{
                        width: "100%",
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ActivityIndicator color='white' size='large' />
                </View>
            );
        }
    };

    return <View style={styles.dashContainer}>{renderContent()}</View>;
};

export default Dashboard;

const styles = StyleSheet.create({
    dashContainer: {
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    dietMaintenanceContainer: {
        width: "100%",
        marginTop: Platform.OS === "ios" ? 40 : 70,
        paddingLeft: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    dietCaloriesContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginBottom: -5,
    },
    dietHeader: {
        fontSize: 14,
        fontFamily: "MontserratMedium",
        color: "black",
        alignSelf: "flex-start",
        marginBottom: -10,
    },
    dietMaintenancePost: {
        fontSize: 10,
        fontFamily: "Montserrat",
        color: "black",
        alignSelf: "flex-end",
        paddingBottom: 20,
    },
    dietMaintenance: {
        fontSize: 80,
        fontFamily: "Montserrat",
        color: "black",
    },
    cardsContainer: {
        width: "90%",
        height: 160,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
    },
    calorieGoal: {
        width: "55%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: "#eb5a00",
    },
    calorieCurrent: {
        width: "45%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eb5a00",
    },
    calNumberContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
    },
    calorieText: {
        fontSize: 50,
        fontFamily: "Montserrat",
        color: "white",
    },
    kcalText: {
        fontSize: 10,
        fontFamily: "Montserrat",
        color: "white",
        alignSelf: "flex-end",
        paddingBottom: 10,
    },
    calorieSubText: {
        fontSize: 10,
        fontFamily: "Montserrat",
        color: "white",
        alignSelf: "flex-start",
        marginLeft: "13%",
    },
    caloriesFloatingButton: {
        width: 50,
        height: 50,
        borderRadius: 50 * 0.5,
        marginTop: -25,
        marginRight: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: "#ffd4ba",
    },
    contentRestContainer: {
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
        zIndex: 1,
    },
    gymHeader: {
        fontSize: 14,
        fontFamily: "MontserratMedium",
        color: "black",
        marginLeft: "10%",
    },
    gymTouch: {
        width: "100%",
        display: "flex",
        flex: 1,
    },
    gymContainer: {
        width: "80%",
        height: "100%",
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    gymDay: {
        width: "45%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRightWidth: 1,
        borderRightColor: "#eb5a00",
    },
    gymDayText: {
        fontSize: 40,
        fontFamily: "Montserrat",
        color: "black",
    },
    gymDetails: {
        width: "55%",
        height: "100%",
        paddingLeft: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    gymDetailsText: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "black",
    },
    gymDetailsText1: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "grey",
    },
    gymDetailsText2: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "lightgrey",
    },
    weightHeader: {
        fontSize: 14,
        fontFamily: "MontserratMedium",
        color: "black",
        marginTop: 10,
        marginLeft: "10%",
    },
});
